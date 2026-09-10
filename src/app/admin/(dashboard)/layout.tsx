'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAdminAuth } from '@/store/adminAuth';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  FileText, 
  Layers, 
  Users, 
  MessageSquare, 
  Image as ImageIcon, 
  Settings, 
  Mail,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ExternalLink
} from 'lucide-react';
import Logo from '@/components/Logo';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!user) {
      router.push('/admin/login');
    }
  }, [user, router]);

  if (!isMounted || !user) return null;

  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Articles', href: '/admin/articles', icon: FileText },
    { name: 'Categories', href: '/admin/categories', icon: Layers, roles: ['admin', 'editor'] },
    { name: 'Users', href: '/admin/users', icon: Users, roles: ['admin'] },
    { name: 'Comments', href: '/admin/comments', icon: MessageSquare, roles: ['admin', 'editor'] },
    { name: 'Media', href: '/admin/media', icon: ImageIcon, roles: ['admin', 'editor'] },
    { name: 'Settings', href: '/admin/settings', icon: Settings, roles: ['admin'] },
    { name: 'Subscribers', href: '/admin/subscribers', icon: Mail, roles: ['admin'] },
  ];

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden text-gray-900">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 w-64 bg-[#064E3B] text-white flex flex-col z-30 transform transition-transform duration-300 lg:transform-none ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center px-5 border-b border-green-800">
          <Logo variant="admin" />
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.filter(item => !item.roles || item.roles.includes(user.role)).map((item) => {
            const isActive = pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${isActive ? 'bg-primary text-white font-medium shadow-sm' : 'text-green-100 hover:bg-green-800'}`}
              >
                <Icon size={20} className="mr-3 flex-shrink-0" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-green-800 space-y-2">
          <Link href="/" target="_blank" className="flex items-center px-3 py-2 text-green-200 hover:text-white hover:bg-green-800 rounded-lg transition-colors">
            <ExternalLink size={20} className="mr-3 flex-shrink-0" />
            View Website
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2 text-green-200 hover:text-white hover:bg-red-600/80 rounded-lg transition-colors"
          >
            <LogOut size={20} className="mr-3 flex-shrink-0" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 shadow-sm z-10 flex-shrink-0">
          <div className="flex items-center flex-1">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold hidden sm:block">
              {navItems.find(item => pathname.startsWith(item.href))?.name || 'Dashboard'}
            </h1>
          </div>

          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="relative hidden md:block">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64 bg-gray-50 focus:bg-white transition-all"
              />
            </div>
            
            <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>

            <div className="flex items-center pl-4 border-l border-gray-200">
              <div className="hidden md:flex flex-col items-end mr-3">
                <span className="text-sm font-medium leading-tight">{user.name}</span>
                <span className="text-xs text-gray-500 capitalize">{user.role}</span>
              </div>
              <img src={user.avatarUrl} alt={user.name} className="w-9 h-9 rounded-full object-cover border border-gray-200" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto bg-gray-50 p-4 lg:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  categoryId: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  date: string;
  readTime: string;
  featured: boolean;
  trending: boolean;
};

export type Video = {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
};

export const categories_en: Category[] = [
  { id: "c1", name: "National", slug: "national" },
  { id: "c2", name: "International", slug: "international" },
  { id: "c3", name: "Politics", slug: "politics" },
  { id: "c4", name: "Business", slug: "business" },
  { id: "c5", name: "Technology", slug: "technology" },
  { id: "c6", name: "Sports", slug: "sports" },
  { id: "c7", name: "Entertainment", slug: "entertainment" },
  { id: "c8", name: "Environment", slug: "environment" },
  { id: "c9", name: "Health", slug: "health" },
  { id: "c10", name: "Education", slug: "education" },
];

export const categories_hi: Category[] = [
  { id: "c1", name: "राष्ट्रीय", slug: "national" },
  { id: "c2", name: "अंतर्राष्ट्रीय", slug: "international" },
  { id: "c3", name: "राजनीति", slug: "politics" },
  { id: "c4", name: "व्यापार", slug: "business" },
  { id: "c5", name: "प्रौद्योगिकी", slug: "technology" },
  { id: "c6", name: "खेल", slug: "sports" },
  { id: "c7", name: "मनोरंजन", slug: "entertainment" },
  { id: "c8", name: "पर्यावरण", slug: "environment" },
  { id: "c9", name: "स्वास्थ्य", slug: "health" },
  { id: "c10", name: "शिक्षा", slug: "education" },
];

export const articles_en: Article[] = [
  {
    id: "a1",
    title: "Global Summit Reaches New Agreement on Climate Action",
    slug: "global-summit-climate-action",
    excerpt: "Leaders from over 50 nations have pledged to reduce carbon emissions by 40% over the next decade.",
    content: "<p>In a historic gathering, world leaders have finalized a comprehensive agreement aimed at curbing global warming...</p><p>The treaty includes significant commitments to renewable energy and sustainable agriculture.</p>",
    categoryId: "c8",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200",
    author: { name: "Sarah Jenkins", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
    date: "2026-08-22T08:00:00Z",
    readTime: "5 min",
    featured: true,
    trending: true,
  },
  {
    id: "a2",
    title: "Tech Giants Announce Unified AI Safety Guidelines",
    slug: "tech-giants-ai-safety",
    excerpt: "Major technology companies have come together to establish a baseline for ethical artificial intelligence development.",
    content: "<p>The new framework addresses algorithmic bias, transparency, and data privacy...</p>",
    categoryId: "c5",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    author: { name: "David Chen", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" },
    date: "2026-08-21T14:30:00Z",
    readTime: "4 min",
    featured: false,
    trending: true,
  },
  {
    id: "a11", title: "New Smartphone Features Released", slug: "new-smartphone-features", excerpt: "The latest smartphone models showcase incredible camera upgrades.", content: "<p>New features...</p>", categoryId: "c5", imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200", author: { name: "Alice Doe", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-21T10:00:00Z", readTime: "3 min", featured: false, trending: false
  },
  {
    id: "a12", title: "Tech Startups Boom in 2026", slug: "tech-startups-boom", excerpt: "Venture capital funding for AI startups has tripled this quarter.", content: "<p>Funding...</p>", categoryId: "c5", imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1200", author: { name: "John Smith", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-20T14:30:00Z", readTime: "5 min", featured: false, trending: true
  },
  {
    id: "a13", title: "Global Markets See Slight Dip", slug: "global-markets-dip", excerpt: "Investors are cautious ahead of the upcoming central bank meetings.", content: "<p>Markets...</p>", categoryId: "c4", imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200", author: { name: "David Chen", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-20T10:30:00Z", readTime: "4 min", featured: false, trending: false
  },
  {
    id: "a14", title: "Cryptocurrency Regulations Tighten", slug: "crypto-regulations", excerpt: "New laws regarding digital assets are set to take effect next month.", content: "<p>Crypto...</p>", categoryId: "c4", imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1200", author: { name: "Sarah Jenkins", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-19T14:30:00Z", readTime: "6 min", featured: false, trending: true
  },
  {
    id: "a15", title: "National Football Team Wins Friendly Match", slug: "football-team-wins", excerpt: "The national team secured a comfortable 3-0 victory last night.", content: "<p>Football...</p>", categoryId: "c6", imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1200", author: { name: "Mike Tyson", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-19T10:30:00Z", readTime: "2 min", featured: false, trending: false
  },
  {
    id: "a16", title: "Tennis Grand Slam Quarterfinals Set", slug: "tennis-grand-slam", excerpt: "Top seeds advance as the tournament enters its second week.", content: "<p>Tennis...</p>", categoryId: "c6", imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1200", author: { name: "Alice Doe", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-18T14:30:00Z", readTime: "4 min", featured: false, trending: true
  },
  {
    id: "a17", title: "Award Winning Actor's New Movie Teaser", slug: "actor-new-movie-teaser", excerpt: "The highly anticipated teaser for the summer blockbuster is here.", content: "<p>Movie...</p>", categoryId: "c7", imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200", author: { name: "John Smith", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-18T10:30:00Z", readTime: "3 min", featured: false, trending: false
  },
  {
    id: "a18", title: "Music Festival Lineup Announced", slug: "music-festival-lineup", excerpt: "This year's festival features a star-studded lineup of international artists.", content: "<p>Music...</p>", categoryId: "c7", imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1200", author: { name: "Sarah Jenkins", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-17T14:30:00Z", readTime: "5 min", featured: false, trending: true
  },
  {
    id: "a19", title: "Ocean Cleanup Project Reaches Milestone", slug: "ocean-cleanup-milestone", excerpt: "The initiative has successfully removed 1 million tons of plastic from the ocean.", content: "<p>Ocean...</p>", categoryId: "c8", imageUrl: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&q=80&w=1200", author: { name: "David Chen", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-17T10:30:00Z", readTime: "4 min", featured: false, trending: false
  },
  {
    id: "a20", title: "Solar Power Becomes Cheapest Energy Source", slug: "solar-power-cheapest", excerpt: "Recent advancements have made solar energy more affordable than fossil fuels.", content: "<p>Solar...</p>", categoryId: "c8", imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200", author: { name: "Alice Doe", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-16T14:30:00Z", readTime: "6 min", featured: false, trending: true
  },
  {
    id: "a21_en", title: "New Road Infrastructure Project Approved in Garhwa to Ease Traffic Congestion", slug: "garhwa-road-infrastructure", excerpt: "In a major relief to the residents of Garhwa, the district administration has officially approved a new bypass road project.", content: "<p>This strategic infrastructure development aims to significantly reduce the daily traffic congestion in the main city markets. Local business owners have welcomed the decision, anticipating smoother transport and better connectivity.</p>", categoryId: "c1", imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1200", author: { name: "Garhwa Desk", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-23T14:30:00Z", readTime: "3 min", featured: false, trending: true
  },
  {
    id: "a22_en", title: "Garhwa Sadar Hospital Gets Major Upgrade with Modern Medical Facilities", slug: "garhwa-hospital-upgrade", excerpt: "Healthcare in Garhwa received a massive boost today as the Sadar Hospital inaugurated a newly equipped ICU ward.", content: "<p>The Chief Medical Officer stated that critical patients will no longer need to travel to Ranchi or neighboring states for emergency treatments, ensuring timely medical intervention for locals.</p>", categoryId: "c9", imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200", author: { name: "Garhwa Desk", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-23T12:00:00Z", readTime: "2 min", featured: false, trending: false
  },
  {
    id: "a23_en", title: "Heavy Rains Disrupt Life in Garhwa; Administration Launches Rescue Operations", slug: "garhwa-heavy-rains", excerpt: "Incessant heavy rainfall over the past 48 hours has led to severe waterlogging and flash floods in several parts of the Garhwa district.", content: "<p>Road connectivity to over a dozen remote villages has been completely cut off. The district administration has swiftly deployed disaster management teams to distribute food packets and provide safe shelter to affected families.</p>", categoryId: "c8", imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200", author: { name: "Garhwa Desk", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-22T15:30:00Z", readTime: "4 min", featured: false, trending: true
  },
  {
    id: "a24_en", title: "Garhwa Police Bust Inter-State Gang, Recover Multiple Stolen Vehicles", slug: "garhwa-police-bust-gang", excerpt: "In a significant breakthrough, the Garhwa Police conducted a targeted raid and successfully busted an inter-state vehicle theft syndicate.", content: "<p>Five key members of the gang were arrested, and the police recovered 15 stolen motorcycles and two four-wheelers. The Superintendent of Police commended the task force for their diligent intelligence gathering.</p>", categoryId: "c1", imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1200", author: { name: "Garhwa Desk", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-22T10:00:00Z", readTime: "3 min", featured: false, trending: false
  },
  {
    id: "a25_en", title: "Digital Literacy Campaign Launched Across Government Schools in Garhwa", slug: "garhwa-digital-literacy", excerpt: "Aiming to bridge the digital divide, the Garhwa Education Department has launched a comprehensive 'Digital Literacy Campaign'.", content: "<p>The initiative provides students with free access to computer labs and basic internet training, empowering the youth from rural areas with essential modern technological skills.</p>", categoryId: "c10", imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1200", author: { name: "Garhwa Desk", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-21T11:00:00Z", readTime: "2 min", featured: false, trending: false
  },
  {
    id: "a26_en", title: "Local Festival Celebrated with Great Fervor and Grandeur in Garhwa City", slug: "garhwa-local-festival", excerpt: "The streets of Garhwa were vibrant today as thousands of residents celebrated the local regional festival with immense enthusiasm.", content: "<p>Devotees gathered at prominent temples early in the morning to offer special prayers. The district administration ensured strict security arrangements, and the day concluded with beautiful cultural performances by local folk artists.</p>", categoryId: "c7", imageUrl: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&q=80&w=1200", author: { name: "Garhwa Desk", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-21T18:00:00Z", readTime: "3 min", featured: true, trending: true
  },
  {
    id: "a27_en", title: "Agriculture Department Distributes High-Yield Seeds to Farmers in Garhwa", slug: "garhwa-agriculture-seeds", excerpt: "To boost agricultural productivity in the region, the Garhwa Agriculture Department organized a massive distribution camp today.", content: "<p>Hundreds of local farmers received free high-yield, weather-resistant seeds and organic fertilizers. Agricultural scientists were also present to conduct workshops on modern, sustainable farming techniques.</p>", categoryId: "c4", imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200", author: { name: "Garhwa Desk", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-20T09:30:00Z", readTime: "3 min", featured: false, trending: false
  },
  {
    id: "a28_en", title: "Anti-Encroachment Drive in Garhwa Clears Major Markets for Better Traffic Flow", slug: "garhwa-anti-encroachment", excerpt: "The Garhwa Municipal Council, backed by a heavy police presence, executed a massive anti-encroachment drive across the city's primary market zones.", content: "<p>Illegal extensions and unauthorized roadside stalls that caused severe traffic bottlenecks were removed using earthmovers. Authorities have issued stern warnings against any future encroachments.</p>", categoryId: "c1", imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200", author: { name: "Garhwa Desk", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-20T16:00:00Z", readTime: "4 min", featured: false, trending: true
  },
  {
    id: "a29_en", title: "Garhwa District Sports Meet Concludes Successfully, Showcasing Local Talent", slug: "garhwa-sports-meet", excerpt: "The three-day Garhwa District Sports Meet concluded on a high note at the local stadium today.", content: "<p>The event saw enthusiastic participation from hundreds of young athletes competing in track and field, football, and volleyball. The District Commissioner presided over the closing ceremony, awarding medals and encouraging the youth to pursue sports professionally.</p>", categoryId: "c6", imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200", author: { name: "Garhwa Desk", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-19T17:30:00Z", readTime: "3 min", featured: false, trending: false
  },
  {
    id: "a30_en", title: "Garhwa District Council Approves Multiple Development Projects in Recent Meeting", slug: "garhwa-council-approves-projects", excerpt: "The Garhwa District Council held its monthly meeting today, green-lighting several key rural development projects.", content: "<p>Major approvals included the construction of new village roads, the installation of solar-powered water pumps, and the renovation of community halls. Council members emphasized the need for transparency and rapid execution of these public welfare initiatives.</p>", categoryId: "c3", imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1200", author: { name: "Garhwa Desk", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-19T14:00:00Z", readTime: "4 min", featured: false, trending: false
  }
];

export const articles_hi: Article[] = [
  {
    id: "a1",
    title: "वैश्विक शिखर सम्मेलन में जलवायु कार्रवाई पर नए समझौते",
    slug: "global-summit-climate-action",
    excerpt: "50 से अधिक देशों के नेताओं ने अगले दशक में कार्बन उत्सर्जन को 40% तक कम करने का संकल्प लिया है।",
    content: "<p>एक ऐतिहासिक सभा में, विश्व के नेताओं ने ग्लोबल वार्मिंग को रोकने के उद्देश्य से एक व्यापक समझौते को अंतिम रूप दिया है...</p><p>इस संधि में नवीकरणीय ऊर्जा और टिकाऊ कृषि के प्रति महत्वपूर्ण प्रतिबद्धताएं शामिल हैं।</p>",
    categoryId: "c8",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200",
    author: { name: "रीता शर्मा", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
    date: "2026-08-22T08:00:00Z",
    readTime: "5 मिनट",
    featured: true,
    trending: true,
  },
  {
    id: "a2",
    title: "टेक दिग्गजों ने एकीकृत एआई सुरक्षा दिशानिर्देशों की घोषणा की",
    slug: "tech-giants-ai-safety",
    excerpt: "प्रमुख प्रौद्योगिकी कंपनियां नैतिक कृत्रिम बुद्धिमत्ता (AI) विकास के लिए एक आधार रेखा स्थापित करने के लिए एक साथ आई हैं।",
    content: "<p>नया ढांचा एल्गोरिथम पूर्वाग्रह, पारदर्शिता और डेटा गोपनीयता को संबोधित करता है...</p>",
    categoryId: "c5",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    author: { name: "अमित कुमार", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" },
    date: "2026-08-21T14:30:00Z",
    readTime: "4 मिनट",
    featured: false,
    trending: true,
  },
  {
    id: "a11", title: "नए स्मार्टफोन फीचर्स जारी", slug: "new-smartphone-features", excerpt: "नवीनतम स्मार्टफोन मॉडल अविश्वसनीय कैमरा अपग्रेड प्रदर्शित करते हैं।", content: "<p>नए फीचर्स...</p>", categoryId: "c5", imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200", author: { name: "रिया शर्मा", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-21T10:00:00Z", readTime: "3 मिनट", featured: false, trending: false
  },
  {
    id: "a12", title: "2026 में टेक स्टार्टअप्स की बहार", slug: "tech-startups-boom", excerpt: "एआई स्टार्टअप्स के लिए उद्यम पूंजी वित्तपोषण इस तिमाही में तीन गुना हो गया है।", content: "<p>वित्तपोषण...</p>", categoryId: "c5", imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1200", author: { name: "राहुल खन्ना", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-20T14:30:00Z", readTime: "5 मिनट", featured: false, trending: true
  },
  {
    id: "a13", title: "वैश्विक बाजारों में मामूली गिरावट", slug: "global-markets-dip", excerpt: "आगामी केंद्रीय बैंक की बैठकों से पहले निवेशक सतर्क हैं।", content: "<p>बाजार...</p>", categoryId: "c4", imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200", author: { name: "अनिल कपूर", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-20T10:30:00Z", readTime: "4 मिनट", featured: false, trending: false
  },
  {
    id: "a14", title: "क्रिप्टोक्यूरेंसी नियम हुए सख्त", slug: "crypto-regulations", excerpt: "डिजिटल संपत्ति से संबंधित नए कानून अगले महीने से लागू होने वाले हैं।", content: "<p>क्रिप्टो...</p>", categoryId: "c4", imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1200", author: { name: "स्नेहा रेड्डी", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-19T14:30:00Z", readTime: "6 मिनट", featured: false, trending: true
  },
  {
    id: "a15", title: "राष्ट्रीय फुटबॉल टीम ने मैत्री मैच जीता", slug: "football-team-wins", excerpt: "राष्ट्रीय टीम ने कल रात 3-0 से आसान जीत हासिल की।", content: "<p>फुटबॉल...</p>", categoryId: "c6", imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1200", author: { name: "सुनील छेत्री", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-19T10:30:00Z", readTime: "2 मिनट", featured: false, trending: false
  },
  {
    id: "a16", title: "टेनिस ग्रैंड स्लैम क्वार्टर फाइनल तय", slug: "tennis-grand-slam", excerpt: "शीर्ष वरीयता प्राप्त खिलाड़ी दूसरे सप्ताह में प्रवेश कर गए हैं।", content: "<p>टेनिस...</p>", categoryId: "c6", imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1200", author: { name: "सानिया मिर्जा", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-18T14:30:00Z", readTime: "4 मिनट", featured: false, trending: true
  },
  {
    id: "a17", title: "पुरस्कार विजेता अभिनेता की नई फिल्म का टीज़र", slug: "actor-new-movie-teaser", excerpt: "समर ब्लॉकबस्टर का बहुप्रतीक्षित टीज़र आ गया है।", content: "<p>फिल्म...</p>", categoryId: "c7", imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200", author: { name: "शाहरुख खान", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-18T10:30:00Z", readTime: "3 मिनट", featured: false, trending: false
  },
  {
    id: "a18", title: "संगीत समारोह लाइनअप की घोषणा", slug: "music-festival-lineup", excerpt: "इस वर्ष के समारोह में अंतरराष्ट्रीय कलाकारों की शानदार लाइनअप शामिल है।", content: "<p>संगीत...</p>", categoryId: "c7", imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1200", author: { name: "अरिजीत सिंह", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-17T14:30:00Z", readTime: "5 मिनट", featured: false, trending: true
  },
  {
    id: "a19", title: "महासागर सफाई परियोजना एक मील का पत्थर तक पहुंची", slug: "ocean-cleanup-milestone", excerpt: "पहल ने महासागर से 1 मिलियन टन प्लास्टिक को सफलतापूर्वक हटा दिया है।", content: "<p>महासागर...</p>", categoryId: "c8", imageUrl: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&q=80&w=1200", author: { name: "डॉ. विकास मिश्रा", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-17T10:30:00Z", readTime: "4 मिनट", featured: false, trending: false
  },
  {
    id: "a20", title: "सौर ऊर्जा बनी सबसे सस्ती ऊर्जा", slug: "solar-power-cheapest", excerpt: "हाल की प्रगति ने सौर ऊर्जा को जीवाश्म ईंधन से अधिक किफायती बना दिया है।", content: "<p>सौर...</p>", categoryId: "c8", imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200", author: { name: "नीलम मेहता", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-16T14:30:00Z", readTime: "6 मिनट", featured: false, trending: true
  },
  {
    id: "a21_hi", title: "गढ़वा: नई सड़क परियोजना को मिली मंजूरी, ट्रैफिक जाम से मिलेगी राहत", slug: "garhwa-road-infrastructure", excerpt: "गढ़वा शहर में बढ़ते ट्रैफिक की समस्या को देखते हुए प्रशासन ने एक नई बाईपास सड़क परियोजना को मंजूरी दे दी है।", content: "<p>इस सड़क के निर्माण से शहर के मुख्य बाजार में लगने वाले जाम से लोगों को बड़ी राहत मिलेगी। स्थानीय व्यापारियों और नागरिकों ने सरकार के इस कदम का स्वागत किया है और उम्मीद जताई है कि काम जल्द शुरू होगा।</p>", categoryId: "c1", imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1200", author: { name: "गढ़वा डेस्क", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-23T14:30:00Z", readTime: "3 मिनट", featured: false, trending: true
  },
  {
    id: "a22_hi", title: "गढ़वा सदर अस्पताल में नई सुविधाओं का उद्घाटन, मरीजों को मिलेगी बेहतर देखभाल", slug: "garhwa-hospital-upgrade", excerpt: "गढ़वा सदर अस्पताल में आज आधुनिक चिकित्सा उपकरणों और एक नए आईसीयू (ICU) वार्ड का उद्घाटन किया गया।", content: "<p>मुख्य चिकित्सा अधिकारी ने बताया कि अब गंभीर बीमारियों के इलाज के लिए मरीजों को रांची या दूसरे बड़े शहरों में जाने की आवश्यकता नहीं पड़ेगी। इससे गढ़वा के ग्रामीण और शहरी दोनों क्षेत्रों के लोगों को लाभ मिलेगा।</p>", categoryId: "c9", imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200", author: { name: "गढ़वा डेस्क", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-23T12:00:00Z", readTime: "2 मिनट", featured: false, trending: false
  },
  {
    id: "a23_hi", title: "गढ़वा में भारी बारिश के बाद कई गांवों का संपर्क टूटा, प्रशासन ने शुरू किया राहत कार्य", slug: "garhwa-heavy-rains", excerpt: "पिछले 48 घंटों से गढ़वा जिले में हो रही लगातार भारी बारिश के कारण कई नदियां उफान पर हैं।", content: "<p>बाढ़ जैसे हालात पैदा होने से दर्जनों गांवों का जिला मुख्यालय से संपर्क टूट गया है। जिला प्रशासन ने तुरंत एक्शन लेते हुए एनडीआरएफ (NDRF) की टीमों को तैनात कर दिया है और प्रभावित इलाकों में राहत सामग्री पहुंचाई जा रही है।</p>", categoryId: "c8", imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200", author: { name: "गढ़वा डेस्क", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-22T15:30:00Z", readTime: "4 मिनट", featured: false, trending: true
  },
  {
    id: "a24_hi", title: "गढ़वा पुलिस को मिली बड़ी कामयाबी, अंतरराज्यीय वाहन चोर गिरोह का भंडाफोड़", slug: "garhwa-police-bust-gang", excerpt: "गढ़वा पुलिस ने एक गुप्त सूचना के आधार पर छापेमारी कर एक बड़े अंतरराज्यीय वाहन चोर गिरोह का भंडाफोड़ किया है।", content: "<p>पुलिस ने गिरोह के 5 सदस्यों को गिरफ्तार किया है और उनके पास से चोरी की 15 मोटरसाइकिलें और 2 कारें बरामद की हैं। पुलिस अधीक्षक ने बताया कि यह गिरोह पड़ोसी राज्यों में भी सक्रिय था।</p>", categoryId: "c1", imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1200", author: { name: "गढ़वा डेस्क", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-22T10:00:00Z", readTime: "3 मिनट", featured: false, trending: false
  },
  {
    id: "a25_hi", title: "गढ़वा के स्कूलों में शुरू हुआ 'डिजिटल साक्षरता अभियान', बच्चों को मुफ्त कंप्यूटर शिक्षा", slug: "garhwa-digital-literacy", excerpt: "गढ़वा जिले के सरकारी स्कूलों में आज से 'डिजिटल साक्षरता अभियान' की शुरुआत की गई है।", content: "<p>इस योजना के तहत स्कूली बच्चों को मुफ्त में कंप्यूटर और इंटरनेट की बुनियादी शिक्षा दी जाएगी। जिला शिक्षा अधिकारी ने कहा कि इसका उद्देश्य ग्रामीण बच्चों को आधुनिक तकनीक से जोड़ना है ताकि वे भविष्य की चुनौतियों के लिए तैयार हो सकें।</p>", categoryId: "c10", imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1200", author: { name: "गढ़वा डेस्क", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-21T11:00:00Z", readTime: "2 मिनट", featured: false, trending: false
  },
  {
    id: "a26_hi", title: "गढ़वा में धूमधाम से मनाया गया स्थानीय पर्व, हजारों श्रद्धालुओं ने की पूजा-अर्चना", slug: "garhwa-local-festival", excerpt: "गढ़वा शहर और आसपास के ग्रामीण इलाकों में आज स्थानीय पर्व को बेहद धूमधाम और हर्षोल्लास के साथ मनाया गया।", content: "<p>प्रमुख मंदिरों में सुबह से ही भक्तों की भारी भीड़ देखने को मिली। प्रशासन ने सुरक्षा के कड़े इंतजाम किए थे। शाम को सांस्कृतिक कार्यक्रमों का भी आयोजन किया गया, जिसमें स्थानीय कलाकारों ने अपनी प्रस्तुति दी।</p>", categoryId: "c7", imageUrl: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&q=80&w=1200", author: { name: "गढ़वा डेस्क", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-21T18:00:00Z", readTime: "3 मिनट", featured: true, trending: true
  },
  {
    id: "a27_hi", title: "कृषि विभाग की पहल: गढ़वा के किसानों को दिए गए उन्नत किस्म के बीज", slug: "garhwa-agriculture-seeds", excerpt: "गढ़वा जिले के किसानों की आय बढ़ाने और कृषि पैदावार में सुधार के लिए कृषि विभाग ने आज एक विशेष शिविर का आयोजन किया।", content: "<p>इस शिविर में सैकड़ों किसानों को मुफ्त में उन्नत किस्म के बीज और उर्वरक बांटे गए। साथ ही, कृषि विशेषज्ञों ने किसानों को नई और आधुनिक खेती की तकनीकों के बारे में भी जानकारी दी।</p>", categoryId: "c4", imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200", author: { name: "गढ़वा डेस्क", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-20T09:30:00Z", readTime: "3 मिनट", featured: false, trending: false
  },
  {
    id: "a28_hi", title: "गढ़वा शहर में चला अतिक्रमण हटाओ अभियान, प्रमुख बाजारों से हटाया गया अवैध कब्जा", slug: "garhwa-anti-encroachment", excerpt: "गढ़वा नगर परिषद और पुलिस प्रशासन ने संयुक्त रूप से शहर के प्रमुख बाजारों में अतिक्रमण हटाओ अभियान चलाया।", content: "<p>सड़कों के किनारे अवैध रूप से लगाई गई दुकानों और शेड्स को बुलडोजर की मदद से हटाया गया। अधिकारियों ने चेतावनी दी है कि दोबारा अतिक्रमण करने वालों पर सख्त कानूनी कार्रवाई की जाएगी।</p>", categoryId: "c1", imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200", author: { name: "गढ़वा डेस्क", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-20T16:00:00Z", readTime: "4 मिनट", featured: false, trending: true
  },
  {
    id: "a29_hi", title: "गढ़वा में जिला स्तरीय खेलकूद प्रतियोगिता का शानदार समापन, युवाओं ने दिखाया दम", slug: "garhwa-sports-meet", excerpt: "गढ़वा के स्थानीय स्टेडियम में पिछले तीन दिनों से चल रही जिला स्तरीय खेलकूद प्रतियोगिता का आज शानदार समापन हुआ।", content: "<p>एथलेटिक्स, फुटबॉल और वॉलीबॉल में जिले भर के युवाओं ने बढ़-चढ़कर हिस्सा लिया। विजेता टीमों और खिलाड़ियों को जिला उपायुक्त ने मेडल और सर्टिफिकेट देकर सम्मानित किया।</p>", categoryId: "c6", imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200", author: { name: "गढ़वा डेस्क", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-19T17:30:00Z", readTime: "3 मिनट", featured: false, trending: false
  },
  {
    id: "a30_hi", title: "गढ़वा जिला परिषद की बैठक में विकास योजनाओं पर लगी मुहर, जल्द शुरू होगा काम", slug: "garhwa-council-approves-projects", excerpt: "गढ़वा जिला परिषद की मासिक बैठक आज संपन्न हुई, जिसमें ग्रामीण विकास, पेयजल आपूर्ति और सड़क निर्माण से जुड़ी कई महत्वपूर्ण योजनाओं को मंजूरी दी गई।", content: "<p>परिषद के अध्यक्ष ने अधिकारियों को निर्देश दिया है कि आवंटित फंड का सही इस्तेमाल हो और सभी विकास कार्य तय समय सीमा के भीतर पूरे किए जाएं।</p>", categoryId: "c3", imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1200", author: { name: "गढ़वा डेस्क", avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }, date: "2026-08-19T14:00:00Z", readTime: "4 मिनट", featured: false, trending: false
  }
];

export const videos_en: Video[] = [
  { id: "v1", title: "Highlights: Climate Agreement Signing", thumbnailUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=600", videoUrl: "#" },
  { id: "v2", title: "Market Analysis: What the Jobs Report Means", thumbnailUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600", videoUrl: "#" }
];

export const videos_hi: Video[] = [
  { id: "v1", title: "हाइलाइट्स: जलवायु समझौते पर हस्ताक्षर", thumbnailUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=600", videoUrl: "#" },
  { id: "v2", title: "बाजार विश्लेषण: रोजगार रिपोर्ट के क्या मायने हैं", thumbnailUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600", videoUrl: "#" }
];

export const breakingNews_en = ["Garhwa Road Infrastructure Project Approved...", "Garhwa Police Busted Inter-State Gang..."];
export const breakingNews_hi = ["गढ़वा में नई सड़क परियोजना को मंजूरी...", "गढ़वा पुलिस ने वाहन चोर गिरोह का किया भंडाफोड़..."];

export function getCategories(lang: string) { return lang === 'hi' ? categories_hi : categories_en; }
export function getArticles(lang: string) { return lang === 'hi' ? articles_hi : articles_en; }
export function getVideos(lang: string) { return lang === 'hi' ? videos_hi : videos_en; }
export function getBreakingNews(lang: string) { return lang === 'hi' ? breakingNews_hi : breakingNews_en; }

export function getCategoryById(id: string, lang: string) {
  return getCategories(lang).find(c => c.id === id);
}

export function getCategoryBySlug(slug: string, lang: string) {
  return getCategories(lang).find(c => c.slug === slug);
}

export function getArticlesByCategory(categoryId: string, lang: string) {
  return getArticles(lang).filter(a => a.categoryId === categoryId);
}

export function getArticleBySlug(slug: string, lang: string) {
  return getArticles(lang).find(a => a.slug === slug);
}

export function searchArticles(query: string, lang: string) {
  const lowercaseQuery = query.toLowerCase();
  return getArticles(lang).filter(a => 
    a.title.toLowerCase().includes(lowercaseQuery) || 
    a.excerpt.toLowerCase().includes(lowercaseQuery)
  );
}


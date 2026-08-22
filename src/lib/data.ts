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

export const breakingNews_en = ["Global markets reach record highs today...", "Major tech merger announced..."];
export const breakingNews_hi = ["वैश्विक बाजारों ने आज रिकॉर्ड ऊंचाई छुई...", "प्रमुख टेक कंपनियों के विलय की घोषणा..."];

export function getCategories(lang: string) { return lang === 'hi' ? categories_hi : categories_en; }
export function getArticles(lang: string) { return lang === 'hi' ? articles_hi : articles_en; }
export function getVideos(lang: string) { return lang === 'hi' ? videos_hi : videos_en; }
export function getBreakingNews(lang: string) { return lang === 'hi' ? breakingNews_hi : breakingNews_en; }

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

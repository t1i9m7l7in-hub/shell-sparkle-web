import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh-TW' | 'zh-CN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  'en': {
    // Navigation
    'nav.home': 'Home',
    'nav.corporate': 'Corporate Information',
    'nav.financial': 'Financial Information',
    'nav.news': 'News',
    'nav.directory': 'Company Directory',
    'nav.about': 'About',
    'nav.overview': 'Overview',
    'nav.vision': 'Vision & Mission',
    'nav.manufacturing': 'Manufacturing',
    'nav.technology': 'Technology',
    'nav.investments': 'Investments',
    
    // Hero
    'hero.title': 'Shell Electric Holdings Limited',
    'hero.subtitle': 'A Leading Manufacturer in Consumer Electrical Appliances Since 1950s',
    'hero.cta': 'Learn More',
    
    // Home sections
    'home.welcome': 'Welcome to SMC',
    'home.intro': 'Expanded upon its strong industrial foundation and management expertise, SMC has today consolidated its business operations into three major areas.',
    'home.manufacturing': 'Manufacturing',
    'home.manufacturing.desc': 'World\'s largest ceiling fan company with annual capacity of over six million units.',
    'home.technology': 'Technology',
    'home.technology.desc': 'Leading semiconductor business with advanced power discrete semiconductors.',
    'home.investments': 'Investments',
    'home.investments.desc': 'Strategic investments in property and transportation for long-term growth.',
    'home.history': 'Six Decades of Excellence',
    'home.history.desc': 'Since 1950s, SMC pioneered Hong Kong\'s ceiling fan manufacturing industry and was the first manufacturer to export ceiling fans to the international market.',
    
    // Corporate
    'corporate.title': 'Corporate Information',
    'corporate.overview': 'Overview',
    'corporate.overview.content': 'Shell Electric Holdings Limited ("SMC" or "the Group") is a leading manufacturer in consumer electrical appliances since 1950s. Expanded upon its strong industrial foundation and management expertise, SMC has today consolidated its business operations into three major areas, namely Manufacturing, Technology and Investment, giving the Group more synergetic advantages in its future development.',
    'corporate.vision': 'Vision & Mission',
    'corporate.vision.title': 'Vision',
    'corporate.vision.content': 'To become the world\'s recognized leader for technological innovation',
    'corporate.mission.title': 'Mission',
    'corporate.mission.content1': 'To build our strategic strength as an EMS and ODM expert with specialization in innovative and hi-tech home electronics, optics and imaging product application sectors',
    'corporate.mission.content2': 'To foster aggressive development of proprietary technology and strengthen our intellectual properties portfolio',
    
    // Manufacturing
    'manufacturing.title': 'Manufacturing',
    'manufacturing.intro': 'Since 1950s, SMC pioneered Hong Kong\'s ceiling fan manufacturing industry and was the first manufacturer to export ceiling fans to the international market.',
    'manufacturing.capacity': 'Annual capacity of over six million units',
    'manufacturing.consumer': 'Consumer Electrical Appliance',
    'manufacturing.consumer.desc': 'In 1997, the Group capitalized on an opportunity to acquire an optical communication products company that had created substantial investment return for the Group.',
    'manufacturing.ems': 'Electronic Manufacturing Services',
    'manufacturing.ems.desc': 'With its specialized technical competence and precision manufacturing experience, the EMS division is fully proficient to compete effectively for contracts from major brands in the world.',
    
    // Technology
    'technology.title': 'Technology',
    'technology.semiconductor': 'Semiconductor Business',
    'technology.semiconductor.desc': 'PFC is listed on Hong Kong GEM board on 7 Oct 2016 with stock code 8231.HK. PFC manufactures and sells power discrete semiconductors under its own \'PFC\' brand.',
    'technology.patents': '46 Patents',
    'technology.patents.desc': 'Registered in the USA, Taiwan and the PRC with respect to the device structure and/or manufacturing method',
    
    // Investments
    'investments.title': 'Investments',
    'investments.property': 'Property',
    'investments.property.desc': 'The Group\'s property investment portfolio consists of commercial and industrial properties located in prime cities in the PRC, Hong Kong, and Vietnam.',
    'investments.transport': 'Transportation Business',
    'investments.transport.desc': 'Since 1992, SMC has maintained a growing interest in the transportation business that provides stable income contribution.',
    
    // Financial
    'financial.title': 'Financial Information',
    'financial.reports': 'Annual Reports',
    'financial.announcements': 'Announcements',
    'financial.governance': 'Corporate Governance',
    
    // News
    'news.title': 'News',
    'news.latest': 'Latest News',
    'news.archive': 'News Archive',
    
    // Directory
    'directory.title': 'Company Directory',
    'directory.hq': 'Headquarters',
    'directory.subsidiaries': 'Subsidiaries',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.contact': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  },
  'zh-TW': {
    // Navigation
    'nav.home': '首頁',
    'nav.corporate': '公司資訊',
    'nav.financial': '財務資訊',
    'nav.news': '新聞',
    'nav.directory': '公司目錄',
    'nav.about': '關於我們',
    'nav.overview': '概覽',
    'nav.vision': '願景與使命',
    'nav.manufacturing': '製造業務',
    'nav.technology': '科技業務',
    'nav.investments': '投資業務',
    
    // Hero
    'hero.title': '蜆殼電器控股有限公司',
    'hero.subtitle': '自1950年代以來領先的消費電器製造商',
    'hero.cta': '了解更多',
    
    // Home sections
    'home.welcome': '歡迎來到蜆殼電器',
    'home.intro': '憑藉深厚的工業基礎和管理專長，蜆殼電器今天已將業務整合為三大領域。',
    'home.manufacturing': '製造業務',
    'home.manufacturing.desc': '全球最大的吊扇公司，年產能超過六百萬台。',
    'home.technology': '科技業務',
    'home.technology.desc': '領先的半導體業務，擁有先進的功率分立半導體。',
    'home.investments': '投資業務',
    'home.investments.desc': '在房地產和運輸業務的戰略投資，實現長期增長。',
    'home.history': '六十年卓越歷史',
    'home.history.desc': '自1950年代，蜆殼電器開創了香港的吊扇製造業，是首家將吊扇出口到國際市場的製造商。',
    
    // Corporate
    'corporate.title': '公司資訊',
    'corporate.overview': '概覽',
    'corporate.overview.content': '蜆殼電器控股有限公司（「蜆殼電器」或「集團」）自1950年代以來一直是消費電器的領先製造商。憑藉深厚的工業基礎和管理專長，蜆殼電器今天已將業務整合為三大領域，即製造、科技和投資，為集團未來發展帶來更多協同優勢。',
    'corporate.vision': '願景與使命',
    'corporate.vision.title': '願景',
    'corporate.vision.content': '成為全球公認的技術創新領導者',
    'corporate.mission.title': '使命',
    'corporate.mission.content1': '建立我們作為EMS和ODM專家的戰略優勢，專注於創新和高科技家電、光學和影像產品應用領域',
    'corporate.mission.content2': '積極發展專有技術，加強我們的知識產權組合',
    
    // Manufacturing
    'manufacturing.title': '製造業務',
    'manufacturing.intro': '自1950年代，蜆殼電器開創了香港的吊扇製造業，是首家將吊扇出口到國際市場的製造商。',
    'manufacturing.capacity': '年產能超過六百萬台',
    'manufacturing.consumer': '消費電器',
    'manufacturing.consumer.desc': '1997年，集團把握機會收購了一家光通信產品公司，為集團創造了可觀的投資回報。',
    'manufacturing.ems': '電子製造服務',
    'manufacturing.ems.desc': '憑藉專業的技術能力和精密製造經驗，EMS部門完全有能力有效地競爭世界主要品牌的合同。',
    
    // Technology
    'technology.title': '科技業務',
    'technology.semiconductor': '半導體業務',
    'technology.semiconductor.desc': 'PFC於2016年10月7日在香港創業板上市，股票代碼為8231.HK。PFC以自有品牌「PFC」製造和銷售功率分立半導體。',
    'technology.patents': '46項專利',
    'technology.patents.desc': '在美國、台灣和中國註冊的器件結構和/或製造方法專利',
    
    // Investments
    'investments.title': '投資業務',
    'investments.property': '房地產',
    'investments.property.desc': '集團的房地產投資組合包括位於中國、香港和越南主要城市的商業和工業物業。',
    'investments.transport': '運輸業務',
    'investments.transport.desc': '自1992年以來，蜆殼電器在運輸業務方面保持著持續增長的興趣，為集團提供穩定的收入貢獻。',
    
    // Financial
    'financial.title': '財務資訊',
    'financial.reports': '年度報告',
    'financial.announcements': '公告',
    'financial.governance': '企業管治',
    
    // News
    'news.title': '新聞',
    'news.latest': '最新新聞',
    'news.archive': '新聞存檔',
    
    // Directory
    'directory.title': '公司目錄',
    'directory.hq': '總部',
    'directory.subsidiaries': '附屬公司',
    
    // Footer
    'footer.rights': '版權所有',
    'footer.contact': '聯繫我們',
    'footer.privacy': '隱私政策',
    'footer.terms': '使用條款',
  },
  'zh-CN': {
    // Navigation
    'nav.home': '首页',
    'nav.corporate': '公司资讯',
    'nav.financial': '财务资讯',
    'nav.news': '新闻',
    'nav.directory': '公司目录',
    'nav.about': '关于我们',
    'nav.overview': '概览',
    'nav.vision': '愿景与使命',
    'nav.manufacturing': '制造业务',
    'nav.technology': '科技业务',
    'nav.investments': '投资业务',
    
    // Hero
    'hero.title': '蚬壳电器控股有限公司',
    'hero.subtitle': '自1950年代以来领先的消费电器制造商',
    'hero.cta': '了解更多',
    
    // Home sections
    'home.welcome': '欢迎来到蚬壳电器',
    'home.intro': '凭借深厚的工业基础和管理专长，蚬壳电器今天已将业务整合为三大领域。',
    'home.manufacturing': '制造业务',
    'home.manufacturing.desc': '全球最大的吊扇公司，年产能超过六百万台。',
    'home.technology': '科技业务',
    'home.technology.desc': '领先的半导体业务，拥有先进的功率分立半导体。',
    'home.investments': '投资业务',
    'home.investments.desc': '在房地产和运输业务的战略投资，实现长期增长。',
    'home.history': '六十年卓越历史',
    'home.history.desc': '自1950年代，蚬壳电器开创了香港的吊扇制造业，是首家将吊扇出口到国际市场的制造商。',
    
    // Corporate
    'corporate.title': '公司资讯',
    'corporate.overview': '概览',
    'corporate.overview.content': '蚬壳电器控股有限公司（「蚬壳电器」或「集团」）自1950年代以来一直是消费电器的领先制造商。凭借深厚的工业基础和管理专长，蚬壳电器今天已将业务整合为三大领域，即制造、科技和投资，为集团未来发展带来更多协同优势。',
    'corporate.vision': '愿景与使命',
    'corporate.vision.title': '愿景',
    'corporate.vision.content': '成为全球公认的技术创新领导者',
    'corporate.mission.title': '使命',
    'corporate.mission.content1': '建立我们作为EMS和ODM专家的战略优势，专注于创新和高科技家电、光学和影像产品应用领域',
    'corporate.mission.content2': '积极发展专有技术，加强我们的知识产权组合',
    
    // Manufacturing
    'manufacturing.title': '制造业务',
    'manufacturing.intro': '自1950年代，蚬壳电器开创了香港的吊扇制造业，是首家将吊扇出口到国际市场的制造商。',
    'manufacturing.capacity': '年产能超过六百万台',
    'manufacturing.consumer': '消费电器',
    'manufacturing.consumer.desc': '1997年，集团把握机会收购了一家光通信产品公司，为集团创造了可观的投资回报。',
    'manufacturing.ems': '电子制造服务',
    'manufacturing.ems.desc': '凭借专业的技术能力和精密制造经验，EMS部门完全有能力有效地竞争世界主要品牌的合同。',
    
    // Technology
    'technology.title': '科技业务',
    'technology.semiconductor': '半导体业务',
    'technology.semiconductor.desc': 'PFC于2016年10月7日在香港创业板上市，股票代码为8231.HK。PFC以自有品牌「PFC」制造和销售功率分立半导体。',
    'technology.patents': '46项专利',
    'technology.patents.desc': '在美国、台湾和中国注册的器件结构和/或制造方法专利',
    
    // Investments
    'investments.title': '投资业务',
    'investments.property': '房地产',
    'investments.property.desc': '集团的房地产投资组合包括位于中国、香港和越南主要城市的商业和工业物业。',
    'investments.transport': '运输业务',
    'investments.transport.desc': '自1992年以来，蚬壳电器在运输业务方面保持着持续增长的兴趣，为集团提供稳定的收入贡献。',
    
    // Financial
    'financial.title': '财务资讯',
    'financial.reports': '年度报告',
    'financial.announcements': '公告',
    'financial.governance': '企业管治',
    
    // News
    'news.title': '新闻',
    'news.latest': '最新新闻',
    'news.archive': '新闻存档',
    
    // Directory
    'directory.title': '公司目录',
    'directory.hq': '总部',
    'directory.subsidiaries': '附属公司',
    
    // Footer
    'footer.rights': '版权所有',
    'footer.contact': '联系我们',
    'footer.privacy': '隐私政策',
    'footer.terms': '使用条款',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh-TW' | 'zh-CN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const translations: Record<Language, Record<string, string>> = {
  'en': {
    // Navigation
    'nav.home': 'Home',
    'nav.corporate': 'Corporate Information',
    'nav.financial': 'Financial Information',
    'nav.news': 'News',
    'nav.directory': 'Contact Us',
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
    'home.intro': 'Expanded upon its strong industrial foundation and management expertise, SMC has today consolidated its business operations into four major areas.',
    'home.manufacturing': 'Manufacturing',
    'home.manufacturing.desc': 'World\'s largest ceiling fan company with annual capacity of over six million units.',
    'home.technology': 'Technology',
    'home.technology.desc': 'Leading semiconductor business with advanced power discrete semiconductors.',
    'home.investments': 'Investments',
    'home.investments.desc': 'Strategic investments in property and transportation for long-term growth.',
    'home.history': 'Six Decades of Excellence',
    'home.history.desc': 'Since 1950s, SMC pioneered Hong Kong\'s ceiling fan manufacturing industry and was the first manufacturer to export ceiling fans to the international market.',
    'home.history.desc2': 'The Group established the microwave ovens business in mid 1980\'s and quickly became the best seller in the China market. Such outstanding success attracted the leading home appliance company, Whirlpool Corporation to joint venture with SMC.',
    
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
    'manufacturing.consumer': 'Electrical Appliances',
    'manufacturing.consumer.desc': 'In 1997, the Group capitalized on an opportunity to acquire an optical communication products company that had created substantial investment return for the Group.',
    'manufacturing.ems': 'Electronic Manufacturing Services',
    'manufacturing.ems.desc': 'With its specialized technical competence and precision manufacturing experience, the EMS division is fully proficient to compete effectively for contracts from major brands in the world.',
    'manufacturing.heritage.title': 'Our Heritage & Global Legacy',
    'manufacturing.heritage.p1': 'Founded in the 1950s, SMC began with a bold vision: to redefine home comfort. Starting as a pioneer in Hong Kong\'s electric fan industry, we proudly became the region\'s very first manufacturer to export premium ceiling fans to the global market under our signature "SMC" brand.',
    'manufacturing.heritage.p2': 'For over seven decades, we have evolved from a visionary regional pioneer into a powerhouse of advanced OEM and Electronic Manufacturing Services (EMS). Today, SMC stands as a trusted global benchmark for manufacturing excellence, combining deep heritage with cutting-edge innovation.',
    'manufacturing.electric.title': '1. Electric Tools & Fans',
    'manufacturing.electric.desc': 'Reflecting our robust corporate growth, this core business division was officially regularized under SMC Electric Limited, which successfully listed on the Main Board of the Stock Exchange of Hong Kong in 2020 (Stock Code: 2381.HK). Backed by public-company governance and substantial financial transparency, our manufacturing ecosystem delivers versatile products split into two core business streams:',
    'manufacturing.electric.bullet1.label': 'OEM/Contract Manufacturing:',
    'manufacturing.electric.bullet1.text': 'We co-design and manufacture high-performance, rechargeable electric tools for premier international brands—including industrial cordless fans, heavy-duty work lights, and high-efficiency vacuum cleaners.',
    'manufacturing.electric.bullet2.label': 'The "SMC" Brand Portfolio:',
    'manufacturing.electric.bullet2.text': 'We continue to lead the domestic and international ventilation markets with our line of high-durability ceiling fans, wall-mounted fans, pedestal stand fans, and orbital fans.',
    'manufacturing.electric.linkLabel': 'To know more:',
    'manufacturing.optics.title': '2. Optics & Imaging Components',
    'manufacturing.optics.desc': 'Leveraging decades of specialized technical expertise and high-precision manufacturing, SMC is the partner of choice for the world\'s leading technology brands. We engineer and manufacture complex optics and imaging components that power global industries. Our core capabilities include:',
    'manufacturing.optics.bullet1': 'High-Performance Fusers',
    'manufacturing.optics.bullet2': 'Precision Laser Scanning Units (LSU)',
    'manufacturing.optics.bullet3': 'Advanced Paper Handling Options',
    'manufacturing.optics.footer': 'With SMC, global brands gain a competitive edge through flawless execution, rigorous quality control, and scalable production.',
    'manufacturing.optics.link': 'To know more: www.smc-multimedia.com',
    
    // Technology
    'technology.title': 'Technology',
    'technology.semiconductor': 'Semiconductor Business',
    'technology.semiconductor.desc': 'PFC manufactures and sells power discrete semiconductors under its own \'PFC\' brand.',
    'technology.patents': '46 Patents',
    'technology.patents.desc': 'Registered in the USA, Taiwan and the PRC with respect to the device structure and/or manufacturing method',
    
    // Investments
    'investments.title': 'Investments',
    'investments.property': 'Property',
    
    'investments.transport': 'Transportation Business',
    'investments.transport.desc': 'Since 1992, SMC has maintained a growing interest in the transportation business that provides stable income contribution.',
    
    // Financial
    'financial.title': 'Financial Information',
    'financial.subtitle': 'Investor Relations & Financial Reports',
    'financial.annualReports': 'Annual Reports',
    'financial.annualReport.title': 'ANNUAL REPORT {{year}}',
    'financial.comingSoon': 'Coming soon',
    'financial.pdf.format': 'PDF format',
    'financial.pdf.download': 'PDF',
    'financial.governance.title': 'Corporate Governance',
    'financial.governance.p1': 'Shell Electric Holdings Limited, with over 60 years of history since its founding, remains committed to maintaining high standards of corporate governance. The Company believes that good corporate governance practices are essential for creating long-term shareholder value and maintaining the confidence of shareholders and other stakeholders.',
    'news.subtitle': 'Latest Updates & Announcements',
    'news.header': 'News & Announcements',
    'news.select.year': 'Select Year:',
    'news.section.investors': 'I. Investors Information',
    'news.section.other': 'II. Other',
    'news.section.request': 'III. Request Form',
    'news.table.date': 'Date',
    'news.table.name': 'Name',
    'news.table.download': 'Download',
    'news.empty': 'No items available.',
    'news.requestForm': 'Request Form',
    'news.pdf': 'PDF',
    'financial.reports': 'Annual Reports',
    'financial.announcements': 'Announcements',
    'financial.governance': 'Corporate Governance',
    
    // News
    'news.title': 'News',
    'news.latest': 'Latest News',
    'news.archive': 'News Archive',
    
    // Directory
    'directory.title': 'Contact Us',
    'directory.hq': 'Headquarters',
    'directory.subsidiaries': 'Subsidiaries',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.contact': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.tagline': 'A leading manufacturer in consumer electrical appliances since 1950s.',
    'footer.address': '1/F, Shell Industrial Building, 12 Lee Chung Street, Chai Wan Industrial District, Hong Kong.',
    'corporate.overview.p2': 'SMC maintains healthy growth in its core traditional product manufacturing business. At the same time, the Electronic Manufacturing Services (EMS) and other technology business initiatives are increasing significance in the Group\'s strategic focus of development for the future. The Group also continues investing in high potential business ventures for long-term profitability and expansion.',
    'corporate.overview.p3': 'The Group\'s global business expansions are supported by the long-term partnership with reputable global companies.',
    'corporate.overview.p4': 'While gladly embraces the outstanding accomplishments to date, the management is not content to rest on the laurels. The Group is committed to continual pursuit for innovation, sharpens the competitive edge in order to achieve long-term profitability and business growth with its partners. Six decades of success and solid financial position provides SMC a strong foundation to accomplish new milestones ahead.',
    'corporate.areas.title': 'Three Major Business Areas',
    'corporate.areas.subtitle': 'SMC has consolidated its business operations into three synergetic areas',
    'corporate.areas.manufacturing': 'Manufacturing',
    'corporate.areas.manufacturing.desc': 'Core traditional product manufacturing including ceiling fans, microwave ovens, and consumer electronics.',
    'corporate.areas.technology': 'Technology',
    'corporate.areas.technology.desc': 'Electronic Manufacturing Services (EMS) and semiconductor business with advanced R&D capabilities.',
    'corporate.areas.investment': 'Investment',
    'corporate.areas.investment.desc': 'Strategic investments in property and transportation for long-term profitability and expansion.',

    // Technology Page - Semiconductor Section
    'technology.semi.title': 'Semiconductor Business',
    'technology.semi.subtitle': 'Power Discrete Semiconductors',
    'technology.semi.p1': 'PFC manufactures and sells power discrete semiconductors under its own \'PFC\' brand into the PRC, Taiwan and other Asian regions markets. PFC\'s power discrete semiconductors mainly comprise Schottky diodes, a type of rectifier, which are packaged in a variety of package types.',
    'technology.semi.p2': 'In 2015, the Group completed the development of its first MOSFET product model, a type of transistor. PFC\'s MOSFET is currently at the stage of product portfolio establishment, and the Group will continue its research and development effort to develop more product models with different specifications.',
    'technology.semi.applications.title': 'Applications',
    'technology.semi.applications.desc': 'The Group\'s power discrete semiconductors are used as rectifiers in the power supply units of a variety of electronic applications ranging from consumer electronic devices, such as mobile phones, notebook computers and LED televisions, to automotive and solar cells. They achieve reduction in energy loss over power supply, thereby enhancing the energy efficiency of the electronic applications.',
    'technology.semi.rnd.title': 'Research & Development',
    'technology.semi.rnd.desc': 'PFC maintains its own research and development team in Taiwan, with a primary focus on improvement of product performance, new product and technology development. PFC\'s power discrete semiconductors utilised its own patented device structure and manufacturing method, developed by PFC\'s in-house research and development team.',
    'technology.semi.link': 'To know more: www.pfc-device.com',

    // Investments Page
    'investments.intro': 'In addition to the core industrial and technology businesses, SMC maintains active interests in selective projects that provide long term and strategic value to the Group, including Property and Transportation Business.',
    'investments.property.title': 'Property',
    'investments.property.subtitle': 'Commercial and industrial properties in prime locations',
    'investments.property.desc': 'The Group\'s property investment portfolio consists of commercial and industrial properties located in prime cities in the PRC, Hong Kong, and Vietnam. The portfolio provides stable rental income and long-term capital growth prospects.',
    'investments.property.card1.title': 'Shell Industrial Building, Hong Kong',
    'investments.property.card1.desc': 'Home of the Group\'s headquarters, Shell Industrial Building was built in 1966 with approximately 12,000 square meters of gross floor area.',
    'investments.property.card2.title': 'Citic Plaza, Guangzhou, China',
    'investments.property.card2.desc': 'This 80-storey Grade A office building, with two 38-storey apartment blocks and a 40,000 square meters shopping arcades, is located conveniently next to the Guangzhou East Railway Station Through Train Terminal in Tianhe. Citic Plaza is one of the most prominent landmarks in Southern China.',
    'investments.transport.title': 'Transportation Business',
    'investments.transport.subtitle': 'Taxi Fleet Operations in Guangzhou',
    'investments.transport.company': 'Guangzhou SMC Car Rental Company Ltd.',
    'investments.transport.subsidiary': '100% Owned Subsidiary',
    'investments.transport.p1': 'Since 1992 when the Group first invested in a joint venture to own and operate 200 taxis in Guangzhou, China, SMC has maintained a growing interest in the transportation business that provides stable income contribution.',
    'investments.transport.p2': 'Currently, the Group owns 100% of Guangzhou SMC Car Rental Company Ltd. and operates a fleet of about 500 taxis, all equipped with environmental friendly engines. The Group\'s vision is to become one of the largest taxi rental companies in Guangzhou.',
    'investments.transport.stat1.title': '500+',
    'investments.transport.stat1.desc': 'Taxis in Fleet',
    'investments.transport.stat2.title': '1992',
    'investments.transport.stat2.desc': 'Since',
    'investments.transport.stat3.title': '100%',
    'investments.transport.stat3.desc': 'Eco-friendly Engines',
  },

  'zh-TW': {
    // Navigation
    'nav.home': '首頁',
    'nav.corporate': '公司資訊',
    'nav.financial': '財務資訊',
    'nav.news': '新聞',
    'nav.directory': '聯絡我們',
    'nav.about': '關於我們',
    'nav.overview': '概覽',
    'nav.vision': '願景與使命',
    'nav.manufacturing': '製造業務',
    'nav.technology': '科技業務',
    'nav.investments': '投資業務',
    
    // Hero
    'hero.title': '蜆壳電器控股有限公司',
    'hero.subtitle': '自1950年代以來領先的消費電器製造商',
    'hero.cta': '了解更多',
    
    // Home sections
    'home.welcome': '歡迎來到蜆壳電器',
    'home.intro': '憑藉深厚的工業基礎和管理專長，蜆壳電器今天已將業務整合為三大領域。',
    'home.manufacturing': '製造業務',
    'home.manufacturing.desc': '全球最大的吊扇公司，年產能超過六百萬台。',
    'home.technology': '科技業務',
    'home.technology.desc': '領先的半導體業務，擁有先進的功率分立半導體。',
    'home.investments': '投資業務',
    'home.investments.desc': '在房地產和運輸業務的戰略投資，實現長期增長。',
    'home.history': '六十年卓越歷史',
    'home.history.desc': '自1950年代，蜆壳電器開創了香港的吊扇製造業，是首家將吊扇出口到國際市場的製造商。',
    'home.history.desc2': '集團於1980年代中期建立微波爐業務，並迅速成為中國市場的暢銷產品。如此卓越的成功吸引了領先的家電公司惠而浦公司與SMC成立合資企業。',
    
    // Corporate
    'corporate.title': '公司資訊',
    'corporate.overview': '概覽',
    'corporate.overview.content': '蜆壳電器控股有限公司（「蜆壳電器」或「集團」）自1950年代以來一直是消費電器的領先製造商。憑藉深厚的工業基礎和管理專長，蜆壳電器今天已將業務整合為三大領域，即製造、科技和投資，為集團未來發展帶來更多協同優勢。',
    'corporate.vision': '願景與使命',
    'corporate.vision.title': '願景',
    'corporate.vision.content': '成為全球公認的技術創新領導者',
    'corporate.mission.title': '使命',
    'corporate.mission.content1': '建立我們作為EMS和ODM專家的戰略優勢，專注於創新和高科技家電、光學和影像產品應用領域',
    'corporate.mission.content2': '積極發展專有技術，加強我們的知識產權組合',
    
    // Manufacturing
    'manufacturing.title': '製造業務',
    'manufacturing.intro': '自1950年代，蜆壳電器開創了香港的吊扇製造業，是首家將吊扇出口到國際市場的製造商。',
    'manufacturing.capacity': '年產能超過六百萬台',
    'manufacturing.consumer': '消費電器',
    'manufacturing.consumer.desc': '1997年，集團把握機會收購了一家光通信產品公司，為集團創造了可觀的投資回報。',
    'manufacturing.ems': '電子製造服務',
    'manufacturing.ems.desc': '憑藉專業的技術能力和精密製造經驗，EMS部門完全有能力有效地競爭世界主要品牌的合同。',
    'manufacturing.heritage.title': '我們的傳承與全球成就',
    'manufacturing.heritage.p1': 'SMC 成立於20世紀50年代，始於一個宏大的願景：重新定義家庭舒適度。作為香港電風扇行業的先驅，我們自豪地成為該地區第一家以我們標誌性的「SMC」品牌向全球市場出口優質吊扇的製造商。',
    'manufacturing.heritage.p2': '七十多年來，我們已從一家富有遠見的區域性先驅，發展成為先進 OEM（原始設備製造）和 EMS（電子製造服務）的強大企業。如今，SMC 將深厚的歷史底蘊與前沿的創新技術相結合，已成為卓越製造領域備受推崇的全球標桿。',
    'manufacturing.electric.title': '1. 電動工具與風扇',
    'manufacturing.electric.desc': '為體現我們強勁的企業增長，該核心業務部門正式歸入 SMC Electric Limited（蜆壳電業有限公司），該公司於2020年成功在香港聯交所主板上市（股票代碼：2381.HK）。在上市公司治理和極高財務透明度的支持下，我們的製造生態系統提供多樣化的產品，分為兩大核心業務流：',
    'manufacturing.electric.bullet1.label': 'OEM/合同製造：',
    'manufacturing.electric.bullet1.text': '我們為國際頂級品牌共同設計和製造高性能的可充電電動工具——包括工業無繩風扇、重型工作燈和高效吸塵器。',
    'manufacturing.electric.bullet2.label': '「SMC」品牌組合：',
    'manufacturing.electric.bullet2.text': '我們以高耐用性的吊扇、壁扇、落地扇和樓頂扇系列，繼續引領國內外通風設備市場。',
    'manufacturing.electric.linkLabel': '了解更多：',
    'manufacturing.optics.title': '2. 光學與成像組件',
    'manufacturing.optics.desc': '憑藉數十年的專業技術和高精度製造經驗，SMC 是全球領先科技品牌的首選合作夥伴。我們設計並製造驅動全球行業的複雜光學和成像組件。我們的核心能力包括：',
    'manufacturing.optics.bullet1': '高性能定影器 (High-Performance Fusers)',
    'manufacturing.optics.bullet2': '精密激光掃描單元 (LSU)',
    'manufacturing.optics.bullet3': '高級紙張處理選件 (Advanced Paper Handling Options)',
    'manufacturing.optics.footer': '通過與 SMC 合作，全球品牌憑藉完美的執行力、嚴格的質量控制和可擴展的生產能力，從而獲得競爭優勢。',
    'manufacturing.optics.link': '了解更多：www.smc-multimedia.com',
    
    // Technology
    'technology.title': '科技業務',
    'technology.semiconductor': '半導體業務',
    'technology.semiconductor.desc': 'PFC以自有品牌「PFC」製造和銷售功率分立半導體。',
    'technology.patents': '46項專利',
    'technology.patents.desc': '在美國、台灣和中國註冊的器件結構和/或製造方法專利',
    
    // Investments
    'investments.title': '投資業務',
    'investments.property': '房地產',
    
    'investments.transport': '運輸業務',
    'investments.transport.desc': '自1992年以來，蜆壳電器在運輸業務方面保持著持續增長的興趣，為集團提供穩定的收入貢獻。',
    
    // Financial
    'financial.title': '財務資訊',
    'financial.subtitle': '投資者關係及財務報告',
    'financial.annualReports': '年度年報',
    'financial.annualReport.title': '{{year}}年度年報',
    'financial.comingSoon': '即將推出',
    'financial.pdf.format': 'PDF 格式',
    'financial.pdf.download': 'PDF',
    'financial.governance.title': '企業管治',
    'financial.governance.p1': '蜆殼電器控股有限公司自成立以來已有逾六十年的歷史，並一直致力維持高水平的企業管治。本公司相信，良好的企業管治常規對於創造長遠的股東價值，以及維持股東及其他持份者的信心至關重要。',
    'news.subtitle': '最新消息及公告',
    'news.header': '新聞與公告',
    'news.select.year': '選擇年份：',
    'news.section.investors': '一、投資者資訊',
    'news.section.other': '二、其他',
    'news.section.request': '三、申請表',
    'news.table.date': '日期',
    'news.table.name': '名稱',
    'news.table.download': '下載',
    'news.empty': '暫無項目。',
    'news.requestForm': '申請表',
    'news.pdf': 'PDF',
    'financial.reports': '年度報告',
    'financial.announcements': '公告',
    'financial.governance': '企業管治',
    
    // News
    'news.title': '新聞',
    'news.latest': '最新新聞',
    'news.archive': '新聞存檔',
    
    // Directory
    'directory.title': '聯絡我們',
    'directory.hq': '總部',
    'directory.subsidiaries': '附屬公司',
    
    // Footer
    'footer.rights': '版權所有',
    'footer.contact': '聯繫我們',
    'footer.privacy': '隱私政策',
    'footer.terms': '使用條款',
    'footer.tagline': '自1950年代以來的領先消費電器製造商。',
    'footer.address': '香港柴灣工業區利眾街12號蜆壳工業大廈1樓',
    'corporate.overview.p2': 'SMC在其核心傳統產品製造業務中保持健康增長。同時，電子製造服務（EMS）及其他科技業務舉措在集團未來的戰略發展重點中日益重要。集團亦繼續投資於具高潛力的商業項目，以實現長期盈利和業務擴張。',
    'corporate.overview.p3': '集團的全球業務擴張得益於與國際知名企業的長期合作夥伴關係。',
    'corporate.overview.p4': '儘管對迄今為止的卓越成就感到欣慰，管理層並未滿足於現狀。集團致力於不斷追求創新，提升競爭優勢，以期與合作夥伴共同實現長期盈利和業務增長。六十年的成功經驗和穩健的財務狀況，為SMC實現未來的嶄新里程碑奠定了堅實基礎。',
    'corporate.areas.title': '三大業務領域',
    'corporate.areas.subtitle': 'SMC已將其業務營運整合為三個具協同效應的領域',
    'corporate.areas.manufacturing': '製造業務',
    'corporate.areas.manufacturing.desc': '核心傳統產品製造，包括吊扇、微波爐及消費電子產品。',
    'corporate.areas.technology': '科技業務',
    'corporate.areas.technology.desc': '具備先進研發能力的電子製造服務（EMS）與半導體業務。',
    'corporate.areas.investment': '投資業務',
    'corporate.areas.investment.desc': '在房地產和運輸領域進行戰略性投資，以實現長期盈利及擴張。',

    // Technology Page - Semiconductor Section
    'technology.semi.title': '半導體業務',
    'technology.semi.subtitle': '功率分立半導體',
    'technology.semi.p1': 'PFC以自有品牌「PFC」製造並向中國大陸、台灣及其他亞洲地區市場銷售功率分立半導體。PFC的功率分立半導體主要包括肖特基二極管（一種整流器），並採用多種封裝類型。',
    'technology.semi.p2': '2015年，集團完成了首個MOSFET（一種晶體管）產品型號的開發。PFC的MOSFET目前正處於產品組合建立階段，集團將繼續投入研發，開發具備不同規格的更多產品型號。',
    'technology.semi.applications.title': '應用領域',
    'technology.semi.applications.desc': '集團的功率分立半導體被用作多種電子應用電源單元中的整流器，涵蓋從消費電子設備（如手機、筆記本電腦和LED電視）到汽車和太陽能電池等領域。它們能有效減少電源能量損耗，從而提高電子應用的能源效率。',
    'technology.semi.rnd.title': '研發',
    'technology.semi.rnd.desc': 'PFC在台灣擁有專屬的研發團隊，主要專注於提升產品性能、開發新產品及新技術。PFC的功率分立半導體採用了由其內部研發團隊開發的專利器件結構和製造方法。',
    'technology.semi.link': '了解更多：www.pfc-device.com',

    // Investments Page
    'investments.intro': '除了核心的工業和科技業務外，SMC還對能為集團提供長期戰略價值的精選項目保持積極興趣，包括房地產和運輸業務。',
    'investments.property.title': '房地產',
    'investments.property.subtitle': '位於黃金地段的商業和工業物業',
    'investments.property.desc': '集團的房地產投資組合包括位於中國大陸、香港和越南主要城市的商業和工業物業。該投資組合提供了穩定的租金收入和長期的資本增長前景。',
    'investments.property.card1.title': '香港蜆殼工業大廈',
    'investments.property.card1.desc': '蜆殼工業大廈建於1966年，是集團總部的所在地，總建築面積約為12,000平方米。',
    'investments.property.card2.title': '中國廣州中信廣場',
    'investments.property.card2.desc': '這座80層高的甲級辦公大樓，連同兩棟38層的公寓樓和一個40,000平方米的購物商場，交通便利，毗鄰天河區的廣州東站直通車總站。中信廣場是華南地區最著名的地標之一。',
    'investments.transport.title': '運輸業務',
    'investments.transport.subtitle': '廣州出租車車隊營運',
    'investments.transport.company': '廣州蜆殼汽車租賃有限公司',
    'investments.transport.subsidiary': '全資附屬公司',
    'investments.transport.p1': '自1992年集團首次投資合資企業在中國廣州擁有並營運200輛出租車以來，SMC在運輸業務方面保持著持續增長的興趣，為集團提供穩定的收入貢獻。',
    'investments.transport.p2': '目前，集團擁有廣州蜆殼汽車租賃有限公司100%的股權，並營運一支約500輛出租車的車隊，所有車輛均配備環保引擎。集團的願景是成為廣州最大的出租車租賃公司之一。',
    'investments.transport.stat1.title': '500+',
    'investments.transport.stat1.desc': '車隊規模',
    'investments.transport.stat2.title': '1992',
    'investments.transport.stat2.desc': '起始年份',
    'investments.transport.stat3.title': '100%',
    'investments.transport.stat3.desc': '環保引擎',
  },

  'zh-CN': {
    // Navigation
    'nav.home': '首页',
    'nav.corporate': '公司资讯',
    'nav.financial': '财务资讯',
    'nav.news': '新闻',
    'nav.directory': '联系我们',
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
    'home.history.desc2': '集团于1980年代中期建立微波炉业务，并迅速成为中国市场的畅销产品。如此卓越的成功吸引了领先的家电公司惠而浦公司与SMC成立合资企业。',
    
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
    'manufacturing.heritage.title': '我们的传承与全球成就',
    'manufacturing.heritage.p1': 'SMC 成立于20世纪50年代，始于一个宏大的愿景：重新定义家庭舒适度。作为香港电风扇行业的先驱，我们自豪地成为该地区第一家以我们标志性的"SMC"品牌向全球市场出口优质吊扇的制造商。',
    'manufacturing.heritage.p2': '七十多年来，我们已从一家富有远见的区域性先驱，发展成为先进 OEM（原始设备制造）和 EMS（电子制造服务）的强大企业。如今，SMC 将深厚的历史底蕴与前沿的创新技术相结合，已成为卓越制造领域备受推崇的全球标杆。',
    'manufacturing.electric.title': '1. 电动工具与风扇',
    'manufacturing.electric.desc': '为体现我们强劲的企业增长，该核心业务部门正式归入 SMC Electric Limited（蚬壳电业有限公司），该公司于2020年成功在香港联交所主板上市（股票代码：2381.HK）。在上市公司治理和极高财务透明度的支持下，我们的制造生态系统提供多样化的产品，分为两大核心业务流：',
    'manufacturing.electric.bullet1.label': 'OEM/合同制造：',
    'manufacturing.electric.bullet1.text': '我们为国际顶级品牌共同设计和制造高性能的可充电电动工具——包括工业无绳风扇、重型工作灯和高效吸尘器。',
    'manufacturing.electric.bullet2.label': '"SMC"品牌组合：',
    'manufacturing.electric.bullet2.text': '我们以高耐用性的吊扇、壁扇、落地扇和楼顶扇系列，继续引领国内外通风设备市场。',
    'manufacturing.electric.linkLabel': '了解更多：',
    'manufacturing.optics.title': '2. 光学与成像组件',
    'manufacturing.optics.desc': '凭借数十年的专业技术和高精度制造经验，SMC 是全球领先科技品牌的首选合作伙伴。我们设计并制造驱动全球行业的复杂光学和成像组件。我们的核心能力包括：',
    'manufacturing.optics.bullet1': '高性能定影器 (High-Performance Fusers)',
    'manufacturing.optics.bullet2': '精密激光扫描单元 (LSU)',
    'manufacturing.optics.bullet3': '高级纸张处理选件 (Advanced Paper Handling Options)',
    'manufacturing.optics.footer': '通过与 SMC 合作，全球品牌凭借完美的执行力、严格的质量控制和可扩展的生产能力，从而获得竞争优势。',
    'manufacturing.optics.link': '了解更多：www.smc-multimedia.com',
    
    // Technology
    'technology.title': '科技业务',
    'technology.semiconductor': '半导体业务',
    'technology.semiconductor.desc': 'PFC以自有品牌「PFC」制造和销售功率分立半导体。',
    'technology.patents': '46项专利',
    'technology.patents.desc': '在美国、台湾和中国注册的器件结构和/或制造方法专利',
    
    // Investments
    'investments.title': '投资业务',
    'investments.property': '房地产',
    
    'investments.transport': '运输业务',
    'investments.transport.desc': '自1992年以来，蚬壳电器在运输业务方面保持着持续增长的兴趣，为集团提供稳定的收入贡献。',
    
    // Financial
    'financial.title': '财务资讯',
    'financial.subtitle': '投资者关系及财务报告',
    'financial.annualReports': '年度年报',
    'financial.annualReport.title': '{{year}}年度年报',
    'financial.comingSoon': '即将推出',
    'financial.pdf.format': 'PDF 格式',
    'financial.pdf.download': 'PDF',
    'financial.governance.title': '企业管治',
    'financial.governance.p1': '蚬壳电器控股有限公司自成立以来已有逾六十年的历史，并一直致力维持高水平的企业管治。本公司相信，良好的企业管治常规对于创造长远的股东价值，以及维持股东及其他持份者的信心至关重要。',
    'news.subtitle': '最新消息及公告',
    'news.header': '新闻与公告',
    'news.select.year': '选择年份：',
    'news.section.investors': '一、投资者信息',
    'news.section.other': '二、其他',
    'news.section.request': '三、申请表',
    'news.table.date': '日期',
    'news.table.name': '名称',
    'news.table.download': '下载',
    'news.empty': '暂无项目。',
    'news.requestForm': '申请表',
    'news.pdf': 'PDF',
    'financial.reports': '年度报告',
    'financial.announcements': '公告',
    'financial.governance': '企业管治',
    
    // News
    'news.title': '新闻',
    'news.latest': '最新新闻',
    'news.archive': '新闻存档',
    
    // Directory
    'directory.title': '联系我们',
    'directory.hq': '总部',
    'directory.subsidiaries': '附属公司',
    
    // Footer
    'footer.rights': '版权所有',
    'footer.contact': '联系我们',
    'footer.privacy': '隐私政策',
    'footer.terms': '使用条款',
    'footer.tagline': '自1950年代以来的领先消费电器制造商。',
    'footer.address': '香港柴湾工业区利众街12号蚬壳工业大厦1楼',
    'corporate.overview.p2': 'SMC在其核心传统产品制造业务中保持健康增长。同时，电子制造服务（EMS）及其他科技业务举措在集团未来的战略发展重点中日益重要。集团亦继续投资于具高潜力的商业项目，以实现长期盈利和业务扩张。',
    'corporate.overview.p3': '集团的全球业务扩张得益于与国际知名企业的长期合作伙伴关系。',
    'corporate.overview.p4': '尽管对迄今为止的卓越成就感到欣慰，管理层并未满足于现状。集团致力于不断追求创新，提升竞争优势，以期与合作伙伴共同实现长期盈利和业务增长。六十年的成功经验和稳健的财务状况，为SMC实现未来的崭新里程碑奠定了坚实基础。',
    'corporate.areas.title': '三大业务领域',
    'corporate.areas.subtitle': 'SMC已将其业务营运整合为三个具协同效应的领域',
    'corporate.areas.manufacturing': '制造业务',
    'corporate.areas.manufacturing.desc': '核心传统产品制造，包括吊扇、微波炉及消费电子产品。',
    'corporate.areas.technology': '科技业务',
    'corporate.areas.technology.desc': '具备先进研发能力的电子制造服务（EMS）与半导体业务。',
    'corporate.areas.investment': '投资业务',
    'corporate.areas.investment.desc': '在房地产和运输领域进行战略性投资，以实现长期盈利及扩张。',

    // Technology Page - Semiconductor Section
    'technology.semi.title': '半导体业务',
    'technology.semi.subtitle': '功率分立半导体',
    'technology.semi.p1': 'PFC以自有品牌"PFC"制造并向中国大陆、台湾及其他亚洲地区市场销售功率分立半导体。PFC的功率分立半导体主要包括肖特基二极管（一种整流器），并采用多种封装类型。',
    'technology.semi.p2': '2015年，集团完成了首个MOSFET（一种晶体管）产品型号的开发。PFC的MOSFET目前正处于产品组合建立阶段，集团将继续投入研发，开发具备不同规格的更多产品型号。',
    'technology.semi.applications.title': '应用领域',
    'technology.semi.applications.desc': '集团的功率分立半导体被用作多种电子应用电源单元中的整流器，涵盖从消费电子设备（如手机、笔记本电脑和LED电视）到汽车和太阳能电池等领域。它们能有效减少电源能量损耗，从而提高电子应用的能源效率。',
    'technology.semi.rnd.title': '研发',
    'technology.semi.rnd.desc': 'PFC在台湾拥有专属的研发团队，主要专注于提升产品性能、开发新产品及新技术。PFC的功率分立半导体采用了由其内部研发团队开发的专利器件结构和制造方法。',
    'technology.semi.link': '了解更多：www.pfc-device.com',

    // Investments Page
    'investments.intro': '除了核心的工业和科技业务外，SMC还对能为集团提供长期战略价值的精选项目保持积极兴趣，包括房地产和运输业务。',
    'investments.property.title': '房地产',
    'investments.property.subtitle': '位于黄金地段的商业和工业物业',
    'investments.property.desc': '集团的房地产投资组合包括位于中国大陆、香港和越南主要城市的商业和工业物业。该投资组合提供了稳定的租金收入和长期的资本增长前景。',
    'investments.property.card1.title': '香港蚬壳工业大厦',
    'investments.property.card1.desc': '蚬壳工业大厦建于1966年，是集团总部的所在地，总建筑面积约为12,000平方米。',
    'investments.property.card2.title': '中国广州中信广场',
    'investments.property.card2.desc': '这座80层高的甲级办公大楼，连同两栋38层的公寓楼和一个40,000平方米的购物商场，交通便利，毗邻天河区的广州东站直通车总站。中信广场是华南地区最著名的地标之一。',
    'investments.transport.title': '运输业务',
    'investments.transport.subtitle': '广州出租车车队营运',
    'investments.transport.company': '广州蚬壳汽车租赁有限公司',
    'investments.transport.subsidiary': '全资附属公司',
    'investments.transport.p1': '自1992年集团首次投资合资企业在中国广州拥有并营运200辆出租车以来，SMC在运输业务方面保持着持续增长的兴趣，为集团提供稳定的收入贡献。',
    'investments.transport.p2': '目前，集团拥有广州蚬壳汽车租赁有限公司100%的股权，并营运一支约500辆出租车的车队，所有车辆均配备环保引擎。集团的愿景是成为广州最大的出租车租赁公司之一。',
    'investments.transport.stat1.title': '500+',
    'investments.transport.stat1.desc': '车队规模',
    'investments.transport.stat2.title': '1992',
    'investments.transport.stat2.desc': '起始年份',
    'investments.transport.stat3.title': '100%',
    'investments.transport.stat3.desc': '环保引擎',
  },

};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, params?: Record<string, string | number>): string => {
    let value = translations[language][key] || key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        value = value.replace(new RegExp(`{{\\s*${k}\\s*}}`, 'g'), String(v));
      });
    }
    return value;
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

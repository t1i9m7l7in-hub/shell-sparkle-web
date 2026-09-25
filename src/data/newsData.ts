export interface NewsItem {
  date: string;
  name: string;
  pdfUrl: string;
  /** Explicit Chinese titles/URL (override automatic translation). */
  nameTc?: string;
  nameSc?: string;
  pdfUrlZh?: string;
}

export interface NewsSection {
  id: string;
  title: string;
  items: NewsItem[];
}

export interface YearData {
  year: string;
  sections: NewsSection[];
}

const BASE = 'http://www.smc.com.hk/esubmission/downloads';

export const newsArchive: YearData[] = [
  {
    year: '2026',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '20-08-2026', name: 'RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 20 AUGUST 2026', nameTc: '於二零二六年八月二十日舉行之股東週年大會投票表決結果', nameSc: '于二零二六年八月二十日举行之股东周年大会投票表决结果', pdfUrl: 'http://smc.com.hk/esubmission/downloads/Shell_E_Ann20260820-160330.pdf', pdfUrlZh: 'http://smc.com.hk/esubmission/downloads/Shell_C_Ann20260820-160330.pdf' },
          { date: '22-07-2026', name: 'CHANGE OF ADDRESS OF REGISTERED OFFICE AND PRINCIPAL SHARE REGISTRAR IN BERMUDA', nameTc: '百慕達註冊辦事處及股份過戶登記總處地址變更', nameSc: '百慕大注册办事处及股份过户登记总处地址变更', pdfUrl: 'http://smc.com.hk/esubmission/downloads/Shell_E_Ann20260820-160330.pdf', pdfUrlZh: 'http://smc.com.hk/esubmission/downloads/Shell_C_Ann20260820-160330.pdf' },
          { date: '17-07-2026', name: 'ANNUAL REPORT 2025', nameTc: '2025年度年報', nameSc: '2025年度年报', pdfUrl: 'http://smc.com.hk/financial_inf/download/2025/Shell_E_AR2025.pdf', pdfUrlZh: 'http://smc.com.hk/chi/financial_inf/download/2025/Shell_E_AR2025.pdf' },
          { date: '17-07-2026', name: 'NOTIFICATION LETTER', nameTc: '通知信函', nameSc: '通知信函', pdfUrl: 'http://smc.com.hk/esubmission/downloads/Shell_E_Ann20260820-160330.pdf', pdfUrlZh: 'http://smc.com.hk/esubmission/downloads/Shell_C_Ann20260820-160330.pdf' },
          { date: '17-07-2026', name: 'CLOSURE OF REGISTER OF MEMBERS FOR THE ANNUAL GENERAL MEETING', nameTc: '股東週年大會 暫停辦理股份過戶登記手續', nameSc: '股东周年大会 暂停办理股份过户登记手续', pdfUrl: 'http://smc.com.hk/esubmission/downloads/Shell_E_Ann20260820-160330.pdf', pdfUrlZh: 'http://smc.com.hk/esubmission/downloads/Shell_C_Ann20260820-160330.pdf' },
          { date: '17-07-2026', name: 'FORM OF PROXY FOR USE AT THE ANNUAL GENERAL MEETING (OR AT ANY ADJOURNMENT THEREOF) TO BE HELD AT 10:00 A.M. ON THURSDAY, 20 AUGUST 2026', nameTc: '適用於二零二六年八月二十日(星期四)上午十時正召開之 股東週年大會（或其任何續會）之代表委任表格', nameSc: '适用于二零二六年八月二十日(星期四)上午十时正召开之 股东周年大会（或其任何续会）之代表委任表格', pdfUrl: 'http://smc.com.hk/esubmission/downloads/Shell_E_Ann20260820-160330.pdf', pdfUrlZh: 'http://smc.com.hk/esubmission/downloads/Shell_C_Ann20260820-160330.pdf' },
          { date: '17-07-2026', name: 'NOTICE OF ANNUAL GENERAL MEETING', nameTc: '股東週年大會通告', nameSc: '股东周年大会通告', pdfUrl: 'http://smc.com.hk/esubmission/downloads/Shell_E_Ann20260820-160330.pdf', pdfUrlZh: 'http://smc.com.hk/esubmission/downloads/Shell_C_Ann20260820-160330.pdf' },
        ],
      },
      { id: 'other', title: 'II.  Other', items: [] },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: 'http://smc.com.hk/esubmission/downloads/request_form.pdf', pdfUrlZh: 'http://smc.com.hk/esubmission/downloads/request_form.pdf' },
        ],
      },
    ],
  },
  {
    year: '2025',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '21-08-2025', name: 'CHANGE OF HONG KONG TRANSFER AGENT', pdfUrl: `${BASE}/Shell_E_Ann20250821-170823.pdf` },
          { date: '21-08-2025', name: 'RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 21 AUGUST 2025', pdfUrl: `${BASE}/Shell_E_Ann20250821-170706.pdf` },
          { date: '18-07-2025', name: 'NOTIFICATION LETTER', pdfUrl: `${BASE}/Shell_E_Ann20250718-155220.pdf` },
          { date: '18-07-2025', name: 'FORM OF PROXY FOR USE AT THE ANNUAL GENERAL MEETING (OR AT ANY ADJOURNMENT THEREOF) TO BE HELD AT 10:00 A.M. ON THURSDAY, 21 AUGUST 2025', pdfUrl: `${BASE}/Shell_E_Ann20250718-103133.pdf` },
          { date: '18-07-2025', name: 'NOTICE OF ANNUAL GENERAL MEETING', pdfUrl: `${BASE}/Shell_E_Ann20250718-102946.pdf` },
          { date: '18-07-2025', name: 'CLOSURE OF REGISTER OF MEMBERS FOR THE ANNUAL GENERAL MEETING', pdfUrl: `${BASE}/Shell_E_Ann20250718-102844.pdf` },
          { date: '18-07-2025', name: 'ANNUAL REPORT 2024', pdfUrl: `${BASE}/Shell_E_Ann20250718-102653.pdf` },
        ],
      },
      { id: 'other', title: 'II.  Other', items: [] },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2024',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '22-08-2024', name: 'RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 22 AUGUST 2024', pdfUrl: `${BASE}/Shell_E_Ann20240823-101516.pdf` },
          { date: '19-07-2024', name: 'FORM OF PROXY FOR USE AT THE ANNUAL GENERAL MEETING (OR AT ANY ADJOURNMENT THEREOF) TO BE HELD AT 10:00 A.M. ON THURSDAY, 22 AUGUST 2024', pdfUrl: `${BASE}/Shell_E_Ann20240719-095616.pdf` },
          { date: '19-07-2024', name: 'NOTIFICATION LETTER', pdfUrl: `${BASE}/Shell_E_Ann20240719-092209.pdf` },
          { date: '19-07-2024', name: 'NOTICE OF ANNUAL GENERAL MEETING', pdfUrl: `${BASE}/Shell_E_Ann20240719-090503.pdf` },
          { date: '19-07-2024', name: 'CLOSURE OF REGISTER OF MEMBERS FOR THE ANNUAL GENERAL MEETING', pdfUrl: `${BASE}/Shell_E_Ann20240719-090413.pdf` },
          { date: '19-07-2024', name: 'ANNUAL REPORT 2023', pdfUrl: `${BASE}/Shell_E_Ann20240719-090203.pdf` },
          { date: '03-07-2024', name: 'LETTER TO REGISTERED SHAREHOLDERS AND REPLY FORM - ELECTRONIC DISSEMINATION OF CORPORATE COMMUNICATIONS', pdfUrl: `${BASE}/Shell_E_Ann20240705-113527.pdf` },
          { date: '03-07-2024', name: 'LETTER TO NON-REGISTERED SHAREHOLDERS - ELECTRONIC DISSEMINATION OF CORPORATE COMMUNICATIONS', pdfUrl: `${BASE}/Shell_E_Ann20240705-113251.pdf` },
        ],
      },
      { id: 'other', title: 'II.  Other', items: [] },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2023',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '22-08-2023', name: 'RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 22 AUGUST 2023', pdfUrl: `${BASE}/Shell_E_Ann20230822-170948.pdf` },
          { date: '18-07-2023', name: 'NOTICE OF ANNUAL GENERAL MEETING', pdfUrl: `${BASE}/Shell_E_Ann20230718-164118.pdf` },
          { date: '18-07-2023', name: 'Form of proxy for use at the Annual General Meeting (or at any adjournment thereof) to be held at 10:00 a.m. on Tuesday, 22 August 2023', pdfUrl: `${BASE}/Shell_E_Ann20230718-164035.pdf` },
          { date: '18-07-2023', name: 'FINAL DIVIDEND FOR THE YEAR ENDED 31 DECEMBER 2022 CLOSURE OF REGISTER OF MEMBERS', pdfUrl: `${BASE}/Shell_E_Ann20230718-163915.pdf` },
          { date: '18-07-2023', name: 'Annual Report 2022', pdfUrl: `${BASE}/Shell_E_AR2023-100127.pdf` },
        ],
      },
      { id: 'other', title: 'II.  Other', items: [] },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2022',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '22-08-2022', name: 'RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 22 AUGUST 2022', pdfUrl: `${BASE}/Shell_E_Ann20220823-144639.pdf` },
          { date: '28-07-2022', name: 'CHANGE OF ADDRESS OF HONG KONG TRANSFER AGENT', pdfUrl: `${BASE}/Shell_E_Ann20220728-155204.pdf` },
          { date: '18-07-2022', name: 'FINAL DIVIDEND FOR THE YEAR ENDED 31 DECEMBER 2021 CLOSURE OF REGISTER OF MEMBERS', pdfUrl: `${BASE}/Shell_E_Ann20220718-114319.pdf` },
          { date: '18-07-2022', name: 'Form of proxy for use at the Annual General Meeting (or at any adjournment thereof) to be held at 10:00 a.m. on Monday, 22 August 2022', pdfUrl: `${BASE}/Shell_E_Ann20220718-114130.pdf` },
          { date: '18-07-2022', name: 'NOTICE OF ANNUAL GENERAL MEETING', pdfUrl: `${BASE}/Shell_E_Ann20220718-114054.pdf` },
          { date: '18-07-2022', name: 'Annual Report 2021', pdfUrl: `${BASE}/Shell_E_Ann20220718-104430.pdf` },
        ],
      },
      { id: 'other', title: 'II.  Other', items: [] },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2021',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '06-08-2021', name: 'RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 6 AUGUST 2021', pdfUrl: `${BASE}/Shell_E_Ann20210806-170336.pdf` },
          { date: '02-07-2021', name: 'FINAL DIVIDEND FOR THE YEAR ENDED 31 DECEMBER 2020 CLOSURE OF REGISTER OF MEMBERS', pdfUrl: `${BASE}/Shell_E_Ann20210702-092802.pdf` },
          { date: '02-07-2021', name: 'Form of proxy for use at the Annual General Meeting (or at any adjournment thereof) to be held at 10:00 a.m. on Friday, 6 August 2021', pdfUrl: `${BASE}/Shell_E_Ann20210702-092414.pdf` },
          { date: '02-07-2021', name: 'NOTICE OF ANNUAL GENERAL MEETING', pdfUrl: `${BASE}/Shell_E_Ann20210702-092311.pdf` },
          { date: '02-07-2021', name: 'Annual Report 2020', pdfUrl: `${BASE}/Shell_E_Ann20210702-090823.pdf` },
        ],
      },
      { id: 'other', title: 'II.  Other', items: [] },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2020',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '06-08-2020', name: 'RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 6 AUGUST 2020', pdfUrl: `${BASE}/Shell_E_Ann20200806-180206.pdf` },
          { date: '03-07-2020', name: 'FINAL DIVIDEND FOR THE YEAR ENDED 31 DECEMBER 2019 CLOSURE OF REGISTER OF MEMBERS', pdfUrl: `${BASE}/Shell_E_Ann20200702-151514.pdf` },
          { date: '03-07-2020', name: 'Form of proxy for use at the Annual General Meeting (or at any adjournment thereof) to be held at 10:00 a.m. on Thursday, 6 August 2020', pdfUrl: `${BASE}/Shell_E_Ann20200702-151421.pdf` },
          { date: '03-07-2020', name: 'NOTICE OF ANNUAL GENERAL MEETING', pdfUrl: `${BASE}/Shell_E_Ann20200702-151318.pdf` },
          { date: '02-07-2020', name: 'Annual Report 2019', pdfUrl: `${BASE}/Shell_E_Ann20200702-085644.pdf` },
        ],
      },
      { id: 'other', title: 'II.  Other', items: [] },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2019',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '22-08-2019', name: 'RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 22 AUGUST 2019', pdfUrl: `${BASE}/Shell_E_Ann20190822-154556.pdf` },
          { date: '24-07-2019', name: 'FINAL DIVIDEND FOR THE YEAR ENDED 31 DECEMBER 2018 CLOSURE OF REGISTER OF MEMBERS', pdfUrl: `${BASE}/Shell_E_Ann20190724-164739.pdf` },
          { date: '23-07-2019', name: 'Annual Report 2018', pdfUrl: `${BASE}/Shell_E_Ann20191118-104040.pdf` },
          { date: '23-07-2019', name: 'Form of proxy for use at the Annual General Meeting (or at any adjournment thereof) to be held on Thursday, 22 August 2019 at 10:00 a.m.', pdfUrl: `${BASE}/Shell_E_Ann20190723-161123.pdf` },
          { date: '23-07-2019', name: 'Notice of Annual General Meeting', pdfUrl: `${BASE}/Shell_E_Ann20190723-161051.pdf` },
          { date: '28-06-2019', name: 'Change of Address of Transfer Agent Office', pdfUrl: `${BASE}/Shell_E_Ann20190628-124642.pdf` },
        ],
      },
      { id: 'other', title: 'II.  Other', items: [] },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2018',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '03-08-2018', name: 'Results Of The Annual General Meeting Held On 3 August 2018', pdfUrl: `${BASE}/Shell_E_Ann20180803-170643.pdf` },
          { date: '05-07-2018', name: 'Form of Proxy for use at the Annual General Meeting (or at any adjournment thereof) to be held at 10:00 a.m. on Friday, 3 August 2018', pdfUrl: `${BASE}/Shell_E_Ann20180705-104202.pdf` },
          { date: '05-07-2018', name: 'Notice of Annual General Meeting', pdfUrl: `${BASE}/Shell_E_Ann20180705-104053.pdf` },
          { date: '05-07-2018', name: 'Final Dividend Closure of Register of Members', pdfUrl: `${BASE}/Shell_E_Ann20180705-103649.pdf` },
          { date: '05-07-2018', name: 'Annual Report 2017', pdfUrl: `${BASE}/Shell_E_AR2018-093846.pdf` },
        ],
      },
      {
        id: 'other',
        title: 'II.  Other',
        items: [
          { date: '02-05-2018', name: '3D Computer Animation Team from students of Yung Yau College won Gold and silver medals in the InfoMatrix 2018', pdfUrl: `${BASE}/Shell_E_Oth20180531-150835.pdf` },
        ],
      },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2017',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '08-08-2017', name: 'Results Of The Annual General Meeting Held On 8th August, 2017', pdfUrl: `${BASE}/Shell_E_Ann20170809-110129.pdf` },
          { date: '07-07-2017', name: 'Notice of Annual General Meeting', pdfUrl: `${BASE}/Shell_E_Not20170707-115557.pdf` },
          { date: '07-07-2017', name: 'Form of Proxy for use at the Annual General Meeting (or at any adjournment thereof) to be held at 10:00 a.m. on Tuesday, 8th August, 2017', pdfUrl: `${BASE}/Shell_E_Ann20170707-115043.pdf` },
          { date: '07-07-2017', name: 'Final Dividend Closure of Register of Members', pdfUrl: `${BASE}/Shell_E_Ann20170707-114751.pdf` },
          { date: '07-07-2017', name: 'Annual Report 2016', pdfUrl: `${BASE}/Shell_E_AR2017-092449.pdf` },
        ],
      },
      {
        id: 'other',
        title: 'II.  Other',
        items: [
          { date: '16-10-2017', name: 'YY students 3D Animation Got the Youth Animation Award', pdfUrl: `${BASE}/Shell_E_Oth20180531-151539.pdf` },
        ],
      },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2016',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '30-09-2016', name: "SMC's subsidiary, PFC Device Inc. is listed on Hong Kong GEM Board", pdfUrl: `${BASE}/Shell_E_Ann20161020-173048.pdf` },
          { date: '08-08-2016', name: 'Results Of The Annual General Meeting Held On 8th August, 2016', pdfUrl: `${BASE}/Shell_E_Ann20160808-184959.pdf` },
          { date: '07-07-2016', name: 'Notice of Annual General Meeting', pdfUrl: `${BASE}/Shell_E_Ann20160707-101619.pdf` },
          { date: '07-07-2016', name: 'Form of Proxy for use at the Annual General Meeting (or at any adjournment thereof) to be held at 9:30 a.m. on Monday, 8th August, 2016', pdfUrl: `${BASE}/Shell_E_Ann20160707-101524.pdf` },
          { date: '07-07-2016', name: 'Annual Report 2015', pdfUrl: `${BASE}/Shell_E_AR2016-180436.pdf` },
          { date: '06-07-2016', name: 'Final Dividend Closure of Register of Members', pdfUrl: `${BASE}/Shell_E_Ann20160706-151144.pdf` },
        ],
      },
      {
        id: 'other',
        title: 'II.  Other',
        items: [
          { date: '28-10-2016', name: 'Students got the award from Sydney and Kevin Yeung Visiting', pdfUrl: `${BASE}/Shell_E_IR2016-161834.pdf` },
          { date: '15-09-2016', name: 'YY students develop experiments for Tiangong 2', pdfUrl: `${BASE}/Shell_E_Oth20160930-102511.pdf` },
          { date: '27-06-2016', name: '3D Computer Animation Team from students of Yung Yau College won the Gold, silver and bronze medals in the InfoMatrix 2016', pdfUrl: `${BASE}/Shell_E_Oth20160629-173821.pdf` },
          { date: '27-06-2016', name: '3D Computer Animation Team from students of Yung Yau College won the Gold, silver and bronze medals in the InfoMatrix 2016', pdfUrl: `${BASE}/Shell_E_Oth20160629-173123.pdf` },
          { date: '09-05-2016', name: 'Yung Yau students won 2 International Awards in Croatia', pdfUrl: `${BASE}/Shell_E_Oth20160629-174116.pdf` },
          { date: '22-04-2016', name: 'A student of Yung Yau College was named Student of the Year - Visual Artist', pdfUrl: `${BASE}/Shell_E_Oth20160629-174617.pdf` },
          { date: '08-03-2016', name: 'First Prize in Ambulance Command Video Competition', pdfUrl: `${BASE}/Shell_E_Oth20160629-175136.pdf` },
        ],
      },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2015',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '15-07-2015', name: 'Results Of The Annual General Meeting Held On 14th July, 2015', pdfUrl: `${BASE}/Shell_E_Ann20150715-123206.pdf` },
          { date: '10-06-2015', name: 'Annual Report 2014', pdfUrl: `${BASE}/Shell_E_AR2015-100132.pdf` },
          { date: '10-06-2015', name: 'Notice of Annual General Meeting', pdfUrl: `${BASE}/Shell_E_Cir20150610-094546.pdf` },
          { date: '10-06-2015', name: 'Form of Proxy for use at the Annual General Meeting (or at any adjournment thereof) to be held at 9:30 a.m. on Tuesday, 14th July, 2015', pdfUrl: `${BASE}/Shell_E_Oth20150610-094401.pdf` },
          { date: '09-06-2015', name: 'Final Dividend Closure of Register of Members', pdfUrl: `${BASE}/Shell_E_Ann20150609-091804.pdf` },
        ],
      },
      { id: 'other', title: 'II.  Other', items: [] },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2014',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '18-07-2014', name: 'Results Of The Annual General Meeting Held On 18th July, 2014', pdfUrl: `${BASE}/Shell_E_Ann20140718-182643.pdf` },
          { date: '18-06-2014', name: 'Form of Proxy for use at the Annual General Meeting (or at any adjournment thereof) to be held at 9:30 a.m. on Friday, 18th July, 2014', pdfUrl: `${BASE}/Shell_E_Ann20140618-100651.pdf` },
          { date: '18-06-2014', name: 'Notice of Annual General Meeting', pdfUrl: `${BASE}/Shell_E_Ann20140618-100421.pdf` },
          { date: '18-06-2014', name: 'Annual Report 2013', pdfUrl: `${BASE}/Shell_E_AR2014-100243.pdf` },
          { date: '17-06-2014', name: 'Final Dividend Closure of Register of Members', pdfUrl: `${BASE}/Shell_E_Ann20140617-104153.pdf` },
          { date: '11-03-2014', name: 'Change of Address of Hong Kong Transfer Agent', pdfUrl: `${BASE}/Shell_E_Ann20140311-170810.pdf` },
        ],
      },
      { id: 'other', title: 'II.  Other', items: [] },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
  {
    year: '2013',
    sections: [
      {
        id: 'investors',
        title: 'I.  Investors Information',
        items: [
          { date: '13-08-2013', name: 'Results Of The Annual General Meeting Held On 12th August, 2013', pdfUrl: `${BASE}/Shell_E_Ann20130813-103058.pdf` },
          { date: '28-06-2013', name: 'Annual Report 2012', pdfUrl: `${BASE}/Shell_E_AR2013-103426.pdf` },
        ],
      },
      { id: 'other', title: 'II.  Other', items: [] },
      {
        id: 'request',
        title: 'III.  Request Form',
        items: [
          { date: '17-07-2024', name: 'Request Form', pdfUrl: `${BASE}/request_form.pdf` },
        ],
      },
    ],
  },
];

export const availableYears = newsArchive.map((d) => d.year);

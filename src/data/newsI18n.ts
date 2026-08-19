import type { Language } from '@/contexts/LanguageContext';

/** Format a DD-MM-YYYY date for the active language. */
export const formatNewsDate = (date: string, language: Language): string => {
  const [day, month, year] = date.split('-');
  if (language === 'en' || !day || !month || !year) return date;
  return `${Number(year)}年${Number(month)}月${Number(day)}日`;
};

const MONTHS: Record<string, number> = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
};

const WEEKDAYS_TC: Record<string, string> = {
  monday: '星期一', tuesday: '星期二', wednesday: '星期三', thursday: '星期四',
  friday: '星期五', saturday: '星期六', sunday: '星期日',
};

interface ParsedDate {
  y: number;
  m: number;
  d: number;
  weekday?: string;
}

/** Parse patterns like "21 August 2025", "8th August, 2016". */
const parseEnglishDate = (text: string): ParsedDate | null => {
  const re = /(?:(monday|tuesday|wednesday|thursday|friday|saturday|sunday),?\s*)?(\d{1,2})(?:st|nd|rd|th)?\s+([a-z]+),?\s+(\d{4})/i;
  const m = re.exec(text);
  if (!m) return null;
  const month = MONTHS[m[3].toLowerCase()];
  if (!month) return null;
  return {
    y: Number(m[4]),
    m: month,
    d: Number(m[2]),
    weekday: m[1] ? m[1].toLowerCase() : undefined,
  };
};

const cnDate = (p: ParsedDate) => `${p.y}年${p.m}月${p.d}日`;

/** Parse a clock time like "10:00 a.m." / "9:30 a.m." */
const parseTime = (text: string) => {
  const m = /(\d{1,2}):(\d{2})\s*([ap])\.?\s?m\.?/i.exec(text);
  if (!m) return null;
  const hour = Number(m[1]);
  const minute = Number(m[2]);
  const meridiem = m[3].toLowerCase() === 'a' ? { tc: '上午', cn: '上午' } : { tc: '下午', cn: '下午' };
  return { hour, minute, meridiem };
};

const timeText = (text: string) => {
  const t = parseTime(text);
  if (!t) return '';
  return `${t.meridiem.tc}${t.hour}時${t.minute === 0 ? '正' : `${t.minute}分`}`;
};

const timeTextCn = (text: string) => {
  const t = parseTime(text);
  if (!t) return '';
  return `${t.meridiem.cn}${t.hour}时${t.minute === 0 ? '正' : `${t.minute}分`}`;
};

const tc2sc = (s: string) =>
  s
    .replace(/週/g, '周')
    .replace(/報/g, '报')
    .replace(/會/g, '会')
    .replace(/於/g, '于')
    .replace(/舉/g, '举')
    .replace(/東/g, '东')
    .replace(/決/g, '决')
    .replace(/結/g, '结')
    .replace(/續/g, '续')
    .replace(/適/g, '适')
    .replace(/將/g, '将')
    .replace(/時/g, '时')
    .replace(/員/g, '员')
    .replace(/證/g, '证')
    .replace(/辦/g, '办')
    .replace(/過/g, '过')
    .replace(/戶/g, '户')
    .replace(/記/g, '记')
    .replace(/暫/g, '暂')
    .replace(/請/g, '请')
    .replace(/後/g, '后')
    .replace(/處/g, '处')
    .replace(/區/g, '区')
    .replace(/發/g, '发')
    .replace(/佈/g, '布')
    .replace(/訊/g, '讯')
    .replace(/函/g, '函')
    .replace(/電/g, '电')
    .replace(/腦/g, '脑')
    .replace(/動/g, '动')
    .replace(/畫/g, '画')
    .replace(/隊/g, '队')
    .replace(/學/g, '学')
    .replace(/銀/g, '银')
    .replace(/獎/g, '奖')
    .replace(/銅/g, '铜')
    .replace(/獲/g, '获')
    .replace(/際/g, '际')
    .replace(/實/g, '实')
    .replace(/驗/g, '验')
    .replace(/團/g, '团')
    .replace(/賽/g, '赛')
    .replace(/視/g, '视')
    .replace(/頻/g, '频')
    .replace(/競/g, '竞')
    .replace(/術/g, '术')
    .replace(/藝/g, '艺')
    .replace(/傑/g, '杰')
    .replace(/榮/g, '荣')
    .replace(/訪/g, '访')
    .replace(/開/g, '开')
    .replace(/併/g, '并')
    .replace(/擔/g, '担')
    .replace(/衝/g, '冲')
    .replace(/償/g, '偿')
    .replace(/資/g, '资')
    .replace(/產/g, '产')
    .replace(/總/g, '总')
    .replace(/額/g, '额')
    .replace(/計/g, '计')
    .replace(/劃/g, '划')
    .replace(/為/g, '为')
    .replace(/與/g, '与')
    .replace(/關/g, '关')
    .replace(/係/g, '系')
    .replace(/聯/g, '联')
    .replace(/購/g, '购')
    .replace(/賣/g, '卖')
    .replace(/賬/g, '账')
    .replace(/單/g, '单')
    .replace(/週/g, '周')
    .replace(/顧/g, '顾')
    .replace(/問/g, '问')
    .replace(/約/g, '约')
    .replace(/書/g, '书')
    .replace(/僱/g, '雇')
    .replace(/離/g, '离')
    .replace(/內/g, '内')
    .replace(/場/g, '场')
    .replace(/獨/g, '独')
    .replace(/歲/g, '岁');

interface Rule {
  test: RegExp;
  tc: (name: string) => string;
}

const RULES: Rule[] = [
  {
    test: /^annual report\s+(\d{4})$/i,
    tc: (n) => `${/\d{4}/.exec(n)![0]}年度年報`,
  },
  {
    test: /^notice of annual general meeting$/i,
    tc: () => '股東週年大會通告',
  },
  {
    test: /^notification letter$/i,
    tc: () => '通知函',
  },
  {
    test: /^request form$/i,
    tc: () => '申請表',
  },
  {
    test: /^change of hong kong transfer agent$/i,
    tc: () => '更換香港過戶代理',
  },
  {
    test: /^change of address of hong kong transfer agent$/i,
    tc: () => '更改香港過戶代理地址',
  },
  {
    test: /^change of address of transfer agent office$/i,
    tc: () => '更改過戶代理辦事處地址',
  },
  {
    test: /^closure of register of members for the annual general meeting$/i,
    tc: () => '就股東週年大會暫停辦理股份過戶登記',
  },
  {
    test: /^final dividend closure of register of members$/i,
    tc: () => '末期股息 — 暫停辦理股份過戶登記',
  },
  {
    test: /^final dividend for the year ended 31 december (\d{4}) closure of register of members$/i,
    tc: (n) => `截至${/\d{4}/.exec(n)![0]}年12月31日止年度末期股息 — 暫停辦理股份過戶登記`,
  },
  {
    test: /^results of the annual general meeting held on/i,
    tc: (n) => {
      const p = parseEnglishDate(n);
      return p
        ? `於${cnDate(p)}舉行的股東週年大會投票表決結果`
        : '股東週年大會投票表決結果';
    },
  },
  {
    test: /^form of proxy for use at the annual general meeting/i,
    tc: (n) => {
      const p = parseEnglishDate(n);
      const time = timeText(n);
      if (!p) return '股東週年大會（或其任何續會）適用的代表委任表格';
      const weekday = p.weekday ? `（${WEEKDAYS_TC[p.weekday]}）` : '';
      return `股東週年大會（或其任何續會）適用的代表委任表格，大會將於${cnDate(p)}${weekday}${time}舉行`;
    },
  },
  {
    test: /^letter to registered shareholders and reply form/i,
    tc: () => '致登記股東的函件及回條 — 以電子方式發佈公司通訊',
  },
  {
    test: /^letter to non-registered shareholders/i,
    tc: () => '致非登記股東的函件 — 以電子方式發佈公司通訊',
  },
  {
    test: /infomatrix 2018/i,
    tc: () => '裕游書院學生組成的三維電腦動畫隊伍於2018年InfoMatrix國際賽中勇奪金獎及銀獎',
  },
  {
    test: /infomatrix 2016/i,
    tc: () => '裕游書院學生組成的三維電腦動畫隊伍於2016年InfoMatrix國際賽中勇奪金獎、銀獎及銅獎',
  },
  {
    test: /student of the year - visual artist/i,
    tc: () => '裕游書院學生榮膺「傑出學生大獎 — 視覺藝術家」',
  },
  {
    test: /ambulance command video competition/i,
    tc: () => '救護總區短片製作比賽榮獲冠軍',
  },
  {
    test: /youth animation award/i,
    tc: () => '裕游書院學生的三維動畫作品榮獲青年動畫大獎',
  },
  {
    test: /tiangong 2/i,
    tc: () => '裕游書院學生為天宮二號設計實驗項目',
  },
  {
    test: /2 international awards in croatia/i,
    tc: () => '裕游書院學生於克羅地亞勇奪兩項國際大獎',
  },
  {
    test: /sydney and kevin yeung visiting/i,
    tc: () => '學生於楊氏兄弟到訪期間獲頒獎項',
  },
];

/** Translate an English announcement title into the requested language. */
export const getLocalizedNewsName = (name: string, language: Language): string => {
  if (language === 'en') return name;
  const trimmed = name.trim();
  const rule = RULES.find((r) => r.test.test(trimmed));
  if (!rule) return name;
  const tc = rule.tc(trimmed);
  if (language === 'zh-TW') return tc;
  const sc = tc2sc(tc);
  return sc.replace(/上午(\d+)時/g, '上午$1时').replace(/下午(\d+)時/g, '下午$1时');
};

export { timeTextCn };

/** Chinese versions of the announcements use the Shell_C filename prefix. */
export const getLocalizedPdfUrl = (pdfUrl: string, language: Language): string => {
  if (language === 'en') return pdfUrl;
  return pdfUrl.replace(/\/Shell_E_/, '/Shell_C_');
};

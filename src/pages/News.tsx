import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import { FileText, ChevronDown, Play, AlertCircle } from 'lucide-react';

interface NewsItem {
  date: string;
  name: string;
  pdfUrl: string;
}

interface NewsSection {
  id: string;
  title: string;
  items: NewsItem[];
}

const News = () => {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState('2025');
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const sections: NewsSection[] = [
    {
      id: 'investors',
      title: 'I.  Investors Information',
      items: [
        {
          date: '21-08-2025',
          name: 'CHANGE OF HONG KONG TRANSFER AGENT',
          pdfUrl: '/pdf/2025/transfer-agent-20250821.pdf',
        },
        {
          date: '21-08-2025',
          name: 'RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 21 AUGUST 2025',
          pdfUrl: '/pdf/2025/agm-results-20250821.pdf',
        },
        {
          date: '18-07-2025',
          name: 'NOTIFICATION LETTER',
          pdfUrl: '/pdf/2025/notification-letter-20250718.pdf',
        },
        {
          date: '18-07-2025',
          name: 'FORM OF PROXY FOR USE AT THE ANNUAL GENERAL MEETING (OR AT ANY ADJOURNMENT THEREOF) TO BE HELD AT 10:00 A.M. ON THURSDAY, 21 AUGUST 2025',
          pdfUrl: '/pdf/2025/proxy-form-20250718.pdf',
        },
        {
          date: '18-07-2025',
          name: 'NOTICE OF ANNUAL GENERAL MEETING',
          pdfUrl: '/pdf/2025/agm-notice-20250718.pdf',
        },
        {
          date: '18-07-2025',
          name: 'CLOSURE OF REGISTER OF MEMBERS FOR THE ANNUAL GENERAL MEETING',
          pdfUrl: '/pdf/2025/register-closure-20250718.pdf',
        },
        {
          date: '18-07-2025',
          name: 'ANNUAL REPORT 2024',
          pdfUrl: '/pdf/2025/annual-report-2024.pdf',
        },
      ],
    },
    {
      id: 'other',
      title: 'II.  Other',
      items: [],
    },
    {
      id: 'request',
      title: 'III.  Request Form',
      items: [
        {
          date: '17-07-2024',
          name: 'Request Form',
          pdfUrl: '/pdf/2025/request-form.pdf',
        },
      ],
    },
  ];

  const handlePdfClick = async (e: React.MouseEvent<HTMLAnchorElement>, url: string, name: string) => {
    setDownloadError(null);
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (!response.ok) {
        e.preventDefault();
        setDownloadError(`PDF not available: ${name}`);
        console.error(`Failed to download PDF: ${url} — Status: ${response.status}`);
      }
    } catch (err) {
      e.preventDefault();
      setDownloadError(`PDF not available: ${name}`);
      console.error(`Failed to fetch PDF: ${url}`, err);
    }
  };

  return (
    <div>
      <HeroSection
        title={t('news.title')}
        subtitle="Latest Updates & Announcements"
        size="sm"
      />

      <section className="py-16 bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
        <div className="container-corporate max-w-4xl">
          {/* Page heading — matches Financial Information style */}
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            News &amp; Announcements
          </h2>

          {/* Year selector */}
          <div className="mb-8">
            <div className="relative inline-block">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none border border-border bg-card text-foreground px-4 py-2 pr-8 rounded-sm text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="2025">2025</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Error banner */}
          {downloadError && (
            <div className="mb-6 flex items-center gap-2 border border-destructive/30 bg-destructive/10 text-destructive rounded-sm px-4 py-3 text-sm">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {downloadError}
            </div>
          )}

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.id}>
                {/* Section Title — matches Financial Information year header style */}
                <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg px-4 py-2 mb-4">
                  {section.title}
                </div>

                {section.items.length > 0 ? (
                  <div className="border border-border rounded-sm overflow-hidden bg-card">
                    {/* Table Header */}
                    <div className="grid grid-cols-[100px_1fr_70px] bg-primary/10 border-b border-border px-4 py-2.5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">Date</span>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">Name</span>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide text-right">Download</span>
                    </div>

                    {/* Table Rows */}
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`grid grid-cols-[100px_1fr_70px] items-start px-4 py-3 border-b border-border last:border-b-0 hover:bg-primary/5 transition-colors ${idx % 2 === 1 ? 'bg-secondary/20' : ''}`}
                      >
                        <div className="flex items-center gap-1.5 text-sm text-foreground font-medium">
                          <Play className="h-3 w-3 fill-primary text-primary flex-shrink-0" />
                          <span className="whitespace-nowrap">{item.date}</span>
                        </div>
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => handlePdfClick(e, item.pdfUrl, item.name)}
                          className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors leading-relaxed"
                        >
                          {item.name}
                        </a>
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => handlePdfClick(e, item.pdfUrl, item.name)}
                          className="flex items-center justify-end gap-1.5 px-2 py-1 text-primary hover:bg-primary/10 rounded-sm transition-all hover:scale-105"
                          title={`Download ${item.name} PDF`}
                        >
                          <FileText className="h-4 w-4" />
                          <span className="text-xs font-semibold">PDF</span>
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-border rounded-sm overflow-hidden bg-card">
                    <div className="grid grid-cols-[100px_1fr_70px] bg-muted/50 border-b border-border px-4 py-2.5">
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Date</span>
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Name</span>
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide text-right">Download</span>
                    </div>
                    <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                      No items available.
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import { FileText, Play, AlertCircle } from 'lucide-react';
import { newsArchive, availableYears } from '@/data/newsData';

const News = () => {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState('2025');
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const currentYearData = newsArchive.find((d) => d.year === selectedYear);
  const sections = currentYearData?.sections ?? [];

  return (
    <div>
      <HeroSection
        title={t('news.title')}
        subtitle="Latest Updates & Announcements"
        backgroundImage="/images/hero-corporate-bg.jpg"
        size="sm"
      />

      <section className="py-16 bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
        <div className="container-corporate max-w-4xl">
          {/* Page heading */}
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            News &amp; Announcements
          </h2>

          {/* Year dropdown */}
          <div className="mb-8 flex items-center gap-3">
            <label htmlFor="year-select" className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              Select Year:
            </label>
            <select
              id="year-select"
              value={selectedYear}
              onChange={(e) => { setSelectedYear(e.target.value); setDownloadError(null); }}
              className="h-10 px-4 pr-8 rounded-md border border-border bg-card text-foreground text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors cursor-pointer appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center' }}
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
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
                <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg px-4 py-2 mb-4">
                  {section.title}
                </div>

                {section.items.length > 0 ? (
                  <div className="border border-border rounded-sm overflow-hidden bg-card">
                    {/* Table Header */}
                    <div className="grid grid-cols-[100px_1fr_70px] bg-gradient-to-r from-primary to-accent border-b border-border px-4 py-2.5">
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide">Date</span>
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide">Name</span>
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide text-right">Download</span>
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
                          download={item.name.replace(/\s+/g, '_') + '.pdf'}
                          className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors leading-relaxed"
                        >
                          {item.name}
                        </a>
                        <a
                          href={item.pdfUrl}
                          download={item.name.replace(/\s+/g, '_') + '.pdf'}
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
                    <div className="grid grid-cols-[100px_1fr_70px] bg-gradient-to-r from-primary to-accent border-b border-border px-4 py-2.5">
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide">Date</span>
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide">Name</span>
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide text-right">Download</span>
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

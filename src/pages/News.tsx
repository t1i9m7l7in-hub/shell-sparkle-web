import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import { FileText, Play, AlertCircle } from 'lucide-react';
import { newsArchive, availableYears } from '@/data/newsData';
import { formatNewsDate, getLocalizedNewsName, getLocalizedPdfUrl } from '@/data/newsI18n';

const SECTION_KEYS: Record<string, string> = {
  investors: 'news.section.investors',
  other: 'news.section.other',
  request: 'news.section.request',
};

const News = () => {
  const { t, language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState('2025');
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const currentYearData = newsArchive.find((d) => d.year === selectedYear);
  const sections = currentYearData?.sections ?? [];

  return (
    <div>
      <HeroSection
        title={t('news.title')}
        subtitle={t('news.subtitle')}
        backgroundImage="/images/hero-corporate-bg.jpg"
        size="sm"
      />

      <section className="py-16 bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
        <div className="container-corporate max-w-4xl">
          {/* Page heading */}
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            {t('news.header')}
          </h2>

          {/* Year dropdown */}
          <div className="mb-8 flex items-center gap-3">
            <label htmlFor="year-select" className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {t('news.select.year')}
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
                  {SECTION_KEYS[section.id] ? t(SECTION_KEYS[section.id]) : section.title}
                </div>

                {section.items.length > 0 ? (
                  <div className="border border-border rounded-sm overflow-hidden bg-card">
                    {/* Table Header */}
                    <div className="hidden md:grid md:grid-cols-[minmax(120px,150px)_minmax(0,1fr)_minmax(80px,100px)] gap-x-4 bg-gradient-to-r from-primary to-accent border-b border-border px-4 py-2.5">
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide">{t('news.table.date')}</span>
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide">{t('news.table.name')}</span>
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide text-right">{t('news.table.download')}</span>
                    </div>

                    {/* Table Rows */}
                    {section.items.map((item, idx) => {
                      const localizedName = getLocalizedNewsName(item.name, language);
                      const href = getLocalizedPdfUrl(item.pdfUrl, language);
                      const fileName = localizedName.replace(/\s+/g, '_') + '.pdf';
                      return (
                        <div
                          key={idx}
                          className={`grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(120px,150px)_minmax(0,1fr)_minmax(80px,100px)] gap-x-4 gap-y-1.5 items-start md:items-center px-4 py-3 border-b border-border last:border-b-0 hover:bg-primary/5 transition-colors ${idx % 2 === 1 ? 'bg-secondary/20' : ''}`}
                        >
                          <div className="col-start-1 row-start-1 flex items-center gap-1.5 text-sm text-foreground font-medium">
                            <Play className="h-3 w-3 fill-primary text-primary flex-shrink-0" />
                            <span className="whitespace-nowrap">{formatNewsDate(item.date, language)}</span>
                          </div>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={fileName}
                            className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1 min-w-0 [overflow-wrap:anywhere] break-words text-sm text-primary hover:text-primary/80 hover:underline transition-colors leading-relaxed"
                          >
                            {localizedName}
                          </a>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={fileName}
                            className="col-start-2 row-start-1 md:col-start-3 flex items-center justify-end gap-1.5 whitespace-nowrap px-2 py-1 text-primary hover:bg-primary/10 rounded-sm transition-all hover:scale-105"
                            title={`${t('news.pdf')} — ${localizedName}`}
                          >
                            <FileText className="h-4 w-4" />
                            <span className="text-xs font-semibold">{t('news.pdf')}</span>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="border border-border rounded-sm overflow-hidden bg-card">
                    <div className="hidden md:grid md:grid-cols-[minmax(120px,150px)_minmax(0,1fr)_minmax(80px,100px)] gap-x-4 bg-gradient-to-r from-primary to-accent border-b border-border px-4 py-2.5">
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide">{t('news.table.date')}</span>
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide">{t('news.table.name')}</span>
                      <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wide text-right">{t('news.table.download')}</span>
                    </div>
                    <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                      {t('news.empty')}
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

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import { FileText, Download, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const annualReports = [
  { year: 2025, size: null, status: 'Coming soon' },
  { year: 2024, size: '935 KB' },
  { year: 2023, size: '3,372 KB' },
  { year: 2022, size: '1,222 KB' },
  { year: 2021, size: '1,089 KB' },
  { year: 2020, size: '1,104 KB' },
  { year: 2019, size: '2,365 KB' },
  { year: 2018, size: '1,794 KB' },
  { year: 2017, size: '1,687 KB' },
  { year: 2016, size: '3,505 KB' },
  { year: 2015, size: '1,442 KB' },
  { year: 2014, size: '4,216 KB' },
  { year: 2013, size: '2,600 KB' },
  { year: 2012, size: '2,134 KB' },
  { year: 2011, size: '2,493 KB' },
  { year: 2010, size: '1,725 KB' },
];

const PAGES = [
  { label: '1', years: [2025, 2024, 2023, 2022, 2021] },
  { label: '2', years: [2020, 2019, 2018, 2017, 2016] },
  { label: '3', years: [2015, 2014, 2013, 2012, 2011, 2010] },
];

const FinancialInformation = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);

  const currentYears = PAGES[currentPage].years;
  const currentReports = annualReports.filter((r) => currentYears.includes(r.year));

  return (
    <div>
      <HeroSection
        title={t('financial.title')}
        subtitle="Investor Relations & Financial Reports"
        size="sm"
      />

      <section className="py-16 bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
        <div className="container-corporate max-w-4xl">
          {/* Annual Reports Header */}
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            {t('financial.reports')}
          </h2>

          {/* Pagination Top */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-sm bg-primary text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {PAGES.map((page, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`px-4 py-2 rounded-sm text-sm font-semibold transition-colors ${
                  idx === currentPage
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
                }`}
              >
                {page.label}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(PAGES.length - 1, p + 1))}
              disabled={currentPage === PAGES.length - 1}
              className="p-2 rounded-sm bg-primary text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Reports List */}
          <div className="space-y-10">
            {currentReports.map((report) => (
              <div key={report.year}>
                {/* Year Header - brown/gold like reference image */}
                <div className="bg-gradient-to-r from-[hsl(30,50%,40%)] to-[hsl(35,55%,50%)] text-primary-foreground font-bold text-lg px-4 py-2 mb-0">
                  {report.year}
                </div>

                {/* Report Card with thumbnail */}
                <div className="border border-border bg-card p-5 flex flex-col sm:flex-row items-start gap-6 hover:bg-secondary/40 hover:shadow-[var(--shadow-md)] transition-all">
                  {/* Thumbnail */}
                  <div className="w-[140px] h-[196px] flex-shrink-0 overflow-hidden border border-border bg-muted">
                    <img
                      src={`/annual-reports-thumbs/thumb-${report.year}.jpg`}
                      alt={`Annual Report ${report.year} thumbnail`}
                      loading="lazy"
                      width={140}
                      height={196}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {report.status ? (
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-lg">ANNUAL REPORT {report.year}</p>
                      <p className="text-sm text-muted-foreground italic mt-1">{report.status}</p>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
                      <div>
                        <a
                          href={`/annual-reports/annual-report-${report.year}.pdf`}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={`Annual_Report_${report.year}.pdf`}
                          className="font-semibold text-primary hover:underline flex items-center gap-2 text-lg"
                        >
                          <span className="text-primary">▶</span> ANNUAL REPORT {report.year}
                        </a>
                        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <FileText className="h-4 w-4 text-destructive" />
                          <span>PDF format</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{report.size}</p>
                      </div>
                      <a
                        href={`/annual-reports/annual-report-${report.year}.pdf`}
                        download={`annual-report-${report.year}.pdf`}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 hover:scale-105 transition-all text-sm font-medium self-start"
                        aria-label={`Download Annual Report ${report.year} PDF`}
                      >
                        <Download className="h-4 w-4" />
                        PDF
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Bottom */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-sm bg-primary text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {PAGES.map((page, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`px-4 py-2 rounded-sm text-sm font-semibold transition-colors ${
                  idx === currentPage
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
                }`}
              >
                Page {page.label}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(PAGES.length - 1, p + 1))}
              disabled={currentPage === PAGES.length - 1}
              className="p-2 rounded-sm bg-primary text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Corporate Governance */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              {t('financial.governance')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Shell Electric Holdings Limited, with over 60 years of history since its founding, remains committed to maintaining high standards of corporate governance. The Company believes that good corporate governance practices are essential for creating long-term shareholder value and maintaining the confidence of shareholders and other stakeholders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialInformation;

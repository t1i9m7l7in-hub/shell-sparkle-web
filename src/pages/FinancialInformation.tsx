import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import { FileText, Download, Shield } from 'lucide-react';

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

const FinancialInformation = () => {
  const { t } = useLanguage();

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
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            {t('financial.reports')}
          </h2>

          {/* Reports List */}
          <div className="space-y-10">
            {annualReports.map((report) => (
              <div key={report.year}>
                {/* Year Header */}
                <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg px-4 py-2 mb-4">
                  {report.year}
                </div>

                {/* Report Card */}
                <div className="border border-border bg-card p-5 flex items-center gap-6 hover:bg-secondary/40 hover:shadow-corporate-md transition-all">
                  {report.status ? (
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">ANNUAL REPORT {report.year}</p>
                      <p className="text-sm text-muted-foreground italic mt-1">{report.status}</p>
                    </div>
                  ) : (
                    <>
                      <div className="flex-1">
                        <a
                          href={`/annual-reports/annual-report-${report.year}.pdf`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-primary hover:underline flex items-center gap-2"
                        >
                          <span className="text-primary">▶</span> ANNUAL REPORT {report.year}
                        </a>
                        <div className="flex items-center gap-2 mt-1.5 text-sm text-muted-foreground">
                          <FileText className="h-4 w-4 text-destructive" />
                          <span>PDF format</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{report.size}</p>
                      </div>
                      <a
                        href={`/annual-reports/annual-report-${report.year}.pdf`}
                        download={`annual-report-${report.year}.pdf`}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors text-sm font-medium"
                        aria-label={`Download Annual Report ${report.year} PDF`}
                      >
                        <Download className="h-4 w-4" />
                        PDF
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Corporate Governance */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              {t('financial.governance')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Shell Electric Holdings Limited, with over 60 years of history since its founding, remains committed to maintaining high standards of corporate governance. The Company believes that good corporate governance practices are essential for creating long-term shareholder value and maintaining the confidence of shareholders and other stakeholders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialInformation;

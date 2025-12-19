import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { FileText, TrendingUp, BarChart3, Shield, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinancialInformation = () => {
  const { t } = useLanguage();

  const reports = [
    { year: '2024', type: 'Interim Report', date: 'September 2024' },
    { year: '2023', type: 'Annual Report', date: 'April 2024' },
    { year: '2023', type: 'Interim Report', date: 'September 2023' },
    { year: '2022', type: 'Annual Report', date: 'April 2023' },
  ];

  const announcements = [
    { title: 'Monthly Return of Equity Issuer', date: 'December 2024' },
    { title: 'Notification of Board Meeting', date: 'November 2024' },
    { title: 'Interim Results Announcement', date: 'September 2024' },
    { title: 'Announcement of Dividend', date: 'August 2024' },
  ];

  return (
    <div>
      <HeroSection
        title={t('financial.title')}
        subtitle="Investor Relations & Financial Reports"
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Annual Reports */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('financial.reports')}</h2>
              </div>
              
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div key={index} className="card-corporate p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{report.year} {report.type}</h3>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('financial.announcements')}</h2>
              </div>
              
              <div className="space-y-4">
                {announcements.map((item, index) => (
                  <div key={index} className="card-corporate p-6">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Corporate Governance */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-sm bg-corporate-gold/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-corporate-gold" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{t('financial.governance')}</h2>
            </div>
            
            <div className="card-corporate p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Shell Electric Holdings Limited is committed to maintaining high standards of corporate governance. The Company believes that good corporate governance practices are essential for creating long-term shareholder value and maintaining the confidence of shareholders and other stakeholders.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-secondary rounded-sm">
                  <div className="text-2xl font-bold text-primary mb-2">HKEX</div>
                  <p className="text-sm text-muted-foreground">Listed Company</p>
                </div>
                <div className="text-center p-4 bg-secondary rounded-sm">
                  <div className="text-2xl font-bold text-primary mb-2">0081.HK</div>
                  <p className="text-sm text-muted-foreground">Stock Code</p>
                </div>
                <div className="text-center p-4 bg-secondary rounded-sm">
                  <div className="text-2xl font-bold text-primary mb-2">60+</div>
                  <p className="text-sm text-muted-foreground">Years History</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialInformation;

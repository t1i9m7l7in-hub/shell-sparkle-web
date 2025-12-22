import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Building2, MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react';
import heroInvestments from '@/assets/hero-investments.jpg';

const CompanyDirectory = () => {
  const { t } = useLanguage();

  const headquarters = {
    name: '1/F, Shell Industrial Building, 12 Lee Chung Street,\nChai Wan Industrial District, Hong Kong.',
    address: 'Shell Industrial Building, Hong Kong',
    phone: '+852 2345 6789',
    email: 'info@smc.com.hk',
    website: 'www.smc.com.hk',
  };

  const subsidiaries = [
    {
      name: 'SMC Multi-Media (H.K.) Limited',
      business: 'Electronic Manufacturing Services',
      location: 'Hong Kong',
    },
    {
      name: 'PFC Device Inc.',
      business: 'Power Discrete Semiconductors',
      location: 'Taiwan',
      stock: '8231.HK',
      website: 'www.pfc-device.com',
    },
    {
      name: 'Guangzhou SMC Car Rental Company Ltd.',
      business: 'Taxi Fleet Operations',
      location: 'Guangzhou, China',
    },
    {
      name: 'SMC Property Investment',
      business: 'Real Estate Investment',
      location: 'Hong Kong, China, Vietnam',
    },
  ];

  return (
    <div>
      <HeroSection
        title={t('directory.title')}
        subtitle="Our Global Presence"
        backgroundImage={heroInvestments}
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          {/* Headquarters */}
          <div className="mb-20">
            <SectionTitle title={t('directory.hq')} />
            
            <div className="max-w-2xl mx-auto">
              <div className="card-corporate p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Shell Electric Holdings Limited</h3>
                    <p className="text-muted-foreground">Corporate Headquarters</p>
                    <p className="text-muted-foreground whitespace-pre-line">{headquarters.name}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{headquarters.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{headquarters.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{headquarters.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{headquarters.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subsidiaries */}
          <div>
            <SectionTitle 
              title={t('directory.subsidiaries')}
              subtitle="Our network of specialized companies"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subsidiaries.map((company, index) => (
                <div key={index} className="card-corporate p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{company.name}</h3>
                  <p className="text-primary font-medium mb-4">{company.business}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {company.location}
                  </div>
                  {company.stock && (
                    <div className="text-sm text-muted-foreground mb-2">
                      Stock Code: <span className="font-medium text-foreground">{company.stock}</span>
                    </div>
                  )}
                  {company.website && (
                    <a 
                      href={`https://${company.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      {company.website}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyDirectory;

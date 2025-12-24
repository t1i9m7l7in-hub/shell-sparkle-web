import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Building2, MapPin, Phone, Mail, Globe, Printer } from 'lucide-react';
import heroInvestments from '@/assets/hero-investments.jpg';

const CompanyDirectory = () => {
  const { t } = useLanguage();

  const headquarters = {
    name: 'Shell Electric Holdings Limited',
    address: '1/F, Shell Industrial Building, 12 Lee Chung Street, Chai Wan Industrial District, Hong Kong.',
    tel: '(852) 2558 0181',
    fax: '(852) 2897 2095',
    email: 'group@smc.com.hk',
    website: 'www.smc.com.hk',
    mapQuery: '12 Lee Chung Street, Chai Wan, Hong Kong',
  };

  const subsidiaries = [
    {
      name: 'Shell Electric Mfg. (China) Co. Ltd.',
      addressLabel: 'Correspondence Address',
      address: '1/F, Shell Ind. Bldg., 12 Lee Chung Street, Chai Wan Industrial District, Hong Kong.',
      tel: '(852) 2558 0181',
      fax: '(852) 2897 3376',
      mapQuery: '12 Lee Chung Street, Chai Wan, Hong Kong',
    },
    {
      name: 'Speed Power Limited',
      addressLabel: 'Address',
      address: '1/F, Shell Ind. Bldg., 12 Lee Chung Street, Chai Wan Industrial District, Hong Kong.',
      tel: '(852) 2558 0181',
      fax: '(852) 2897 2095',
      mapQuery: '12 Lee Chung Street, Chai Wan, Hong Kong',
    },
    {
      name: 'SMC Electric (HK) Limited',
      addressLabel: 'Correspondence Address',
      address: '1/F, Shell Ind. Bldg., 12 Lee Chung Street, Chai Wan Industrial District, Hong Kong.',
      tel: '(852) 2558 0181',
      fax: '(852) 2897 3376',
      mapQuery: '12 Lee Chung Street, Chai Wan, Hong Kong',
    },
    {
      name: 'Quanta Global Limited',
      addressLabel: 'Correspondence Address',
      address: '1/F, Shell Ind. Bldg., 12 Lee Chung Street, Chai Wan Industrial District, Hong Kong.',
      tel: '(852) 2558 0181',
      fax: '(852) 2897 3376',
      mapQuery: '12 Lee Chung Street, Chai Wan, Hong Kong',
    },
    {
      name: 'SMC Electric (China) Limited',
      addressLabel: 'Address',
      address: 'No. 18, San Yue Dong Lu, Beijiao, Shunde District, Foshan, Guangdong, China.',
      postalCode: '528311',
      tel: '(86-757) 2665 5813',
      fax: '(86-757) 2665 6727, 2665 6726',
      mapQuery: 'No. 18, San Yue Dong Lu, Beijiao, Shunde, Foshan, Guangdong, China',
    },
    {
      name: 'SMC Multi-Media (H.K.) Limited',
      addressLabel: 'Correspondence Address',
      address: '1/F, Shell Ind. Bldg., 12 Lee Chung Street, Chai Wan Industrial District, Hong Kong.',
      tel: '(852) 2558 0181',
      fax: '(852) 2965 7766',
      website: 'www.smc-multimedia.com',
      mapQuery: '12 Lee Chung Street, Chai Wan, Hong Kong',
    },
    {
      name: 'Shunde SMC Multi-Media Products Co. Ltd.',
      addressLabel: 'Address',
      address: 'No. 18, San Yue Dong Lu, Beijiao, Shunde District, Foshan, Guangdong, China.',
      postalCode: '528311',
      tel: '(86-757) 2665 5813',
      fax: '(86-757) 2665 6727, 2665 6726',
      mapQuery: 'No. 18, San Yue Dong Lu, Beijiao, Shunde, Foshan, Guangdong, China',
    },
  ];

  const openGoogleMaps = (query: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

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
                    <h3 className="text-lg font-semibold text-foreground">{headquarters.name}</h3>
                    <p className="text-sm text-muted-foreground">Corporate Headquarters</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div 
                    className="flex items-start gap-3 cursor-pointer hover:text-primary transition-colors group"
                    onClick={() => openGoogleMaps(headquarters.mapQuery)}
                  >
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-muted-foreground group-hover:text-primary">{headquarters.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Tel: {headquarters.tel}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Printer className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Fax: {headquarters.fax}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a 
                      href={`mailto:${headquarters.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {headquarters.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-primary flex-shrink-0" />
                    <a 
                      href={`https://${headquarters.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {headquarters.website}
                    </a>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subsidiaries.map((company, index) => (
                <div key={index} className="card-corporate p-6">
                  <h3 className="text-base font-semibold text-foreground mb-4">{company.name}</h3>
                  
                  <div className="space-y-2 text-sm">
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:text-primary transition-colors group"
                      onClick={() => openGoogleMaps(company.mapQuery)}
                    >
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div className="group-hover:text-primary text-muted-foreground">
                        <span className="font-medium text-foreground">{company.addressLabel}: </span>
                        {company.address}
                        {company.postalCode && (
                          <span className="block">Postal Code: {company.postalCode}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Tel: {company.tel}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Printer className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Fax: {company.fax}</span>
                    </div>
                    
                    {company.website && (
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary flex-shrink-0" />
                        <a 
                          href={`https://${company.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {company.website}
                        </a>
                      </div>
                    )}
                  </div>
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

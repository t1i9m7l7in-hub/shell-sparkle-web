import { useLanguage } from '@/contexts/LanguageContext';
import { renderShell } from '@/components/ShellChar';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Building2, MapPin, Phone, Mail, Globe, Printer } from 'lucide-react';
import heroContact from '@/assets/hero-contact.jpg';

const ContactUs = () => {
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

  const openGoogleMaps = (query: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div>
      <HeroSection
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        backgroundImage={heroContact}
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          {/* Headquarters */}
          <div>
            <SectionTitle title={t('directory.hq')} />
            
            <div className="max-w-2xl mx-auto">
              <div className="card-corporate p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{renderShell(t('contact.hq.company'))}</h3>
                    <p className="text-base text-muted-foreground">{t('contact.hq.subtitle')}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div 
                    className="flex items-start gap-3 cursor-pointer hover:text-primary transition-colors group"
                    onClick={() => openGoogleMaps(headquarters.mapQuery)}
                  >
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-base text-muted-foreground group-hover:text-primary">{renderShell(t('contact.hq.address'))}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-base text-muted-foreground">{t('contact.hq.tel')}: {headquarters.tel}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Printer className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-base text-muted-foreground">{t('contact.hq.fax')}: {headquarters.fax}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a 
                      href={`mailto:${headquarters.email}`}
                      className="text-base text-primary hover:underline"
                    >
                      {headquarters.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                    <a 
                      href="http://www.smc.com.hk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-primary hover:underline"
                    >
                      http://www.smc.com.hk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;

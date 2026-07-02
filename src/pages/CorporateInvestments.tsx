import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Car, MapPin } from 'lucide-react';
import heroInvestments from '@/assets/hero-investments.jpg';

const CorporateInvestments = () => {
  const { t } = useLanguage();

  const properties = [
    {
      name: t('investments.property.card1.title'),
      description: t('investments.property.card1.desc'),
    },
    {
      name: t('investments.property.card2.title'),
      description: t('investments.property.card2.desc'),
    },
  ];

  return (
    <div>
      <HeroSection
        title={t('investments.title')}
        subtitle={t('investments.property.subtitle')}
        backgroundImage={heroInvestments}
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {t('investments.intro')}
            </p>
          </div>

          {/* Property Section */}
          <div className="mb-20">
            <SectionTitle
              title={t('investments.property.title')}
              subtitle={t('investments.property.subtitle')}
            />

            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t('investments.property.desc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {properties.map((property, index) => (
                <div key={index} className="card-corporate p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">{property.name}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Transportation Section */}
          <div>
            <SectionTitle
              title={t('investments.transport.title')}
              subtitle={t('investments.transport.subtitle')}
            />

            <div className="max-w-4xl mx-auto">
              <div className="card-corporate p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-sm bg-corporate-gold/10 flex items-center justify-center">
                    <Car className="h-8 w-8 text-corporate-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{t('investments.transport.company')}</h3>
                    <p className="text-muted-foreground">{t('investments.transport.subsidiary')}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('investments.transport.p1')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-6 bg-secondary rounded-sm">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{t('investments.transport.stat1.title')}</div>
                    <div className="text-sm text-muted-foreground">{t('investments.transport.stat1.desc')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{t('investments.transport.stat2.title')}</div>
                    <div className="text-sm text-muted-foreground">{t('investments.transport.stat2.desc')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{t('investments.transport.stat3.title')}</div>
                    <div className="text-sm text-muted-foreground">{t('investments.transport.stat3.desc')}</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-6">
                  {t('investments.transport.p2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateInvestments;

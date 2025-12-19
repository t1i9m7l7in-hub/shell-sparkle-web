import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Building2, Car, MapPin, TrendingUp } from 'lucide-react';
import heroInvestments from '@/assets/hero-investments.jpg';

const CorporateInvestments = () => {
  const { t } = useLanguage();

  const properties = [
    {
      name: 'SMC Industrial Building, Hong Kong',
      description: 'Home of the Group\'s headquarters, Shell Industrial Building was built in 1966 with approximately 12,000 square meters of gross floor area.',
    },
    {
      name: 'Citic Plaza, Guangzhou, China',
      description: 'This 80-storey Grade A office building, with two 38-storey apartment blocks and a 40,000 square meters shopping arcades, is located conveniently next to the Kowloon-Canton Through Train Terminal in Tianhe. Citic Plaza is one of the most prominent landmarks in Southern China.',
    },
  ];

  return (
    <div>
      <HeroSection
        title={t('investments.title')}
        subtitle="Property & Transportation Business"
        backgroundImage={heroInvestments}
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              In addition to the core industrial and technology businesses, SMC maintains active interests in selective projects that provide long term and strategic value to the Group, including Property and Transportation Business.
            </p>
          </div>

          {/* Property Section */}
          <div className="mb-20">
            <SectionTitle 
              title={t('investments.property')}
              subtitle="Commercial and industrial properties in prime locations"
            />
            
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t('investments.property.desc')} The portfolio provides stable rental income and long-term capital growth prospects.
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
              title={t('investments.transport')}
              subtitle="Taxi Fleet Operations in Guangzhou"
            />
            
            <div className="max-w-4xl mx-auto">
              <div className="card-corporate p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-sm bg-corporate-gold/10 flex items-center justify-center">
                    <Car className="h-8 w-8 text-corporate-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Guangzhou SMC Car Rental Company Ltd.</h3>
                    <p className="text-muted-foreground">100% Owned Subsidiary</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Since 1992 when the Group first invested in a joint venture to own and operate 200 taxis in Guangzhou, China, SMC has maintained a growing interest in the transportation business that provides stable income contribution.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-6 bg-secondary rounded-sm">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">800+</div>
                    <div className="text-sm text-muted-foreground">Taxis in Fleet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">1992</div>
                    <div className="text-sm text-muted-foreground">Since</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Eco-friendly Engines</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Currently, the Group owns 100% of Guangzhou SMC Car Rental Company Ltd. and operates a fleet of about 800 taxis, all equipped with environmental friendly engines. The Group's vision is to become one of the largest taxi rental companies in Guangzhou.
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

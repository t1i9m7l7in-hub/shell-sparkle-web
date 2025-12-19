import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Target, Eye, Lightbulb, Award } from 'lucide-react';
import heroManufacturing from '@/assets/hero-manufacturing.jpg';

const CorporateOverview = () => {
  const { t } = useLanguage();

  return (
    <div>
      <HeroSection
        title={t('corporate.overview')}
        subtitle="Shell Electric Holdings Limited"
        backgroundImage={heroManufacturing}
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title={t('corporate.title')} />
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-8">
                {t('corporate.overview.content')}
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                SMC maintains healthy growth in its core traditional product manufacturing business. At the same time, the Electronic Manufacturing Services (EMS) and other technology business initiatives are increasing significance in the Group's strategic focus of development for the future. The Group also continues investing in high potential business ventures for long-term profitability and expansion.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                The Group's global business expansions are supported by the long-term partnership with reputable global companies.
              </p>
              
              <p className="text-lg leading-relaxed">
                While gladly embraces the outstanding accomplishments to date, the management is not content to rest on the laurels. The Group is committed to continual pursuit for innovation, sharpens the competitive edge in order to achieve long-term profitability and business growth with its partners. Six decades of success and solid financial position provides SMC a strong foundation to accomplish new milestones ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 bg-secondary">
        <div className="container-corporate">
          <SectionTitle 
            title="Three Major Business Areas" 
            subtitle="SMC has consolidated its business operations into three synergetic areas"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Target,
                title: 'Manufacturing',
                description: 'Core traditional product manufacturing including ceiling fans, microwave ovens, and consumer electronics.',
              },
              {
                icon: Lightbulb,
                title: 'Technology',
                description: 'Electronic Manufacturing Services (EMS) and semiconductor business with advanced R&D capabilities.',
              },
              {
                icon: Award,
                title: 'Investment',
                description: 'Strategic investments in property and transportation for long-term profitability and expansion.',
              },
            ].map((area, index) => (
              <div key={index} className="card-corporate p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateOverview;

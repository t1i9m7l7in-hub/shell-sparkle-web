import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { renderShell } from '@/components/ShellChar';
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
                {renderShell(t('corporate.overview.content'))}
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                {renderShell(t('corporate.overview.p2'))}
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                {renderShell(t('corporate.overview.p3'))}
              </p>
              
              <p className="text-lg leading-relaxed">
                {renderShell(t('corporate.overview.p4'))}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 bg-secondary">
        <div className="container-corporate">
          <SectionTitle 
            title={t('corporate.areas.title')} 
            subtitle={t('corporate.areas.subtitle')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Target,
                title: t('corporate.areas.manufacturing'),
                description: t('corporate.areas.manufacturing.desc'),
              },
              {
                icon: Lightbulb,
                title: t('corporate.areas.technology'),
                description: t('corporate.areas.technology.desc'),
              },
              {
                icon: Award,
                title: t('corporate.areas.investment'),
                description: t('corporate.areas.investment.desc'),
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

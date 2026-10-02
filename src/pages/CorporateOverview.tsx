import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { renderShell } from '@/components/ShellChar';
import { Factory, Cpu, Building, Bus } from 'lucide-react';
import heroOverview from '@/assets/hero-overview.jpg';

const CorporateOverview = () => {
  const { t } = useLanguage();

  return (
    <div>
      <HeroSection
        title={t('corporate.overview.heroTitle')}
        subtitle={t('corporate.overview.heroSubtitle')}
        backgroundImage={heroOverview}
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
            title={t('corporate.areas4.title')} 
            subtitle={t('corporate.areas4.subtitle')}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Factory, title: t('corporate.areas4.mfg'), description: t('corporate.areas4.mfg.desc') },
              { icon: Cpu, title: t('corporate.areas4.tech'), description: t('corporate.areas4.tech.desc') },
              { icon: Building, title: t('corporate.areas4.property'), description: t('corporate.areas4.property.desc') },
              { icon: Bus, title: t('corporate.areas4.transport'), description: t('corporate.areas4.transport.desc') },
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

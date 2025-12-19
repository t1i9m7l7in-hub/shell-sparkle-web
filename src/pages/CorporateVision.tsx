import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Eye, Target, Rocket, Zap } from 'lucide-react';
import heroTechnology from '@/assets/hero-technology.jpg';

const CorporateVision = () => {
  const { t } = useLanguage();

  return (
    <div>
      <HeroSection
        title={t('corporate.vision')}
        subtitle="Our guiding principles for the future"
        backgroundImage={heroTechnology}
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          <div className="max-w-5xl mx-auto">
            {/* Vision */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center">
                      <Eye className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{t('corporate.vision.title')}</h2>
                  </div>
                  <div className="w-16 h-1 bg-primary mb-6" />
                  <p className="text-2xl text-foreground font-medium leading-relaxed">
                    {t('corporate.vision.content')}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-sm p-12 flex items-center justify-center">
                  <Eye className="h-32 w-32 text-primary/30" />
                </div>
              </div>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center">
                  <Target className="h-7 w-7 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t('corporate.mission.title')}</h2>
              </div>
              <div className="w-16 h-1 bg-primary mb-8" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card-corporate p-8">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Strategic Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('corporate.mission.content1')}
                  </p>
                </div>
                
                <div className="card-corporate p-8">
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-6">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Innovation Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('corporate.mission.content2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateVision;

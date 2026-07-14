import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { renderShell } from '@/components/ShellChar';
import { Cpu } from 'lucide-react';
import heroTechnology from '@/assets/hero-technology.jpg';

const CorporateTechnology = () => {
  const { t } = useLanguage();

  return (
    <div>
      <HeroSection
        title={t('technology.title')}
        subtitle={t('technology.semi.subtitle')}
        backgroundImage={heroTechnology}
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          <SectionTitle title={t('technology.semi.title')} />

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="card-corporate p-8 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Cpu className="h-6 w-6 text-primary" />
                {t('technology.semi.subtitle')}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {renderShell(t('technology.semi.p1'))}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {renderShell(t('technology.semi.p2'))}
              </p>
            </div>

            <div className="card-corporate p-8 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('technology.semi.applications.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {renderShell(t('technology.semi.applications.desc'))}
              </p>
            </div>

            <div className="card-corporate p-8 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('technology.semi.rnd.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {renderShell(t('technology.semi.rnd.desc'))}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-center">
              {t('technology.semi.link').replace('www.pfc-device.com', '')}
              <a
                href="https://www.pfc-device.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                www.pfc-device.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTechnology;

import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { renderShell } from '@/components/ShellChar';
import { Factory, Cpu } from 'lucide-react';
import heroManufacturing from '@/assets/hero-manufacturing.jpg';

const CorporateManufacturing = () => {
  const { t } = useLanguage();

  return (
    <div>
      <HeroSection
        title={t('manufacturing.title')}
        subtitle={t('manufacturing.heritage.title')}
        backgroundImage={heroManufacturing}
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          <div className="max-w-4xl mx-auto mb-16">
            <SectionTitle
              title={t('manufacturing.title')}
              subtitle={t('manufacturing.heritage.title')}
            />

            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
              {renderShell(t('manufacturing.heritage.p1'))}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {renderShell(t('manufacturing.heritage.p2'))}
            </p>
          </div>

          {/* Business Groups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-corporate p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t('manufacturing.electric.title')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('manufacturing.electric.desc')}
              </p>
              <ul className="text-muted-foreground leading-relaxed mb-4 space-y-2 list-disc pl-5">
                <li>
                  <span className="font-semibold text-foreground">{t('manufacturing.electric.bullet1.label')}</span>{' '}
                  {t('manufacturing.electric.bullet1.text')}
                </li>
                <li>
                  <span className="font-semibold text-foreground">{t('manufacturing.electric.bullet2.label')}</span>{' '}
                  {t('manufacturing.electric.bullet2.text')}
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                {t('manufacturing.electric.linkLabel')}{' '}
                <a
                  href="https://www.smcelectric.com.hk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  www.smcelectric.com.hk
                </a>
              </p>
            </div>

            <div className="card-corporate p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t('manufacturing.optics.title')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('manufacturing.optics.desc')}
              </p>
              <ul className="text-muted-foreground leading-relaxed mb-4 space-y-2 list-disc pl-5">
                <li>{t('manufacturing.optics.bullet1')}</li>
                <li>{t('manufacturing.optics.bullet2')}</li>
                <li>{t('manufacturing.optics.bullet3')}</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('manufacturing.optics.footer')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('manufacturing.optics.link').replace('www.smc-multimedia.com', '')}
                <a
                  href="https://www.smc-multimedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  www.smc-multimedia.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateManufacturing;

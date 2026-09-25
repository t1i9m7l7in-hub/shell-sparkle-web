import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import { Car } from 'lucide-react';
import { renderShell } from '@/components/ShellChar';
import heroInvestments from '@/assets/hero-investments.jpg';

const CorporateTransportation = () => {
  const { t } = useLanguage();
  const stats = [1, 2, 3].map((n) => ({
    value: t(`transportation.stat${n}Number`),
    label: t(`transportation.stat${n}Label`),
  }));

  return (
    <div>
      <HeroSection title={t('transportation.title')} subtitle={t('transportation.subtitle')} backgroundImage={heroInvestments} size="sm" />
      <section className="py-24 bg-background">
        <div className="container-corporate">
          <div className="max-w-4xl mx-auto card-corporate p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-sm bg-corporate-gold/10 flex items-center justify-center shrink-0">
                <Car className="h-8 w-8 text-corporate-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{renderShell(t('transportation.company'))}</h3>
                <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-sm bg-primary/10 text-primary">
                  {t('transportation.ownership')}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{renderShell(t('transportation.p1'))}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-6 bg-secondary rounded-sm">
              {stats.map((s) => (
                <div key={s.value} className="text-center">
                  <div className="text-3xl font-bold text-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6">{renderShell(t('transportation.p2'))}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTransportation;

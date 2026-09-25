import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import { MapPin } from 'lucide-react';
import { renderShell } from '@/components/ShellChar';
import heroInvestments from '@/assets/hero-investments.jpg';

const CorporateProperty = () => {
  const { t } = useLanguage();
  const items = [
    { name: t('property.item1Title'), description: t('property.item1Desc') },
    { name: t('property.item2Title'), description: t('property.item2Desc') },
  ];

  return (
    <div>
      <HeroSection title={t('property.title')} subtitle={t('property.subtitle')} backgroundImage={heroInvestments} size="sm" />
      <section className="py-24 bg-background">
        <div className="container-corporate">
          <p className="max-w-4xl mx-auto mb-16 text-lg text-muted-foreground leading-relaxed text-center">
            {renderShell(t('property.intro'))}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item) => (
              <div key={item.name} className="card-corporate p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <h3 className="text-lg font-bold text-foreground">{renderShell(item.name)}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{renderShell(item.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateProperty;

import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import { MapPin } from 'lucide-react';
import { renderShell } from '@/components/ShellChar';
import heroProperty from '@/assets/hero-property.jpg';
import shellBuilding from '@/assets/shell-industrial-building.jpg';
import citicPlaza from '@/assets/CITIC_Plaza_2007.jpg.asset.json';

const CorporateProperty = () => {
  const { t } = useLanguage();
  const items = [
    { name: t('property.item1Title'), description: t('property.item1Desc'), image: shellBuilding },
    { name: t('property.item2Title'), description: t('property.item2Desc'), image: citicPlaza.url },
  ];

  return (
    <div>
      <HeroSection title={t('property.title')} subtitle={t('property.subtitle')} backgroundImage={heroProperty} size="sm" />
      <section className="py-24 bg-background">
        <div className="container-corporate">
          <p className="max-w-4xl mx-auto mb-16 text-lg text-muted-foreground leading-relaxed text-center">
            {renderShell(t('property.intro'))}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item) => (
              <div key={item.name} className="card-corporate flex flex-col">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-t-sm bg-muted">
                  <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="text-lg font-bold text-foreground">{renderShell(item.name)}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{renderShell(item.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateProperty;

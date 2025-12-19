import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Factory, Cpu, Wind, Microwave, Camera, Wrench } from 'lucide-react';
import heroManufacturing from '@/assets/hero-manufacturing.jpg';

const CorporateManufacturing = () => {
  const { t } = useLanguage();

  const products = [
    { icon: Wind, name: 'Ceiling Fans', capacity: '6M+ units annually' },
    { icon: Microwave, name: 'Microwave Ovens', capacity: 'Best seller in China' },
    { icon: Camera, name: 'Optical Products', capacity: 'CD, DVD, Camera lenses' },
    { icon: Wrench, name: 'Industrial Products', capacity: 'Precision manufacturing' },
  ];

  return (
    <div>
      <HeroSection
        title={t('manufacturing.title')}
        subtitle="World's Largest Ceiling Fan Manufacturer"
        backgroundImage={heroManufacturing}
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          <div className="max-w-4xl mx-auto mb-16">
            <SectionTitle 
              title="Manufacturing Excellence" 
              subtitle={t('manufacturing.intro')}
            />
            
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Up till today, SMC has remained the world's largest ceiling fan company with annual capacity of over six million units. The Group established the microwave ovens business in mid 1980's and quickly became the best seller in the China market.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {products.map((product, index) => (
              <div key={index} className="card-corporate p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <product.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.capacity}</p>
              </div>
            ))}
          </div>

          {/* Business Groups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-corporate p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t('manufacturing.consumer')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('manufacturing.consumer.desc')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At the same time it allowed SMC to accumulate substantive know-how and experience in the manufacturing of optics and imaging products which represents an important value addition to the electro-optics specialization among the Group's EMS service offering today.
              </p>
            </div>

            <div className="card-corporate p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t('manufacturing.ems')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('manufacturing.ems.desc')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Operated under SMC Multi-Media (H.K.) Limited, the EMS division currently produces laser scanner head modules, fuser modules for laser printers, optical lens, laser levelers, high performance diodes and rectifiers, and household security systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateManufacturing;

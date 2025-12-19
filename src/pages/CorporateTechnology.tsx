import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Cpu, Award, Zap, Globe, TrendingUp } from 'lucide-react';
import heroTechnology from '@/assets/hero-technology.jpg';

const CorporateTechnology = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Award, value: '46', label: 'Patents', description: 'USA, Taiwan, PRC' },
    { icon: Globe, value: '2016', label: 'IPO Year', description: 'HK GEM Board' },
    { icon: TrendingUp, value: '8231.HK', label: 'Stock Code', description: 'PFC Device' },
    { icon: Zap, value: 'R&D', label: 'Innovation', description: 'In-house Team' },
  ];

  return (
    <div>
      <HeroSection
        title={t('technology.title')}
        subtitle="Semiconductor Business & Advanced R&D"
        backgroundImage={heroTechnology}
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          <SectionTitle 
            title={t('technology.semiconductor')}
            subtitle="PFC is listed on Hong Kong GEM board with stock code 8231.HK"
          />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="card-corporate p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{feature.value}</div>
                <h3 className="font-semibold text-foreground mb-1">{feature.label}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="card-corporate p-8 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Cpu className="h-6 w-6 text-primary" />
                Power Discrete Semiconductors
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PFC manufactures and sells power discrete semiconductors under its own 'PFC' brand into the PRC, Taiwan and other Asian regions markets. PFC's power discrete semiconductors mainly comprise Schottky diodes, a type of rectifier, which are packaged in a variety of package types.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In 2015, the Group completed the development of its first MOSFET product model, a type of transistor. PFC's MOSFET is currently at the stage of product portfolio establishment, and the Group will continue its research and development effort to develop more product models with different specifications.
              </p>
            </div>

            <div className="card-corporate p-8 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Applications</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Group's power discrete semiconductors are used as rectifiers in the power supply units of a variety of electronic applications ranging from consumer electronic devices, such as mobile phones, notebook computers and LED televisions, to automotive and solar cells. They achieve reduction in energy loss over power supply, thereby enhancing the energy efficiency of the electronic applications.
              </p>
            </div>

            <div className="card-corporate p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Research & Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                PFC maintains its own research and development team in Taiwan, with a primary focus on improvement of product performance, new product and technology development. PFC's power discrete semiconductors utilised its own patented device structure and manufacturing method, developed by PFC's in-house research and development team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTechnology;

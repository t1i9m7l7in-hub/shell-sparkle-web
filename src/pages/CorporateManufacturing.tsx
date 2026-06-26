import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Factory, Cpu } from 'lucide-react';
import heroManufacturing from '@/assets/hero-manufacturing.jpg';

const CorporateManufacturing = () => {
  const { t } = useLanguage();


  return (
    <div>
      <HeroSection
        title={t('manufacturing.title')}
        subtitle="Our Heritage & Global Legacy"
        backgroundImage={heroManufacturing}
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          <div className="max-w-4xl mx-auto mb-16">
            <SectionTitle
              title="Manufacturing Excellence"
              subtitle="Our Heritage & Global Legacy"
            />

            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Founded in the 1950s, SMC began with a bold vision: to redefine home comfort. Starting as a pioneer in Hong Kong's electric fan industry, we proudly became the region's very first manufacturer to export premium ceiling fans to the global market under our signature "SMC" brand. For over seven decades, we have evolved from a visionary regional pioneer into a powerhouse of advanced OEM and Electronic Manufacturing Services (EMS). Today, SMC stands as a trusted global benchmark for manufacturing excellence, combining deep heritage with cutting-edge innovation.
            </p>
          </div>


          {/* Business Groups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-corporate p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Electric Tools & Fans</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reflecting our robust corporate growth, this core business division was officially regularized under SMC Electric Limited, which successfully listed on the Main Board of the Stock Exchange of Hong Kong in 2020 (Stock Code: 2381.HK). Backed by public-company governance and substantial financial transparency, our manufacturing ecosystem delivers versatile products split into two core business streams:
              </p>
              <ul className="text-muted-foreground leading-relaxed mb-4 space-y-2 list-disc pl-5">
                <li>
                  <span className="font-semibold text-foreground">OEM/Contract Manufacturing:</span> We co-design and manufacture high-performance, rechargeable electric tools for premier international brands—including industrial cordless fans, heavy-duty work lights, and high-efficiency vacuum cleaners.
                </li>
                <li>
                  <span className="font-semibold text-foreground">The "SMC" Brand Portfolio:</span> We continue to lead the domestic and international ventilation markets with our line of high-durability ceiling fans, wall-mounted fans, pedestal stand fans, and orbital fans.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                To know more:{' '}
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
                <h3 className="text-xl font-bold text-foreground">Optics & Imaging Components</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Leveraging decades of specialized technical expertise and high-precision manufacturing, SMC is the partner of choice for the world's leading technology brands. We engineer and manufacture complex optics and imaging components that power global industries. Our core capabilities include:
              </p>
              <ul className="text-muted-foreground leading-relaxed mb-4 space-y-2 list-disc pl-5">
                <li>High-Performance Fusers</li>
                <li>Precision Laser Scanning Units (LSU)</li>
                <li>Advanced Paper Handling Options</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                With SMC, global brands gain a competitive edge through flawless execution, rigorous quality control, and scalable production.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateManufacturing;

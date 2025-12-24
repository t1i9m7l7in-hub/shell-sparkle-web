import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import GroupCompanies from '@/components/ui/GroupCompanies';
import { Button } from '@/components/ui/button';
import { ArrowRight, Factory, Cpu, Building2, TrendingUp } from 'lucide-react';
import heroManufacturing from '@/assets/hero-manufacturing.jpg';

const Index = () => {
  const { t } = useLanguage();

  const businessAreas = [
    {
      icon: Factory,
      title: t('home.manufacturing'),
      description: t('home.manufacturing.desc'),
      link: '/corporate/manufacturing',
      color: 'from-primary/20 to-primary/5',
    },
    {
      icon: Cpu,
      title: t('home.technology'),
      description: t('home.technology.desc'),
      link: '/corporate/technology',
      color: 'from-accent/20 to-accent/5',
    },
    {
      icon: Building2,
      title: t('home.investments'),
      description: t('home.investments.desc'),
      link: '/corporate/investments',
      color: 'from-corporate-gold/20 to-corporate-gold/5',
    },
  ];

  const stats = [
    { value: '1950s', label: 'Since', description: 'Decades of Excellence' },
    { value: '6M+', label: 'Units', description: 'Annual Capacity' },
    { value: '46', label: 'Patents', description: 'Registered Worldwide' },
    { value: '800+', label: 'Taxis', description: 'Fleet Operation' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage={heroManufacturing}
        size="lg"
      >
        <Link to="/corporate/overview">
          <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </HeroSection>

      {/* Welcome Section */}
      <section className="py-24 bg-background">
        <div className="container-corporate">
          <SectionTitle
            title={t('home.welcome')}
            subtitle={t('home.intro')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {businessAreas.map((area, index) => (
              <Link
                key={area.title}
                to={area.link}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-corporate h-full p-8 transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-sm bg-gradient-to-br ${area.color} flex items-center justify-center mb-6`}>
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-medium">
                    <span className="group-hover:mr-2 transition-all">{t('hero.cta')}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container-corporate">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
                <div className="text-primary-foreground/60 text-sm mt-1">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-secondary">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('home.history')}
              </h2>
              <div className="w-16 h-1 bg-primary mb-8" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('home.history.desc')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The Group established the microwave ovens business in mid 1980's and quickly became the best seller in the China market. Such outstanding success attracted the leading home appliance company, Whirlpool Corporation to joint venture with SMC.
              </p>
              <Link to="/corporate/overview">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 rounded-sm overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="h-24 w-24 text-primary/30" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-sm flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="text-3xl font-bold">60+</div>
                    <div className="text-sm">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-corporate-navy">
        <div className="container-corporate text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Discover Our Global Presence
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            The Group's global business expansions are supported by the long-term partnership with reputable global companies.
          </p>
          <Link to="/directory">
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-corporate-navy">
              View Company Directory
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Group Companies Section */}
      <GroupCompanies />
    </div>
  );
};

export default Index;

import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      title: 'SMC Announces Strong Q3 Results',
      excerpt: 'Shell Electric Holdings Limited reports continued growth in manufacturing and technology segments with improved margins.',
      date: 'December 15, 2024',
      category: 'Financial',
    },
    {
      title: 'PFC Device Expands Product Portfolio',
      excerpt: 'New MOSFET product models launched, strengthening the semiconductor business offerings for automotive applications.',
      date: 'November 28, 2024',
      category: 'Technology',
    },
    {
      title: 'Environmental Initiative for Taxi Fleet',
      excerpt: 'Guangzhou SMC Car Rental announces complete transition to eco-friendly engines across entire fleet.',
      date: 'October 15, 2024',
      category: 'Sustainability',
    },
    {
      title: 'Strategic Partnership Announcement',
      excerpt: 'SMC enters new strategic collaboration with leading global home appliance manufacturer.',
      date: 'September 20, 2024',
      category: 'Corporate',
    },
    {
      title: 'Annual General Meeting Highlights',
      excerpt: 'Key resolutions passed at AGM including dividend declaration and board appointments.',
      date: 'August 10, 2024',
      category: 'Governance',
    },
    {
      title: 'Manufacturing Excellence Award',
      excerpt: 'SMC receives industry recognition for quality and innovation in consumer electronics manufacturing.',
      date: 'July 5, 2024',
      category: 'Awards',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Financial: 'bg-primary/10 text-primary',
      Technology: 'bg-accent/10 text-accent',
      Sustainability: 'bg-green-100 text-green-700',
      Corporate: 'bg-secondary text-secondary-foreground',
      Governance: 'bg-corporate-gold/10 text-corporate-gold',
      Awards: 'bg-amber-100 text-amber-700',
    };
    return colors[category] || 'bg-secondary text-secondary-foreground';
  };

  return (
    <div>
      <HeroSection
        title={t('news.title')}
        subtitle="Latest Updates & Announcements"
        size="sm"
      />

      <section className="py-24 bg-background">
        <div className="container-corporate">
          <SectionTitle 
            title={t('news.latest')}
            subtitle="Stay informed about SMC's latest developments"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article key={index} className="card-corporate overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Newspaper className="h-5 w-5 mr-2" />
              {t('news.archive')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

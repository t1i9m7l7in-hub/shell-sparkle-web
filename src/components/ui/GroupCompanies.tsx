import smcFansLogo from '@/assets/smcfans-logo.jpg';
import pfcLogo from '@/assets/pfc-logo.jpg';
import smcMultimediaLogo from '@/assets/smc-multimedia-logo.jpg';

const GroupCompanies = () => {
  const companies = [
    {
      logo: smcFansLogo,
      alt: 'SMC Fans',
      link: 'https://www.smcfans.com/',
    },
    {
      logo: pfcLogo,
      alt: 'PFC Device Inc.',
      link: 'https://www.pfc-device.com/',
    },
    {
      logo: smcMultimediaLogo,
      alt: 'SMC Multi-Media',
      link: 'http://www.smc-multimedia.com/',
    },
  ];

  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="container-corporate">
        <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
          Group Companies
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {companies.map((company) => (
            <a
              key={company.alt}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src={company.logo}
                alt={company.alt}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;

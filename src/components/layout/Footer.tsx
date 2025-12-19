import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-corporate-navy text-primary-foreground">
      <div className="container-corporate py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <svg viewBox="0 0 180 50" className="h-10 w-auto">
                <defs>
                  <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(210, 80%, 55%)" />
                    <stop offset="100%" stopColor="hsl(210, 70%, 65%)" />
                  </linearGradient>
                </defs>
                <path
                  d="M10 40 Q25 5 40 40 Q25 35 10 40 Z"
                  fill="url(#logoGradientFooter)"
                />
                <path
                  d="M15 38 Q25 15 35 38"
                  fill="none"
                  stroke="hsl(0, 0%, 100%)"
                  strokeWidth="1.5"
                />
                <path
                  d="M18 36 Q25 20 32 36"
                  fill="none"
                  stroke="hsl(0, 0%, 100%)"
                  strokeWidth="1"
                />
                <text x="50" y="35" fill="hsl(210, 80%, 65%)" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '24px' }}>
                  SMC
                </text>
                <text x="50" y="47" fill="hsl(210, 15%, 65%)" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '8px', letterSpacing: '1px' }}>
                  SHELL ELECTRIC
                </text>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A leading manufacturer in consumer electrical appliances since 1950s.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('nav.corporate')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/corporate/overview" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  {t('nav.overview')}
                </Link>
              </li>
              <li>
                <Link to="/corporate/vision" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  {t('nav.vision')}
                </Link>
              </li>
              <li>
                <Link to="/corporate/manufacturing" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  {t('nav.manufacturing')}
                </Link>
              </li>
              <li>
                <Link to="/corporate/technology" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  {t('nav.technology')}
                </Link>
              </li>
              <li>
                <Link to="/corporate/investments" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  {t('nav.investments')}
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/financial" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  {t('nav.financial')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link to="/directory" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  {t('nav.directory')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-corporate-blue-light flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Shell Industrial Building, Hong Kong
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-corporate-blue-light flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+852 2345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-corporate-blue-light flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@smc.com.hk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted/20">
        <div className="container-corporate py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Shell Electric Holdings Limited. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-6">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

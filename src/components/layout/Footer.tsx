import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import smcLogo from '@/assets/smc-logo.png';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-800">
      <div className="container-corporate py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src={smcLogo} 
                alt="SMC - Since 1952" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              A leading manufacturer in consumer electrical appliances since 1950s.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-900">{t('nav.corporate')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/corporate/overview" className="text-slate-600 hover:text-corporate-blue transition-colors">
                  {t('nav.overview')}
                </Link>
              </li>
              <li>
                <Link to="/corporate/vision" className="text-slate-600 hover:text-corporate-blue transition-colors">
                  {t('nav.vision')}
                </Link>
              </li>
              <li>
                <Link to="/corporate/manufacturing" className="text-slate-600 hover:text-corporate-blue transition-colors">
                  {t('nav.manufacturing')}
                </Link>
              </li>
              <li>
                <Link to="/corporate/technology" className="text-slate-600 hover:text-corporate-blue transition-colors">
                  {t('nav.technology')}
                </Link>
              </li>
              <li>
                <Link to="/corporate/investments" className="text-slate-600 hover:text-corporate-blue transition-colors">
                  {t('nav.investments')}
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-900">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/financial" className="text-slate-600 hover:text-corporate-blue transition-colors">
                  {t('nav.financial')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-slate-600 hover:text-corporate-blue transition-colors">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link to="/directory" className="text-slate-600 hover:text-corporate-blue transition-colors">
                  {t('nav.directory')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-900">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-700 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600">
                  1/F, Shell Industrial Building, 12 Lee Chung Street,<br />
                  Chai Wan Industrial District, Hong Kong.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-slate-700 flex-shrink-0" />
                <span className="text-sm text-slate-600">+852 2558 0181</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-700 flex-shrink-0" />
                <span className="text-sm text-slate-600">info@smc.com.hk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="container-corporate py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              © {currentYear} Shell Electric Holdings Limited. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-6">
              <Link to="#" className="text-sm text-slate-600 hover:text-corporate-blue transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="#" className="text-sm text-slate-600 hover:text-corporate-blue transition-colors">
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

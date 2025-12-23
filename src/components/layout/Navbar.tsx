import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import smcLogo from '@/assets/smc-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [corporateOpen, setCorporateOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const languageLabels: Record<Language, string> = {
    'en': 'EN',
    'zh-TW': '繁',
    'zh-CN': '简',
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    {
      path: '/corporate',
      label: t('nav.corporate'),
      children: [
        { path: '/corporate/overview', label: t('nav.overview') },
        { path: '/corporate/vision', label: t('nav.vision') },
        { path: '/corporate/manufacturing', label: t('nav.manufacturing') },
        { path: '/corporate/technology', label: t('nav.technology') },
        { path: '/corporate/investments', label: t('nav.investments') },
      ],
    },
    { path: '/financial', label: t('nav.financial') },
    { path: '/news', label: t('nav.news') },
    { path: '/directory', label: t('nav.directory') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-corporate">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={smcLogo} 
              alt="SMC - Since 1952" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.path} className="relative group">
                  <button
                    className={cn(
                      "nav-link-corporate flex items-center gap-1 py-2 text-foreground hover:text-primary",
                      location.pathname.startsWith('/corporate') && "text-primary"
                    )}
                    onMouseEnter={() => setCorporateOpen(true)}
                    onMouseLeave={() => setCorporateOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-sm shadow-corporate-lg opacity-0 invisible transition-all duration-200",
                      "group-hover:opacity-100 group-hover:visible"
                    )}
                    onMouseEnter={() => setCorporateOpen(true)}
                    onMouseLeave={() => setCorporateOpen(false)}
                  >
                    <div className="py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={cn(
                            "block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors",
                            isActive(child.path) && "bg-secondary text-primary"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "nav-link-corporate py-2 text-foreground hover:text-primary",
                    isActive(link.path) && "text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
                {languageLabels[language]}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('zh-TW')} className="cursor-pointer">
                  繁體中文
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('zh-CN')} className="cursor-pointer">
                  简体中文
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-screen pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.path}>
                  <div className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-6 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors",
                        isActive(child.path) && "text-primary bg-secondary"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors",
                    isActive(link.path) && "text-primary bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {/* Mobile Language Selector */}
            <div className="px-4 py-2 mt-4 border-t border-border">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Language
              </div>
              <div className="flex gap-2">
                {(['en', 'zh-TW', 'zh-CN'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "px-3 py-1 text-sm rounded-sm transition-colors",
                      language === lang
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-primary/10"
                    )}
                  >
                    {lang === 'en' ? 'EN' : lang === 'zh-TW' ? '繁體' : '简体'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  size = 'md',
  children,
  className,
}: HeroSectionProps) => {
  const sizeClasses = {
    sm: 'min-h-[40vh]',
    md: 'min-h-[60vh]',
    lg: 'min-h-[80vh]',
  };

  return (
    <section
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
        sizeClasses[size],
        className
      )}
    >
      {/* Background */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue-dark via-primary to-corporate-blue-light" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-corporate-navy/70 via-corporate-navy/60 to-corporate-navy/80" />

      {/* Content */}
      <div className="relative z-10 container-corporate text-center text-primary-foreground px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {children}
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

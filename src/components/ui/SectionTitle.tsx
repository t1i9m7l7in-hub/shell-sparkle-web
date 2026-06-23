import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { renderShell } from '@/components/ShellChar';

interface SectionTitleProps {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

const SectionTitle = ({ title, subtitle, align = 'center', className }: SectionTitleProps) => {
  return (
    <div className={cn('mb-12', align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {renderShell(title)}
      </h2>
      <div className={cn('w-16 h-1 bg-primary mb-6', align === 'center' ? 'mx-auto' : '')} />
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {renderShell(subtitle)}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

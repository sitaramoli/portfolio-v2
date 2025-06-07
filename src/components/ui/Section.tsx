import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function Section({ 
  id, 
  className, 
  children, 
  title, 
  subtitle,
  titleClassName,
  subtitleClassName 
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <Container>
        {title && (
          <h2 className={cn(
            "font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-primary",
            titleClassName
          )}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className={cn(
            "text-lg md:text-xl text-muted-foreground mb-10 md:mb-16 text-center max-w-3xl mx-auto font-body",
            subtitleClassName
          )}>
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}

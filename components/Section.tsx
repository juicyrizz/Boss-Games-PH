
import React, { forwardRef } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, className = '', children }, ref) => {
  return (
    <section id={id} ref={ref} className={`py-20 sm:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
});

export default Section;

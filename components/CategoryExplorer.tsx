import React from 'react';
import { ScrollFade } from './ScrollFade';

const CategoryBox: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`rounded-lg lg:rounded-none border-2 border-dashed border-neutral-200 flex items-center justify-center text-neutral-400 text-sm ${className}`}
  >
    Coming Soon
  </div>
);

export const CategoryExplorer: React.FC = () => {
  return (
    <section className="py-16 lg:py-24">
      {/* Section Header - stays centered */}
      <div className="container-custom">
        <ScrollFade>
          <div className="text-center mb-12">
            <p className="text-brand-coral font-medium uppercase tracking-widest text-sm mb-2">
              Browse
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-black font-heading">
              Explore Top Products by Category
            </h2>
          </div>
        </ScrollFade>
      </div>

      <ScrollFade delay={150}>
        {/* Desktop layout: 5 cols, 2 rows (tall box left + 4 per row) */}
        <div className="hidden lg:grid grid-cols-5 grid-rows-2 gap-4 lg:gap-6 px-0">
          {/* Tall box on the left spanning both rows */}
          <CategoryBox className="row-span-2 min-h-[300px]" />

          {/* Top row - 4 boxes */}
          {Array.from({ length: 4 }).map((_, i) => (
            <CategoryBox key={`dt-${i}`} className="aspect-4/3" />
          ))}

          {/* Bottom row - 4 boxes */}
          {Array.from({ length: 4 }).map((_, i) => (
            <CategoryBox key={`db-${i}`} className="aspect-4/3" />
          ))}
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden px-3 space-y-3">
          {/* Top section: tall box (left) + 2 stacked boxes (right) */}
          <div className="grid grid-cols-2 gap-3">
            {/* Tall box spanning 2 rows */}
            <CategoryBox className="row-span-2 min-h-[200px]" />
            {/* Two boxes stacked on the right */}
            <CategoryBox className="aspect-4/3" />
            <CategoryBox className="aspect-4/3" />
          </div>

          {/* Remaining 6 boxes in 2-column grid */}
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <CategoryBox key={`mob-${i}`} className="aspect-4/3" />
            ))}
          </div>
        </div>
      </ScrollFade>
    </section>
  );
};

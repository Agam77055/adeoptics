import React from 'react';
import { ScrollFade } from './ScrollFade';

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

      {/* Grid - full width, edge to edge */}
      <ScrollFade delay={150}>
        <div className="grid grid-cols-5 grid-rows-2 gap-4 lg:gap-6 px-0">
          {/* Tall box on the left spanning both rows */}
          <div className="row-span-2 rounded-none border-2 border-dashed border-neutral-200 flex items-center justify-center text-neutral-400 text-sm min-h-[300px]">
            Coming Soon
          </div>

          {/* Top row - 4 boxes */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`top-${i}`}
              className="rounded-none border-2 border-dashed border-neutral-200 flex items-center justify-center text-neutral-400 text-sm aspect-[4/3]"
            >
              Coming Soon
            </div>
          ))}

          {/* Bottom row - 4 boxes */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`bottom-${i}`}
              className="rounded-none border-2 border-dashed border-neutral-200 flex items-center justify-center text-neutral-400 text-sm aspect-[4/3]"
            >
              Coming Soon
            </div>
          ))}
        </div>
      </ScrollFade>
    </section>
  );
};

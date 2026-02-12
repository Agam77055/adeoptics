import React from 'react';
import { FeaturedProductCard } from './ui/FeaturedProductCard';
import { ScrollFade } from './ScrollFade';
import { featuredProducts } from '@/lib/data/products';

export const FeaturedProducts: React.FC = () => {
  const displayProducts = featuredProducts.slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-white">
      {/* Section Header - stays centered */}
      <div className="container-custom">
        <ScrollFade>
          <div className="text-center mb-12">
            <p className="text-brand-coral font-medium uppercase tracking-widest text-sm mb-2">
              Our Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-black font-heading">
              Featured Products
            </h2>
          </div>
        </ScrollFade>
      </div>

      {/* 2x2 Product Grid - full width, edge to edge */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 px-0">
        {displayProducts.map((product, index) => (
          <ScrollFade key={product.id} delay={index * 100}>
            <FeaturedProductCard product={product} />
          </ScrollFade>
        ))}
      </div>
    </section>
  );
};

import React from 'react';
import { Product } from '@/lib/types';

interface FeaturedProductCardProps {
  product: Product;
}

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-neutral-100 rounded-xl lg:rounded-none overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer h-full">
      {/* Product info */}
      <div className="p-3 md:p-5">
        {/* Product name */}
        <h3 className="text-sm md:text-xl font-bold text-center text-neutral-black font-heading mb-0.5 group-hover:text-brand-coral transition-colors duration-200">
          {product.name}
        </h3>

        {/* Model number */}
        <p className="text-xs md:text-sm text-center text-neutral-600 mb-2 md:mb-4">{product.model}</p>

        {/* Buy Now button */}
        <button className="w-full py-1.5 md:py-2.5 px-0 text-black text-xs md:text-sm group-hover:text-brand-coral transition-colors duration-200 font-semibold cursor-pointer">
          Buy Now
        </button>
      </div>

      {/* Image area */}
      <div className="relative h-36 md:h-80 bg-neutral-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-3">
          <div className="text-center">
            <svg
              className="w-20 h-20 mx-auto text-neutral-200 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-neutral-400 text-sm font-medium">{product.model}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

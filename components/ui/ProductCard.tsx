import React from 'react';
import { Product } from '@/lib/types';

export interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
      {/* Product Image Placeholder */}
      <div className="relative aspect-square bg-neutral-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-16 h-16 mx-auto text-neutral-200 mb-2"
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
            <span className="text-neutral-600 text-xs">{product.model}</span>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-coral px-4 py-2 rounded-md">
            View Details
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category Badge */}
        <span className="inline-block px-2 py-0.5 text-xs font-medium text-brand-coral bg-brand-coral/10 rounded mb-2 uppercase tracking-wide">
          {product.category.replace(/-/g, ' ')}
        </span>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-neutral-black mb-1 group-hover:text-brand-coral transition-colors">
          {product.name}
        </h3>

        {/* Model Number */}
        <p className="text-sm text-neutral-600 mb-3">{product.model}</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          {product.salePrice ? (
            <>
              <span className="text-xl font-bold text-brand-coral">
                {formatPrice(product.salePrice)}
              </span>
              <span className="text-sm text-neutral-600 line-through">
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-neutral-black">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {!product.inStock && (
          <p className="text-sm text-red-600 mt-2 font-medium">Out of Stock</p>
        )}
      </div>
    </div>
  );
};

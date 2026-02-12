import React from 'react';
import { ScrollFade } from './ScrollFade';

interface Review {
  id: number;
  name: string;
  role: string;
  initials: string;
  image: string;
  productName: string;
  rating: number;
  excerpt: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'James Mitchell',
    role: 'Competition Shooter',
    initials: 'JM',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
    productName: 'Nuwa Red Dot Sight',
    rating: 5,
    excerpt:
      'Incredible clarity and build quality. The unlimited eye relief makes target acquisition lightning fast.',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Law Enforcement',
    initials: 'SC',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&crop=face',
    productName: 'Tactical Riflescope 4x',
    rating: 5,
    excerpt:
      'We outfitted our entire team with these scopes. Rock-solid zero and crystal clear glass even in low light.',
  },
  {
    id: 3,
    name: 'Robert Hayes',
    role: 'Hunting Guide',
    initials: 'RH',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face',
    productName: 'Long Range Scope 6x',
    rating: 4,
    excerpt:
      'ED glass makes a real difference at distance. I\'ve used this through two full seasons without a single issue.',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Firearms Instructor',
    initials: 'DP',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face',
    productName: 'Green Laser Sight',
    rating: 5,
    excerpt:
      'The green laser is visible in daylight conditions. Quick-release mount is a game changer for training setups.',
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-brand-coral' : 'text-neutral-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const Recommendations: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      {/* Section Header - stays centered */}
      <div className="container-custom">
        <ScrollFade>
          <div className="text-center mb-12">
            <p className="text-brand-coral font-medium uppercase tracking-widest text-sm mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-black font-heading">
              Highly Recommended By
            </h2>
          </div>
        </ScrollFade>
      </div>

      {/* Grid - padded on mobile, edge to edge on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-3 md:px-20">
        {reviews.map((review, index) => (
          <ScrollFade key={review.id} delay={index * 100}>
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-row h-full">
              {/* Full-height image */}
              <div className="w-24 md:w-40 shrink-0 relative">
                <img
                  src={review.image}
                  alt={review.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Fallback initials overlay (hidden when image loads) */}
                <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-lg font-semibold text-neutral-500 -z-10">
                  {review.initials}
                </div>
              </div>

              {/* Content */}
              <div className="px-3 py-4 md:py-20 flex flex-col justify-between flex-1 min-w-0">
                <div>
                  {/* Name + role */}
                  <p className="font-semibold text-neutral-black text-sm md:text-base">{review.name}</p>
                  <p className="text-xs md:text-sm text-neutral-600 mb-2 md:mb-3">{review.role}</p>

                  {/* Review text */}
                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed line-clamp-3 md:line-clamp-4">
                    {review.excerpt}
                  </p>
                </div>

                {/* Product purchased */}
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-neutral-200 flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-neutral-200 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs text-neutral-600 font-medium truncate">{review.productName}</span>
                </div>
              </div>
            </div>
          </ScrollFade>
        ))}
      </div>
    </section>
  );
};

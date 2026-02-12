'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './ui/Button';

interface Slide {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  highlight: string;
  description: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/hero/slide-1.jpg',
    subtitle: 'Advanced Optics Technology',
    title: 'Precision Optics',
    highlight: 'for Every Mission',
    description: 'Superior clarity, unmatched durability, and trusted by professionals worldwide.',
    link: '/products',
  },
  {
    id: 2,
    image: '/images/hero/slide-2.jpg',
    subtitle: 'New Arrivals',
    title: 'Nuwa Red Dot',
    highlight: 'RD3-021 Series',
    description: 'Ultra-clear glass optics with unlimited eye relief. Built for the toughest conditions.',
    link: '/products/red-dots',
  },
  {
    id: 3,
    image: '/images/hero/slide-3.jpg',
    subtitle: 'Professional Grade',
    title: 'Tactical Riflescopes',
    highlight: 'Long Range Precision',
    description: 'First focal plane reticles with ED glass elements for unmatched clarity at distance.',
    link: '/products/riflescopes',
  },
  {
    id: 4,
    image: '/images/hero/slide-4.jpg',
    subtitle: 'Rapid Target Acquisition',
    title: 'Laser Sights',
    highlight: 'Green & Red Lasers',
    description: 'High-visibility lasers with quick-release mounts for any platform.',
    link: '/products/laser-sights',
  },
  {
    id: 5,
    image: '/images/hero/slide-5.jpg',
    subtitle: 'Limited Time Offer',
    title: 'Spring Sale',
    highlight: 'Up to 30% Off',
    description: 'Save big on select optics and accessories. While supplies last.',
    link: '/products',
  },
];

// Distinct gradient backgrounds per slide since we're using placeholders
const slideGradients = [
  'from-neutral-900 via-neutral-black to-neutral-900',
  'from-slate-900 via-slate-800 to-slate-900',
  'from-zinc-900 via-zinc-800 to-zinc-900',
  'from-stone-900 via-stone-800 to-stone-900',
  'from-gray-900 via-gray-800 to-gray-900',
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [current, isTransitioning],
  );

  const prev = useCallback(() => {
    goTo(current === 0 ? slides.length - 1 : current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo(current === slides.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[700px] md:h-[800px] lg:h-[1300px] overflow-hidden select-none -mt-12">
      {/* Slide backgrounds */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-br ${slideGradients[i]} ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_25%_25%,_rgba(255,38,38,0.15)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <a href={slide.link} className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer">
        <div
          key={current}
          className="container-custom text-center text-white animate-fade-in"
        >
          <p className="text-brand-coral font-medium uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4">
            {slide.subtitle}
          </p>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            {slide.title}
            <br />
            <span className="text-brand-coral">{slide.highlight}</span>
          </h1>
          <p className="text-base md:text-2xl mb-6 md:mb-10 text-neutral-200 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            {slide.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="md">
              Shop Now
            </Button>
            <Button
              variant="outline"
              size="md"
              className="border-white text-white hover:bg-white hover:text-neutral-black hover:border-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </a>

      {/* Left arrow - hidden on mobile */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm items-center justify-center transition-all duration-200 text-white cursor-pointer"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right arrow - hidden on mobile */}
      <button
        onClick={next}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm items-center justify-center transition-all duration-200 text-white cursor-pointer"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator bars */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? 'w-10 bg-brand-coral'
                : 'w-6 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom gradient fade to white */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-gray-600 to-transparent z-12" /> */}
    </section>
  );
};

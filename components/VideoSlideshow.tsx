'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ScrollFade } from './ScrollFade';

interface VideoSlide {
  id: number;
  title: string;
  subtitle: string;
  gradient: string;
}

const videoSlides: VideoSlide[] = [
  {
    id: 1,
    title: 'Precision in Action',
    subtitle: 'See how ADEOptics performs under real-world conditions',
    gradient: 'from-neutral-900 via-neutral-800 to-neutral-900',
  },
  {
    id: 2,
    title: 'Built for Professionals',
    subtitle: 'Engineering excellence meets field-tested durability',
    gradient: 'from-slate-900 via-slate-800 to-slate-900',
  },
];

const AUTO_ADVANCE_MS = 8000;

export const VideoSlideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setProgress(0);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [current, isTransitioning],
  );

  const prev = useCallback(() => {
    goTo(current === 0 ? videoSlides.length - 1 : current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo(current === videoSlides.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [next]);

  // // Progress bar animation
  // useEffect(() => {
  //   setProgress(0);
  //   const frame = requestAnimationFrame(() => setProgress(100));
  //   return () => cancelAnimationFrame(frame);
  // }, [current]);

  const slide = videoSlides[current];

  return (
    <section className="w-screen py-6 lg:py-1">
      <div className="px-0">
        {/* Video area */}
        <div className="relative aspect-video overflow-hidden shadow-card-hover w-screen">
            {/* Slide backgrounds */}
            {videoSlides.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-br ${s.gradient} ${
                  i === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {/* Play button overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-all duration-300 cursor-pointer group">
                <svg
                  className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Title + subtitle overlay at bottom */}
            <div
              key={current}
              className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent animate-fade-in"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-2">
                {slide.title}
              </h3>
              <p className="text-neutral-200 text-base md:text-lg">
                {slide.subtitle}
              </p>
            </div>

            {/* Left arrow */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all duration-200 text-white cursor-pointer"
              aria-label="Previous video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all duration-200 text-white cursor-pointer"
              aria-label="Next video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        {/* Progress bars */}
        <div className="flex gap-3 mt-4 justify-center container-custom bg-gray-100">
          {videoSlides.map((_, i) => (
            <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? 'w-10 bg-brand-coral'
                : 'w-6 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

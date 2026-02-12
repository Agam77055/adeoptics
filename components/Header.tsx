'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { mainNavigation } from '@/lib/data/navigation';

export const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isHovered || scrolled ? 'bg-white shadow-card' : 'bg-transparent'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="flex justify-between h-12 px-4 md:px-35">
          <div className="flex justify-between items-center w-full">
            {/* Hamburger button - mobile only */}
            <button
              className={`md:hidden p-2 transition-colors ${isHovered || scrolled ? 'text-neutral-black' : 'text-white'}`}
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center transition-colors duration-300">
              <span className={`text-2xl font-bold transition-colors duration-300 ${isHovered || scrolled ? 'text-neutral-black' : 'text-white'}`}>
                ADE<span className="text-brand-coral">Optics</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 w-full px-15">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium text-sm uppercase tracking-wide relative pb-1 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-coral after:transition-all after:duration-300 hover:after:w-full ${
                    isHovered || scrolled ? 'text-neutral-black' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right side icons */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                className={`p-2 rounded-full transition-colors ${isHovered || scrolled ? 'text-neutral-black hover:bg-neutral-100' : 'text-white hover:bg-white/10'}`}
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button
                className={`p-2 rounded-full transition-colors ${isHovered || scrolled ? 'text-neutral-black hover:bg-neutral-100' : 'text-white hover:bg-white/10'}`}
                aria-label="Account"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
              <button
                className={`p-2 rounded-full transition-colors relative ${isHovered || scrolled ? 'text-neutral-black hover:bg-neutral-100' : 'text-white hover:bg-white/10'}`}
                aria-label="Cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-coral text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </button>
            </div>

            {/* Mobile cart icon (right side) */}
            <button
              className={`md:hidden p-2 transition-colors relative ${isHovered || scrolled ? 'text-neutral-black' : 'text-white'}`}
              aria-label="Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute top-0 right-0 w-4 h-4 bg-brand-coral text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/50 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-70 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-200">
          <Link href="/" className="flex items-center" onClick={() => setSidebarOpen(false)}>
            <span className="text-2xl font-bold text-neutral-black">
              ADE<span className="text-brand-coral">Optics</span>
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 text-neutral-600 hover:text-neutral-black transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar navigation */}
        <nav className="p-5">
          <ul className="space-y-1">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 px-4 text-neutral-black hover:text-brand-coral hover:bg-neutral-50 rounded-lg transition-colors font-medium text-base"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar footer icons */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-neutral-200">
          <div className="flex items-center gap-4">
            <button className="p-2 text-neutral-600 hover:text-brand-coral transition-colors rounded-full hover:bg-neutral-50" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 text-neutral-600 hover:text-brand-coral transition-colors rounded-full hover:bg-neutral-50" aria-label="Account">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="p-2 text-neutral-600 hover:text-brand-coral transition-colors rounded-full hover:bg-neutral-50 relative" aria-label="Cart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute top-0 right-0 w-4 h-4 bg-brand-coral text-white text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

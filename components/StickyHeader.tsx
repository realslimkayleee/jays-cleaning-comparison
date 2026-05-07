'use client';

import { useState, useEffect } from 'react';
import { config } from '@/lib/concepts';

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 px-6 py-4 flex justify-between items-center ${
        isScrolled ? 'bg-[#FBF7F2] border-b border-black/10' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="flex items-center gap-3 font-sans text-xs tracking-widest uppercase font-medium text-sunday-black">
        <img src="/images/ll.webp" alt="Coffee Nutz Logo" className="h-6 w-auto object-contain" />
        <span className="hidden sm:inline">Website Concepts</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 font-sans text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-medium text-sunday-black">
        <a href="#concept-a" className="hover:opacity-60 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunday-black">Concept 01</a>
        <a href="#concept-b" className="hover:opacity-60 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunday-black">Concept 02</a>
        <a href="#concept-c" className="hover:opacity-60 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunday-black">Concept 03</a>
        <a href="#comparison" className="hover:opacity-60 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunday-black">Comparison</a>
        <a href="#final-thoughts" className="hover:opacity-60 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunday-black">Final Thoughts</a>
      </nav>
      {config.email && (
        <a 
          href={`mailto:${config.email}`}
          className="font-sans text-xs font-medium text-sunday-black hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunday-black focus-visible:ring-offset-4 focus-visible:ring-offset-transparent md:hidden"
        >
          Contact
        </a>
      )}
    </header>
  );
}

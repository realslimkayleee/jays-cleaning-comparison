/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Image from 'next/image';

function SideBySideImage({ 
  src, 
  caption, 
  filename,
  placeholderBg,
  placeholderText
}: { 
  src: string; 
  caption: string;
  filename: string;
  placeholderBg: string;
  placeholderText: string;
}) {
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className={`relative w-full aspect-[9/16] overflow-hidden ${placeholderBg}`}>
        {!error ? (
          <Image
            src={src}
            alt={caption}
            fill
            className="object-cover object-top"
            onError={() => setError(true)}
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <span className={`font-mono text-sm break-all ${placeholderText}`}>
              {filename}
            </span>
          </div>
        )}
      </div>
      <p className="font-sans text-[15px] leading-relaxed text-[#1B1B1B]/80 text-center">
        {caption}
      </p>
    </div>
  );
}

export default function SideBySide() {
  return (
    <section id="comparison" className="w-full bg-[#FBF7F2] px-6 pt-12 pb-4 md:pt-16 md:pb-6 flex flex-col items-center">
      <div className="max-w-[640px] w-full text-center mb-16">
        <h2 className="font-serif text-[36px] md:text-[48px] text-[#1B1B1B] mb-6">
          All three, side by side.
        </h2>
        <p className="font-sans text-[18px] leading-[1.8] text-[#1B1B1B]/80">
          The fastest way to feel the difference is to see them next to each other.<br />
          <span className="inline-block mt-2">Same brand. Same menu. Same <img src="/images/ll.webp" alt="Coffee Nutz Logo" className="h-[1em] w-auto inline-block align-middle -mt-[0.2em]" />.</span><br />
          <span className="inline-block mt-2">Three completely different rooms to walk into.</span>
        </p>
      </div>

      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-8">
          <SideBySideImage 
            src="/images/concept-a/Home.png"
            filename="Home.png"
            caption="Velvet Hour — restrained, theatrical, grown-up."
            placeholderBg="bg-velvet-oxblood"
            placeholderText="text-velvet-brass"
          />
          <SideBySideImage 
            src="/images/concept-b/home.png"
            filename="home.png"
            caption="Field Notes — earthy, documentary, expert."
            placeholderBg="bg-field-forest"
            placeholderText="text-field-terracotta"
          />
          <SideBySideImage 
            src="/images/concept-c/Home.png"
            filename="Home.png"
            caption="Sunday Bright — playful, modern, photogenic."
            placeholderBg="bg-sunday-peach"
            placeholderText="text-sunday-coral"
          />
        </div>
      </div>

      {/* Keep Scrolling Arrow */}
      <div className="mt-16 md:mt-24 animate-bounce opacity-40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1B1B1B]">
          <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

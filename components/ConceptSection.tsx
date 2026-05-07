'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Concept, ConceptImage } from '@/lib/concepts';

function ConceptImageCard({ 
  image, 
  concept 
}: { 
  image: ConceptImage, 
  concept: Concept 
}) {
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className={`relative w-full aspect-[3/4] sm:aspect-square md:aspect-[4/5] lg:aspect-[3/4] overflow-hidden ${concept.colors.placeholderBg}`}>
        {!error ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top"
            onError={() => setError(true)}
            unoptimized // Useful for allowing the fallback to trigger easily without next/image optimization errors when file is missing locally
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <span className={`font-mono text-sm break-all ${concept.colors.placeholderText}`}>
              {image.filename}
            </span>
          </div>
        )}
      </div>
      <p className={`font-sans text-sm ${concept.colors.text} opacity-80`}>
        {image.caption}
      </p>
    </div>
  );
}

export default function ConceptSection({ concept }: { concept: Concept }) {
  return (
    <section id={concept.id} className={`w-full ${concept.colors.bg} ${concept.colors.text} px-6 pt-12 pb-4 md:pt-16 md:pb-6 flex flex-col items-center`}>
      {/* Concept Header */}
      <div className="max-w-[720px] w-full mb-24">
        <p className={`font-sans text-xs tracking-[0.2em] uppercase font-medium ${concept.colors.accent} mb-6`}>
          {concept.eyebrow}
        </p>
        <h2 className="font-serif text-[48px] md:text-[72px] leading-[1.1] tracking-tight mb-8">
          {concept.name}
        </h2>
        <p className={`font-sans text-[18px] md:text-[22px] italic ${concept.colors.secondaryAccent || concept.colors.accent} mb-8`}>
          {concept.tagline}
        </p>
        <p className="font-sans text-[18px] leading-[1.8] opacity-90">
          {concept.rationale}
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="w-full max-w-[1200px] mb-8">
        <h3 className={`font-sans text-xs tracking-[0.2em] uppercase font-medium ${concept.colors.accent} mb-12 text-center`}>
          A LOOK AT THE BUILD
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {concept.images.map((image, index) => (
            <ConceptImageCard key={index} image={image} concept={concept} />
          ))}
        </div>
      </div>

      {/* Pull Quote */}
      {concept.pullQuote && (
        <div className="max-w-[720px] w-full text-center py-12">
          <blockquote className="font-serif text-[28px] md:text-[36px] italic leading-tight">
            {concept.pullQuote}
          </blockquote>
        </div>
      )}

      {/* Keep Scrolling Arrow */}
      <div className="mt-8 animate-bounce opacity-40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

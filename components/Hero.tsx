/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FBF7F2] flex flex-col items-center justify-center min-h-[100svh] px-6 py-24 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-black/40 mb-6">
          A PRIVATE PREVIEW · Prepared by <a href="https://cairnagency.io" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity underline underline-offset-4">Cairn Agency</a>
        </p>
        
        <h1 className="font-serif text-[48px] md:text-[80px] leading-[1.1] tracking-tight text-[#1B1B1B] mb-8">
          Three directions for <img src="/images/ll.webp" alt="Coffee Nutz Logo" className="h-[1em] w-auto inline-block align-middle -mt-[0.1em]" />
        </h1>
        
        <p className="font-sans text-[18px] md:text-[22px] leading-relaxed text-[#1B1B1B]/80 max-w-[640px] mb-8">
          Three website concepts. One coffee shop.<br />
          <span className="inline-block mt-2">Take your time — and pick the one that feels like home.</span>
        </p>
        
        <p className="font-sans text-sm text-black/40">
          Scroll down to explore the possibilities
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

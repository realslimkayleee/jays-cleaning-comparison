import { config } from '@/lib/concepts';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0E0E0E] text-[#F4ECD8] px-6 py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Left Column */}
        <div className="flex flex-col gap-1 font-sans text-sm opacity-90">
          <p>
            Prepared by <a href="https://cairnagency.io" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">Cairn Agency</a>
          </p>
          {config.email && (
            <a href={`mailto:${config.email}`} className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4ECD8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0E0E] inline-block w-fit">
              {config.email}
            </a>
          )}
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-1 font-sans text-sm opacity-90 md:text-center">
          <p>Coffee Nutz — Website Concepts</p>
          <p>Private preview · {config.date}</p>
        </div>

        {/* Right Column */}
        <div className="font-sans text-xs opacity-50 md:text-right max-w-[320px] md:max-w-none md:ml-auto">
          <p>This page is shared privately for review. Please don't share the link without checking in first, and do not use these images or concepts for outside development.</p>
        </div>

      </div>
    </footer>
  );
}

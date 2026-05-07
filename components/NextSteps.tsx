/* eslint-disable @next/next/no-img-element */
export default function NextSteps() {
  return (
    <section id="final-thoughts" className="w-full bg-[#FBF7F2] px-6 pt-12 pb-24 md:pt-16 md:pb-32 flex justify-center">
      <div className="max-w-[720px] w-full">
        <h2 className="font-serif text-[36px] md:text-[48px] text-[#1B1B1B] mb-8">
          What happens next
        </h2>
        
        <div className="font-sans text-[18px] leading-[1.8] text-[#1B1B1B]/80 space-y-6 mb-12">
          <p>
            When you&apos;re ready, reply to my message and we&apos;ll set up a quick call to talk through what&apos;s resonating and where to go from here. If you have a partner, family, or trusted regular whose opinion matters, send them this link too. The password&apos;s the same.
          </p>
        </div>

        <h3 className="font-serif text-[24px] text-[#1B1B1B] mb-6">
          A few things worth asking yourself
        </h3>

        <ul className="font-sans text-[18px] leading-[1.8] text-[#1B1B1B]/80 space-y-4 mb-8 list-none">
          <li>— Which one feels most like the <img src="/images/ll.webp" alt="Coffee Nutz" className="h-[1em] w-auto inline-block align-middle -mt-[0.2em]" /> you want to walk into five years from now?</li>
          <li>— Which one would your most loyal regular recognize immediately?</li>
          <li>— Which one would make a first-time visitor remember the name?</li>
        </ul>

        <p className="font-sans text-[18px] md:text-[20px] font-medium text-[#1B1B1B] mt-12 text-center">
          I am looking forward to hearing from you soon!
        </p>
      </div>
    </section>
  );
}

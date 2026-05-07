/* eslint-disable @next/next/no-img-element */
export default function IntroBlock() {
  return (
    <section className="w-full bg-[#FBF7F2] px-6 pb-24 pt-0 md:pb-32 flex justify-center">
      <div className="max-w-[720px] w-full">
        <div className="font-sans text-[18px] leading-[1.8] text-[#1B1B1B]/80 space-y-6">
          <p>
            What you&apos;re about to see are three intentionally different creative directions — not three versions of the same idea. Each one takes <img src="/images/ll.webp" alt="Coffee Nutz" className="h-[1em] w-auto inline-block align-middle -mt-[0.2em]" /> somewhere distinct:
          </p>
          <ul className="space-y-2 list-none pl-4">
            <li>— one leans into cinematic restraint,</li>
            <li>— one into earthy craft,</li>
            <li>— one into joyful modern energy.</li>
          </ul>
          <p>
            As you explore, look for the direction that feels most like the <img src="/images/ll.webp" alt="Coffee Nutz" className="h-[1em] w-auto inline-block align-middle -mt-[0.2em]" /> you want customers to walk into. Take your time and view all three before forming an opinion.
          </p>
        </div>
      </div>
    </section>
  );
}

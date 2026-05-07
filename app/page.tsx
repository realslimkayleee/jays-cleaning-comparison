import StickyHeader from '@/components/StickyHeader';
import Hero from '@/components/Hero';
import IntroBlock from '@/components/IntroBlock';
import ConceptSection from '@/components/ConceptSection';
import SideBySide from '@/components/SideBySide';
import NextSteps from '@/components/NextSteps';
import Footer from '@/components/Footer';
import { concepts } from '@/lib/concepts';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBF7F2] w-full selection:bg-[#E07856] selection:text-white">
      <StickyHeader />
      <Hero />
      <IntroBlock />
      
      {concepts.map((concept) => (
        <ConceptSection key={concept.id} concept={concept} />
      ))}
      
      <SideBySide />
      <NextSteps />
      <Footer />
    </main>
  );
}

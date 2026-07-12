import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { ImpactStrip } from '@/components/sections/ImpactStrip';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ImpactStrip />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}

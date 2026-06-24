import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Showreel from '@/sections/Showreel';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee
          items={[
            'React',
            'Next.js',
            'Node.js',
            'MongoDB',
            'AI Training',
            'UI / UX',
          ]}
        />
        <About />
        <Skills />
        <Showreel />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

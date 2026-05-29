import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyUsSection from '@/components/WhyUsSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import ProjectsSection from '@/components/ProjectsSection';
import IndustriesSection from '@/components/IndustriesSection';
import ProcessSection from '@/components/ProcessSection';
import GlobalSection from '@/components/GlobalSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%' }}>
      <Navbar />
      <main style={{ overflowX: 'hidden', width: '100%' }}>
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <ServicesSection />
        <ProjectsSection />
        <TechStackSection />
        <IndustriesSection />
        <ProcessSection />
        <GlobalSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

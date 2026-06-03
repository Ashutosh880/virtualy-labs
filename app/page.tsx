import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import WhatWeBuildSection from '@/components/WhatWeBuildSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TechStackSection from '@/components/TechStackSection';
import ProcessSection from '@/components/ProcessSection';
import IndustriesSection from '@/components/IndustriesSection';
import GlobalSection from '@/components/GlobalSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%' }}>
      <Navbar />
      <main style={{ overflowX: 'hidden', width: '100%' }}>
        <HeroSection />
        <TrustedBySection />
        <WhatWeBuildSection />
        <ServicesSection />
        <WhyUsSection />
        <ProjectsSection />
        <TechStackSection />
        <ProcessSection />
        <IndustriesSection />
        <GlobalSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

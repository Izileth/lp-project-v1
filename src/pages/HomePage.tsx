import { useState } from 'react';
import Header from '../components/Header';
import MobileSidebar from '../components/MobileSidebar';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import ProfileSection from '../components/sections/ProfileSection';
import RegistrationSection from '../components/sections/RegistrationSection';
import QuoteSection from '../components/sections/QuoteSection';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <div className="grain-overlay"></div>

      <Header
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        toggleMenu={toggleMenu}
      />

      <MobileSidebar
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        toggleMenu={toggleMenu}
      />

      <main className="pt-20">
        <HeroSection scrollToSection={scrollToSection} />
        <StatsSection />
        <ProfileSection />
        <RegistrationSection />
        <QuoteSection />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default HomePage;

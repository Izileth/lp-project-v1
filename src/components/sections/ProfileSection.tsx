import { motion } from 'framer-motion';
import ObjectivesSection from './ObjectivesSection';
import PortfolioSection from './PortfolioSection';

const ProfileSection = () => (
  <section id="perfil" className="min-h-screen py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"></div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Nosso Perfil</h2>
        <div className="w-24 h-1 bg-white mx-auto"></div>
      </motion.div>

      <ObjectivesSection />
      <PortfolioSection />
    </div>
  </section>
);

export default ProfileSection;

import { motion } from 'framer-motion';
import PromoterForm from '../PromoterForm';
import PartnershipForm from '../PartnershipForm';

const RegistrationSection = () => (
  <section id="cadastro" className="min-h-screen py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900"></div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Junte-se a Nós</h2>
        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Faça parte do nosso time de promotores ou torne-se um parceiro
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <PromoterForm />
        <PartnershipForm />
      </div>
    </div>
  </section>
);

export default RegistrationSection;

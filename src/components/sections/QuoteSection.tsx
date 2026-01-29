import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import QuoteForm from '../QuoteForm';
import { WHATSAPP_NUMBER, WHATSAPP_INITIAL_MESSAGE } from '../../constants';

const QuoteSection = () => (
  <section id="orcamento" className="min-h-screen py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"></div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Solicite um Orçamento</h2>
        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Conte-nos sobre seu projeto e vamos criar algo incrível juntos
        </p>
      </motion.div>

      <QuoteForm />

      <div className="mt-8 pt-8 border-t border-white/20 text-center">
        <p className="text-white/60 mb-4">Ou entre em contato directamente:</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_INITIAL_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white hover:text-white/80 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  </section>
);

export default QuoteSection;

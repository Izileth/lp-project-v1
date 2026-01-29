import { motion } from 'framer-motion';
import VideoBackground from '../VideoBackground'; // Certifique-se de que o caminho está correto

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => (
  <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Adicione seu arquivo de vídeo em src/assets/videos/hero-background.mp4 */}
    <VideoBackground src="https://v1.pinimg.com/videos/mc/720p/87/a1/c0/87a1c04025a916f2adda317239c16c4d.mp4" className="absolute inset-0 z-0" />
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Overlay para escurecer o vídeo e melhorar a leitura */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="container mx-auto px-6 py-20 relative z-20 text-center" // Aumentado z-index para garantir que o conteúdo fique acima do vídeo e overlay
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-6xl md:text-8xl font-bold mb-6 gradient-text leading-tight">
          Transformamos<br />Marcas em<br />Experiências
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light"
      >
        Promotora de ações de marketing, vendas e eventos presenciais
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <motion.button
          onClick={() => scrollToSection('orcamento')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-black font-semibold rounded-none uppercase tracking-wider hover:bg-white/90 transition-all duration-300"
        >
          Solicitar Orçamento
        </motion.button>

        <motion.button
          onClick={() => scrollToSection('perfil')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border border-white text-white font-semibold rounded-none uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
        >
          Conheça Nosso Trabalho
        </motion.button>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;

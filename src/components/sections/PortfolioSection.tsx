import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const imageModules = import.meta.glob('../../assets/images/*.{jpg,jpeg,png,gif,webp}', { eager: true });
const PORTFOLIO_IMAGES = Object.values(imageModules).map((module: any) => module.default);

const PortfolioSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % PORTFOLIO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % PORTFOLIO_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nosso Portfólio</h3>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative aspect-video overflow-hidden border border-white/20">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={PORTFOLIO_IMAGES[currentImage]}
              alt={`Portfolio ${currentImage + 1}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 hover:bg-black/70 transition-all duration-300 border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 hover:bg-black/70 transition-all duration-300 border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {PORTFOLIO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-white w-8' : 'bg-white/30'
                }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioSection;

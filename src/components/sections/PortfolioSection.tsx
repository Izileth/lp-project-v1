import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const imageModules = import.meta.glob('../../assets/images/*.{jpg,jpeg,png,gif,webp}', { eager: true });
const PORTFOLIO_IMAGES = Object.values(imageModules).map((module: any) => module.default);

// Dados de exemplo para cada imagem do portfólio
const portfolioData = PORTFOLIO_IMAGES.map((img, index) => ({
  src: img,
  title: `Projeto ${index + 1}`,
  category: ['Evento', 'Marketing', 'Vendas', 'Ativação'][index % 4],
  description: 'Ação promocional de grande impacto com resultados excepcionais',
}));

const PortfolioSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || isFullscreen) return;
    
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % PORTFOLIO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, isFullscreen]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % PORTFOLIO_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length);
  };

  const currentData = portfolioData[currentImage];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Nosso Portfólio</h3>
        <p className="text-white/60 text-sm uppercase tracking-wider">
          {PORTFOLIO_IMAGES.length} projetos realizados
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Image Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Large Image - 2 columns */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video overflow-hidden border border-white/20 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={PORTFOLIO_IMAGES[currentImage]}
                  alt={currentData.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-3 hover:bg-black/70 transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-3 hover:bg-black/70 transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 hover:bg-black/70 transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 border border-white/20">
                <span className="text-xs uppercase tracking-wider">{currentData.category}</span>
              </div>

              {/* Counter */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 border border-white/20">
                <span className="text-xs font-mono">
                  {String(currentImage + 1).padStart(2, '0')} / {String(PORTFOLIO_IMAGES.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Info Panel - 1 column */}
          <div className="space-y-4">
            <div className="border border-white/20 p-6 h-full flex flex-col justify-between">
              <div>
                <motion.h4
                  key={currentImage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold mb-3"
                >
                  {currentData.title}
                </motion.h4>

                <motion.p
                  key={`desc-${currentImage}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-white/70 text-sm leading-relaxed mb-6"
                >
                  {currentData.description}
                </motion.p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Categoria</span>
                    <span className="font-semibold">{currentData.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Status</span>
                    <span className="text-green-400">Concluído</span>
                  </div>
                </div>
              </div>

              {/* Auto-play Toggle */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="flex items-center justify-between w-full text-sm text-white/60 hover:text-white transition-colors"
                >
                  <span>Reprodução Automática</span>
                  <div className={`w-10 h-5 rounded-full border transition-colors ${isAutoPlay ? 'bg-white/20 border-white/40' : 'border-white/20'}`}>
                    <motion.div
                      className="w-4 h-4 rounded-full bg-white m-0.5"
                      animate={{ x: isAutoPlay ? 16 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {PORTFOLIO_IMAGES.map((img, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative aspect-video overflow-hidden border transition-all duration-300 ${
                currentImage === index
                  ? 'border-white/60 ring-2 ring-white/20'
                  : 'border-white/20 hover:border-white/40'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {currentImage === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 border-2 border-white"
                />
              )}
              <div className={`absolute inset-0 bg-black transition-opacity ${
                currentImage === index ? 'opacity-0' : 'opacity-50 hover:opacity-30'
              }`} />
            </motion.button>
          ))}
        </div>

        {/* Progress Dots (Alternative) */}
        <div className="flex justify-center mt-8 space-x-2">
          {PORTFOLIO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className="group relative"
            >
              <div className={`h-1 transition-all duration-300 ${
                currentImage === index ? 'bg-white w-12' : 'bg-white/30 w-8 group-hover:bg-white/50'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black  flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm p-3 hover:bg-white/20 transition-all duration-300 border border-white/20 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={PORTFOLIO_IMAGES[currentImage]}
              alt={currentData.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 bg-white/10 backdrop-blur-sm p-4 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 bg-white/10 backdrop-blur-sm p-4 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 border border-white/20">
              <p className="text-center font-semibold mb-1">{currentData.title}</p>
              <p className="text-center text-sm text-white/60">
                {currentImage + 1} / {PORTFOLIO_IMAGES.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PortfolioSection;
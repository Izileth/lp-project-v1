import { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import iconClear from '../assets/icon_clear.png';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 segundos
    const steps = 60; // 60 frames
    const increment = 100 / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100] overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-zinc-800/40 via-black to-black" />
      </motion.div>

      {/* Subtle animated circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full border border-white/5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full border border-white/5"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with pulse animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow effect behind logo */}
          <motion.div
            className="absolute inset-0 blur-3xl bg-white/10 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <motion.img
            src={iconClear}
            alt="Lifestyle Logo"
            className="w-60 h-48 relative z-10"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Progress section */}
        <motion.div
          className="mt-12 flex flex-col items-center w-64"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Progress bar container */}
          <div className="w-full mb-4">
            <div className="relative h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Progress bar fill */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-white/60 via-white/80 to-white/60 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </div>

          {/* Counter */}
          <motion.div
            className="flex items-center space-x-3 text-white/50 text-sm font-light tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="font-mono text-base tabular-nums">
              {Math.round(progress)}%
            </span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              •
            </motion.span>
            <span className="uppercase text-xs">Carregando</span>
          </motion.div>
        </motion.div>

        {/* Subtle brand text */}
        <motion.div
          className="absolute bottom-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.p
            className="text-white text-xs uppercase tracking-[0.3em] font-light"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Lifestyle
          </motion.p>
        </motion.div>
      </div>

      {/* Grain overlay for texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default LoadingScreen;
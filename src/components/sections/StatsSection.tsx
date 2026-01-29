import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  { 
    number: 500, 
    suffix: "+",
    label: "Eventos",
    sublabel: "Realizados",
    percentage: 100,
  },
  { 
    number: 200, 
    suffix: "+",
    label: "Marcas",
    sublabel: "Atendidas",
    percentage: 100,
  },
  { 
    number: 98, 
    suffix: "%",
    label: "Satisfação",
    sublabel: "dos Clientes",
    percentage: 98,
  },
  { 
    number: 1000, 
    suffix: "+",
    label: "Promotores",
    sublabel: "Qualificados",
    percentage: 100,
  }
];

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return <div ref={ref} className="tabular-nums" />;
};

const CircularProgress = ({ percentage, delay }: { percentage: number; delay: number }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 140 140">
      {/* Background circle */}
      <circle
        cx="70"
        cy="70"
        r={radius}
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="2"
        fill="none"
      />
      {/* Progress circle */}
      <motion.circle
        cx="70"
        cy="70"
        r={radius}
        stroke="rgba(255, 255, 255, 0.6)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ delay, duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

const StatsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="mt-24 mb-20"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.4 + index * 0.15, duration: 0.6, type: "spring" }}
            className="flex flex-col items-center text-center group"
          >
            {/* Circular Progress */}
            <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6">
              <CircularProgress percentage={stat.percentage} delay={1.6 + index * 0.15} />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-0.5">
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full" />
            </div>

            {/* Labels */}
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-1 group-hover:text-white/90 transition-colors">
                {stat.label}
              </h4>
              <p className="text-xs md:text-sm text-white/50 uppercase tracking-widest">
                {stat.sublabel}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ delay: 2.2, duration: 1 }}
        className="w-full max-w-md mx-auto mt-16"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export default StatsSection;

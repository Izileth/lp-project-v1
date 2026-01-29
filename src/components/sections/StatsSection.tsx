import { motion } from 'framer-motion';

const stats = [
  { number: "500+", label: "Eventos Realizados" },
  { number: "200+", label: "Marcas Atendidas" },
  { number: "98%", label: "Satisfação" }
];

const StatsSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.2 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto"
  >
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 + index * 0.1 }}
        className="border border-white/20 p-6 mb-20 hover:border-white/40 transition-all duration-300"
      >
        <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{stat.number}</div>
        <div className="text-white/60 uppercase tracking-wider text-sm">{stat.label}</div>
      </motion.div>
    ))}
  </motion.div>
);

export default StatsSection;

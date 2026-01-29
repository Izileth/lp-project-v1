import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const objectives = [
  { icon: Target, title: "Excelência", desc: "Entregar experiências memoráveis que superam expectativas" },
  { icon: Users, title: "Conexão", desc: "Criar vínculos autênticos entre marcas e consumidores" },
  { icon: TrendingUp, title: "Resultados", desc: "Gerar impacto mensurável e crescimento sustentável" },
  { icon: Award, title: "Inovação", desc: "Estar sempre à frente com soluções criativas" }
];

const ObjectivesSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
    className="mb-20"
  >
    <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Objetivos</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {objectives.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="border border-white/20 p-8 hover:border-white/40 transition-all duration-300 group"
        >
          <item.icon className="w-12 h-12 mb-4 text-white/80 group-hover:text-white transition-colors" />
          <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
          <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default ObjectivesSection;

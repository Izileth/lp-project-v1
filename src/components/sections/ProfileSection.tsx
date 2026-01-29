import { motion } from 'framer-motion';
import ObjectivesSection from './ObjectivesSection';
import PortfolioSection from './PortfolioSection';
import { Award, Users } from 'lucide-react';

import banner_services from '../../assets/banner_services.jpg';
import banner_workers from '../../assets/banner_workers.jpg';

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

      {/* Nossos Serviços Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-20 mt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagem */}
          <motion.div
            className="relative overflow-hidden border border-white/20 group h-[400px] lg:h-[500px]"
            whileHover={{ borderColor: 'rgba(255, 255, 255, 0.4)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={banner_services}
              alt="Nossos Serviços"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Nossos Serviços</h3>
            </div>
            
            <p className="text-white/70 text-lg leading-relaxed">
              Oferecemos soluções completas em marketing promocional, desde o planejamento estratégico até a execução de ações em campo. Nossa expertise garante que sua marca seja apresentada da melhor forma possível ao público-alvo.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Ações Promocionais</h4>
                  <p className="text-white/60 text-sm">Estratégias criativas para impactar seu público</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Eventos Corporativos</h4>
                  <p className="text-white/60 text-sm">Produção completa de eventos memoráveis</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Equipe Especializada</h4>
                  <p className="text-white/60 text-sm">Promotores treinados e qualificados</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Como Funcionamos Banner - Invertido */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texto - Vem primeiro no mobile, segundo no desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Como Funcionamos</h3>
            </div>
            
            <p className="text-white/70 text-lg leading-relaxed">
              Nossa metodologia é baseada em planejamento estratégico, execução impecável e mensuração de resultados. Trabalhamos em parceria com nossos clientes para garantir o sucesso de cada projeto.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 border border-white/30 text-sm font-semibold shrink-0">
                  01
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Planejamento</h4>
                  <p className="text-white/60 text-sm">Análise completa do briefing e definição de estratégias</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 border border-white/30 text-sm font-semibold shrink-0">
                  02
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Execução</h4>
                  <p className="text-white/60 text-sm">Implementação das ações com equipe treinada</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 border border-white/30 text-sm font-semibold shrink-0">
                  03
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Resultados</h4>
                  <p className="text-white/60 text-sm">Análise de métricas e relatório final detalhado</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Imagem - Vem segundo no mobile, primeiro no desktop */}
          <motion.div
            className="relative overflow-hidden border border-white/20 group h-[400px] lg:h-[500px] order-1 lg:order-2"
            whileHover={{ borderColor: 'rgba(255, 255, 255, 0.4)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={banner_workers}
              alt="Como Funcionamos"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </motion.div>

      <PortfolioSection />
    </div>
  </section>
);

export default ProfileSection;
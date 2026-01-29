import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronLeft, ChevronRight, Phone,
  Mail, MapPin, Target, Users, Briefcase,
  Award, TrendingUp, MessageCircle, Send
} from 'lucide-react';
import iconClear from './assets/icon_clear.png';

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100]">
    <motion.img
      src={iconClear}
      alt="Lifestyle Logo"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-48 h-48"
    />
    <motion.div
      className="absolute bottom-16 text-white/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Carregando...
    </motion.div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [currentImage, setCurrentImage] = useState(0);

  const [promoterForm, setPromoterForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    experiencia: '',
  });

  const [partnershipForm, setPartnershipForm] = useState({
    empresa: '',
    contato: '',
    email: '',
    telefone: '',
    proposta: '',
  });

  const [quoteForm, setQuoteForm] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    servico: '',
    data: '',
    descricao: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Imagens do carousel (substitua com suas imagens reais)
  const portfolioImages = [
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
  ];

  useEffect(() => {
    if (!isLoading) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % portfolioImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isLoading]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da Lifestyle.";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, formSetter: React.Dispatch<React.SetStateAction<any>>) => {
    const { name, value } = e.target;
    formSetter((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent, message: string) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const promoterMessage = `
*Novo Cadastro de Promotor*

*Nome:* ${promoterForm.nome}
*E-mail:* ${promoterForm.email}
*Telefone:* ${promoterForm.telefone}
*Cidade/Estado:* ${promoterForm.cidade}
*Experiência:* ${promoterForm.experiencia}
  `;

  const partnershipMessage = `
*Nova Proposta de Parceria*

*Empresa:* ${partnershipForm.empresa}
*Contato:* ${partnershipForm.contato}
*E-mail:* ${partnershipForm.email}
*Telefone:* ${partnershipForm.telefone}
*Proposta:* ${partnershipForm.proposta}
  `;

  const quoteMessage = `
*Nova Solicitação de Orçamento*

*Nome:* ${quoteForm.nome}
*Empresa:* ${quoteForm.empresa}
*E-mail:* ${quoteForm.email}
*Telefone:* ${quoteForm.telefone}
*Tipo de Serviço:* ${quoteForm.servico}
*Data Prevista:* ${quoteForm.data}
*Descrição do Projeto:* ${quoteForm.descricao}
  `;

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <div className="grain-overlay"></div>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-3xl md:text-4xl font-bold gradient-text tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            LIFESTYLE
          </motion.h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['inicio', 'perfil', 'cadastro', 'orcamento'].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider transition-all duration-300 ${activeSection === section ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                  }`}
                whileHover={{ y: -2 }}
              >
                {section === 'inicio' ? 'Início' :
                  section === 'perfil' ? 'Nosso Perfil' :
                    section === 'cadastro' ? 'Cadastro' : 'Orçamento'}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white z-50"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-black border-l border-white/10 z-50 md:hidden custom-scrollbar overflow-y-auto"
            >
              <div className="p-8 pt-24">
                <nav className="flex flex-col space-y-6">
                  {['inicio', 'perfil', 'cadastro', 'orcamento'].map((section, index) => (
                    <motion.button
                      key={section}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(section)}
                      className={`text-left text-lg uppercase tracking-wider transition-all duration-300 ${activeSection === section ? 'text-white font-semibold' : 'text-white/60'
                        }`}
                    >
                      {section === 'inicio' ? 'Início' :
                        section === 'perfil' ? 'Nosso Perfil' :
                          section === 'cadastro' ? 'Cadastro' : 'Orçamento'}
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                  >
                    <MessageCircle size={20} />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section - Início */}
        <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="container mx-auto px-6 py-20 relative z-10 text-center"
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

            {/* Estatísticas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto"
            >
              {[
                { number: "500+", label: "Eventos Realizados" },
                { number: "200+", label: "Marcas Atendidas" },
                { number: "98%", label: "Satisfação" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="border border-white/20 p-6 hover:border-white/40 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{stat.number}</div>
                  <div className="text-white/60 uppercase tracking-wider text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Nosso Perfil Section */}
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

            {/* Objetivos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Objetivos</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Target, title: "Excelência", desc: "Entregar experiências memoráveis que superam expectativas" },
                  { icon: Users, title: "Conexão", desc: "Criar vínculos autênticos entre marcas e consumidores" },
                  { icon: TrendingUp, title: "Resultados", desc: "Gerar impacto mensurável e crescimento sustentável" },
                  { icon: Award, title: "Inovação", desc: "Estar sempre à frente com soluções criativas" }
                ].map((item, index) => (
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

            {/* Portfolio Carousel */}
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
                      src={portfolioImages[currentImage]}
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
                  {portfolioImages.map((_, index) => (
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
          </div>
        </section>

        {/* Cadastro Section */}
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
              {/* Cadastro de Promotores */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="border border-white/20 p-8 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Cadastro de Promotores</h3>
                </div>

                <form className="space-y-4" onSubmit={(e) => handleSubmit(e, promoterMessage)}>
                  <div>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome Completo"
                      value={promoterForm.nome}
                      onChange={(e) => handleInputChange(e, setPromoterForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={promoterForm.email}
                      onChange={(e) => handleInputChange(e, setPromoterForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Telefone / WhatsApp"
                      value={promoterForm.telefone}
                      onChange={(e) => handleInputChange(e, setPromoterForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="cidade"
                      placeholder="Cidade / Estado"
                      value={promoterForm.cidade}
                      onChange={(e) => handleInputChange(e, setPromoterForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <textarea
                      name="experiencia"
                      placeholder="Experiência e Disponibilidade"
                      rows={4}
                      value={promoterForm.experiencia}
                      onChange={(e) => handleInputChange(e, setPromoterForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-black py-4 font-semibold uppercase tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Cadastro
                  </motion.button>
                </form>
              </motion.div>

              {/* Parcerias */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="border border-white/20 p-8 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Briefcase className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Parcerias</h3>
                </div>

                <form className="space-y-4" onSubmit={(e) => handleSubmit(e, partnershipMessage)}>
                  <div>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Nome da Empresa"
                      value={partnershipForm.empresa}
                      onChange={(e) => handleInputChange(e, setPartnershipForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="contato"
                      placeholder="Nome do Contato"
                      value={partnershipForm.contato}
                      onChange={(e) => handleInputChange(e, setPartnershipForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail Corporativo"
                      value={partnershipForm.email}
                      onChange={(e) => handleInputChange(e, setPartnershipForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Telefone"
                      value={partnershipForm.telefone}
                      onChange={(e) => handleInputChange(e, setPartnershipForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <textarea
                      name="proposta"
                      placeholder="Conte-nos sobre sua proposta de parceria"
                      rows={4}
                      value={partnershipForm.proposta}
                      onChange={(e) => handleInputChange(e, setPartnershipForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-black py-4 font-semibold uppercase tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Proposta
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Orçamento Section */}
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto border border-white/20 p-8 md:p-12 hover:border-white/40 transition-all duration-300"
            >
              <form className="space-y-6" onSubmit={(e) => handleSubmit(e, quoteMessage)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome"
                      value={quoteForm.nome}
                      onChange={(e) => handleInputChange(e, setQuoteForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Empresa"
                      value={quoteForm.empresa}
                      onChange={(e) => handleInputChange(e, setQuoteForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={quoteForm.email}
                      onChange={(e) => handleInputChange(e, setQuoteForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Telefone / WhatsApp"
                      value={quoteForm.telefone}
                      onChange={(e) => handleInputChange(e, setQuoteForm)}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="servico"
                    value={quoteForm.servico}
                    onChange={(e) => handleInputChange(e, setQuoteForm)}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white/60 transition-all duration-300">
                    <option value="" className="bg-black">Tipo de Serviço</option>
                    <option value="evento" className="bg-black">Ação em Evento</option>
                    <option value="marketing" className="bg-black">Ação de Marketing</option>
                    <option value="vendas" className="bg-black">Ação de Vendas</option>
                    <option value="completo" className="bg-black">Pacote Completo</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    name="data"
                    placeholder="Data Prevista do Evento"
                    value={quoteForm.data}
                    onChange={(e) => handleInputChange(e, setQuoteForm)}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="descricao"
                    placeholder="Descreva seu projeto (objetivos, público-alvo, localização, etc.)"
                    rows={6}
                    value={quoteForm.descricao}
                    onChange={(e) => handleInputChange(e, setQuoteForm)}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black py-4 font-semibold uppercase tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center justify-center text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </motion.button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/20 text-center">
                <p className="text-white/60 mb-4">Ou entre em contato diretamente:</p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-white/80 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">LIFESTYLE</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Promotora de ações de marketing, vendas e eventos presenciais.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">Contato</h4>
              <div className="space-y-3 text-sm text-white/60">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>contato@lifestyle.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">Links Rápidos</h4>
              <div className="space-y-2 text-sm">
                {['inicio', 'perfil', 'cadastro', 'orcamento'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block text-white/60 hover:text-white transition-colors"
                  >
                    {section === 'inicio' ? 'Início' :
                      section === 'perfil' ? 'Nosso Perfil' :
                        section === 'cadastro' ? 'Cadastro' : 'Orçamento'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
            <p>&copy; 2026 Lifestyle. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
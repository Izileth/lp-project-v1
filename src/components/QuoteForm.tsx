import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useForm } from '../hooks/useForm';

const quoteMessageBuilder = (state: any) => `
*Nova Solicitação de Orçamento*

*Nome:* ${state.nome}
*Empresa:* ${state.empresa}
*E-mail:* ${state.email}
*Telefone:* ${state.telefone}
*Tipo de Serviço:* ${state.servico}
*Data Prevista:* ${state.data}
*Descrição do Projeto:* ${state.descricao}
`;

const QuoteForm = () => {
  const { formState, handleInputChange, handleSubmit } = useForm({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    servico: '',
    data: '',
    descricao: '',
  }, quoteMessageBuilder);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto border border-white/20 p-8 md:p-12 hover:border-white/40 transition-all duration-300"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formState.nome}
              onChange={handleInputChange}
              className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formState.empresa}
              onChange={handleInputChange}
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
              value={formState.email}
              onChange={handleInputChange}
              className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone / WhatsApp"
              value={formState.telefone}
              onChange={handleInputChange}
              className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
            />
          </div>
        </div>

        <div>
          <select
            name="servico"
            value={formState.servico}
            onChange={handleInputChange}
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
            value={formState.data}
            onChange={handleInputChange}
            className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
          />
        </div>

        <div>
          <textarea
            name="descricao"
            placeholder="Descreva seu projeto (objetivos, público-alvo, localização, etc.)"
            rows={6}
            value={formState.descricao}
            onChange={handleInputChange}
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
    </motion.div>
  );
};

export default QuoteForm;

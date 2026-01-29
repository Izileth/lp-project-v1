import { motion } from 'framer-motion';
import { Send, Briefcase } from 'lucide-react';
import { useForm } from '../hooks/useForm';

const partnershipMessageBuilder = (state: any) => `
*Nova Proposta de Parceria*

*Empresa:* ${state.empresa}
*Contato:* ${state.contato}
*E-mail:* ${state.email}
*Telefone:* ${state.telefone}
*Proposta:* ${state.proposta}
`;

const PartnershipForm = () => {
  const { formState, handleInputChange, handleSubmit } = useForm({
    empresa: '',
    contato: '',
    email: '',
    telefone: '',
    proposta: '',
  }, partnershipMessageBuilder);

  return (
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

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="empresa"
            placeholder="Nome da Empresa"
            value={formState.empresa}
            onChange={handleInputChange}
            className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
          />
        </div>

        <div>
          <input
            type="text"
            name="contato"
            placeholder="Nome do Contato"
            value={formState.contato}
            onChange={handleInputChange}
            className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="E-mail Corporativo"
            value={formState.email}
            onChange={handleInputChange}
            className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
          />
        </div>

        <div>
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={formState.telefone}
            onChange={handleInputChange}
            className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all duration-300"
          />
        </div>

        <div>
          <textarea
            name="proposta"
            placeholder="Conte-nos sobre sua proposta de parceria"
            rows={4}
            value={formState.proposta}
            onChange={handleInputChange}
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
  );
};

export default PartnershipForm;

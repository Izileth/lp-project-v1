import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface MobileSidebarProps {
  isMenuOpen: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  toggleMenu: () => void;
}

const MobileSidebar = ({ isMenuOpen, activeSection, scrollToSection, toggleMenu }: MobileSidebarProps) => (
  <AnimatePresence>
    {isMenuOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMenu}
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
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Lifestyle.")}`}
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
);

export default MobileSidebar;

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/icon_clear.png'
interface HeaderProps {
  isMenuOpen: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  toggleMenu: () => void;
}

const Header = ({ isMenuOpen, activeSection, scrollToSection, toggleMenu }: HeaderProps) => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10"
  >
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <img src={Logo} alt="Logo" className="w-16 h-12" />

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
        onClick={toggleMenu}
        className="md:hidden text-white z-50"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </motion.header>
);

export default Header;

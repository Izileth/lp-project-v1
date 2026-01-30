
import { Phone, Mail, MapPin } from 'lucide-react';
import EmailButton from './EmailButton';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => (
  <footer className="border-t border-white/10 py-12 relative">
    <EmailButton />
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
              <span>(91) 98547-9540</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>contato@lifestyle.com.br</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Belém, PA</span>
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
);

export default Footer;

import { Link } from 'react-router-dom';
import secretImage from '../assets/icon_svg.jpg';

const EasterEggTwo = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans flex flex-col items-center justify-center text-center p-4">
      <div className="grain-overlay"></div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400">A Câmara Secreta foi aberta!</h1>
      <img src={secretImage} alt="Ícone Secreto" className="w-48 h-48 my-8 rounded-full shadow-2xl shadow-green-500/20" />
      <Link to="/" className="text-gray-400 hover:text-white transition-colors text-lg">
        Inimigos do herdeiro, cuidado...
      </Link>
    </div>
  );
};

export default EasterEggTwo;

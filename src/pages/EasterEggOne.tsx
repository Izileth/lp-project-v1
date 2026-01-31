import { Link } from 'react-router-dom';

const EasterEggOne = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans flex flex-col items-center justify-center text-center p-4">
      <div className="grain-overlay"></div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">Wingardium Leviosa</h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">É Levi-<span className="text-yellow-300 font-bold">o</span>-sa, não Levio-sa-<span className="text-red-400 font-bold">AR</span>!</p>
      <Link to="/" className="text-blue-400 hover:text-blue-500 transition-colors text-lg">
        &larr; Voltar ao Início
      </Link>
    </div>
  );
};

export default EasterEggOne;

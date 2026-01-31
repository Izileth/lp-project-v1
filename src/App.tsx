import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import EasterEggOne from './pages/EasterEggOne';
import EasterEggTwo from './pages/EasterEggTwo';
import WhatsAppButton from './components/WhatsAppButton';
import EmailButton from './components/EmailButton';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <WhatsAppButton />
      <EmailButton />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<EasterEggOne />} />
        <Route path="/features" element={<EasterEggTwo />} />
      </Routes>
    </>
  );
};

export default App;

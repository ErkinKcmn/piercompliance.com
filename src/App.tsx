import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { language, forceUpdate } = useLanguage();

  // Update document title based on language
  useEffect(() => {
    document.title = language === 'tr' 
      ? 'Pier Compliance - Düzenleyici İşler ve Hukuki Danışmanlık | Dünya Çapında Hizmet'
      : 'Pier Compliance - Regulatory Affairs and Legal Consultancy | Worldwide Service';
  }, [language]);

  return (
    <div className="min-h-screen" key={`${language}-${forceUpdate}`}>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
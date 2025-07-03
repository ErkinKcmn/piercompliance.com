import React from 'react';
import { ArrowRight, CheckCircle, Globe, Award, Shield } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
              <Globe className="h-5 w-5 text-black" />
              <span className="text-black font-semibold">{t.worldwideService}</span>
              <Award className="h-5 w-5 text-black" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-black drop-shadow-lg">
              {t.heroTitle}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-black leading-relaxed max-w-4xl mx-auto font-medium drop-shadow-md">
            {t.heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={scrollToContact}
              className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              <span>{t.getStarted}</span>
              <ArrowRight className="h-6 w-6" />
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              {t.ourServices}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-400 rounded-full p-2 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-black drop-shadow-sm">{t.reachCompliance}</h3>
                  <p className="text-black leading-relaxed font-medium">{t.reachDesc}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-400 rounded-full p-2 shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-black drop-shadow-sm">{t.productSafety}</h3>
                  <p className="text-black leading-relaxed font-medium">{t.productSafetyDesc}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-400 rounded-full p-2 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-black drop-shadow-sm">{t.legalConsultancy}</h3>
                  <p className="text-black leading-relaxed font-medium">{t.legalConsultancyDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-white/30">
            <div className="flex flex-wrap justify-center items-center gap-8 text-black">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
                <Globe className="h-5 w-5 text-black" />
                <span className="font-bold text-black">{t.turkeyEurope}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
                <Award className="h-5 w-5 text-black" />
                <span className="font-bold text-black">{t.expertTeam}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
                <CheckCircle className="h-5 w-5 text-black" />
                <span className="font-bold text-black">{t.provenSuccess}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
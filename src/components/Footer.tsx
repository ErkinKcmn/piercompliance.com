import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (serviceId: string) => {
    const serviceSection = document.getElementById('services');
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: 'smooth' });
      // Highlight the specific service after scrolling
      setTimeout(() => {
        const serviceElement = document.querySelector(`[data-service="${serviceId}"]`);
        if (serviceElement) {
          serviceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold">Pier Compliance</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t.footerDesc}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.servicesFooter}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => handleServiceClick('reach')}
                  className="text-gray-300 hover:text-primary transition-colors text-left"
                >
                  {t.reachComplianceFooter}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('kkdik')}
                  className="text-gray-300 hover:text-primary transition-colors text-left"
                >
                  {t.kkdikConsulting}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('clp')}
                  className="text-gray-300 hover:text-primary transition-colors text-left"
                >
                  {t.clpServices}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('bpr')}
                  className="text-gray-300 hover:text-primary transition-colors text-left"
                >
                  {t.bprSupport}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('gpsr')}
                  className="text-gray-300 hover:text-primary transition-colors text-left"
                >
                  {t.gpsrComplianceFooter}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('legal')}
                  className="text-gray-300 hover:text-primary transition-colors text-left"
                >
                  {t.legalAdvisoryFooter}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.contactInformation}</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-gray-300">info@piercompliance.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-gray-300">+90 (212) 555-0123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-gray-300">Istanbul, Turkey</span>
                </div>
              </div>
            </div>

            {/* Legal - Centered */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-4">
                {t.allRightsReserved}
              </p>
              <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  {t.privacyPolicy}
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  {t.termsOfService}
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  {t.cookiePolicy}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
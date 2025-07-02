import React from 'react';
import { FileText, Shield, Scale } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: t.regulatoryAffairs,
      description: t.regulatoryDesc,
      features: [
        t.reachRegistration,
        t.kkdikCompliance,
        t.clpClassification,
        t.bprBiocidal,
        t.esprCompliance
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: t.productSafetyTitle,
      description: t.productSafetyFullDesc,
      features: [
        t.gpsrCompliance,
        t.technicalFile,
        t.safetyAssessment,
        t.riskAnalysis,
        t.marketPlacement,
        t.ecommerceCompliance
      ]
    },
    {
      icon: <Scale className="h-12 w-12 text-primary" />,
      title: t.legalAdvisory,
      description: t.legalDesc,
      features: [
        t.contractReview,
        t.legalRepresentation,
        t.complianceRisk,
        t.regulatoryStrategy
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.servicesTitle}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t.discussNeeds}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
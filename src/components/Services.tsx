import React, { useState } from 'react';
import { FileText, Shield, Scale, ChevronDown, ChevronUp, TestTube } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const services = [
    {
      id: 'regulatory',
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: t.regulatoryAffairs,
      description: t.regulatoryDesc,
      features: [
        t.reachRegistration,
        t.kkdikCompliance,
        t.clpClassification,
        t.bprBiocidal,
        t.esprCompliance,
        t.onlyRepresentative,
        t.thirdPartyRepresentation,
        t.siefManagement,
        t.testConsultancy
      ],
      detailedServices: [
        {
          id: 'reach',
          title: t.reachDetailTitle,
          description: t.reachDetailDesc,
          benefits: t.reachBenefits
        },
        {
          id: 'kkdik',
          title: t.kkdikDetailTitle,
          description: t.kkdikDetailDesc,
          benefits: t.kkdikBenefits
        },
        {
          id: 'clp',
          title: t.clpDetailTitle,
          description: t.clpDetailDesc,
          benefits: t.clpBenefits
        },
        {
          id: 'bpr',
          title: t.bprDetailTitle,
          description: t.bprDetailDesc,
          benefits: t.bprBenefits
        },
        {
          id: 'espr',
          title: t.esprDetailTitle,
          description: t.esprDetailDesc,
          benefits: t.esprBenefits
        }
      ]
    },
    {
      id: 'product-safety',
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: t.productSafetyTitle,
      description: t.productSafetyFullDesc,
      features: [
        t.gpsrCompliance,
        t.technicalFile,
        t.safetyAssessment,
        t.riskAnalysis,
        t.marketPlacement,
        t.ecommerceCompliance,
        t.testConsultancy
      ],
      detailedServices: [
        {
          id: 'gpsr',
          title: t.gpsrDetailTitle,
          description: t.gpsrDetailDesc,
          benefits: t.gpsrBenefits
        }
      ]
    },
    {
      id: 'legal',
      icon: <Scale className="h-12 w-12 text-primary" />,
      title: t.legalAdvisory,
      description: t.legalDesc,
      features: [
        t.contractReview,
        t.legalRepresentation,
        t.complianceRisk,
        t.regulatoryStrategy
      ],
      detailedServices: [
        {
          id: 'legal-advisory',
          title: t.legalDetailTitle,
          description: t.legalDetailDesc,
          benefits: t.legalBenefits
        }
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toggleService(service.id)}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2"
              >
                <span>{t.learnMore}</span>
                {expandedService === service.id ? 
                  <ChevronUp className="h-5 w-5" /> : 
                  <ChevronDown className="h-5 w-5" />
                }
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Service Information */}
        {expandedService && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
            <div className="max-w-4xl mx-auto">
              {services.find(s => s.id === expandedService)?.detailedServices.map((detailService, index) => (
                <div key={index} data-service={detailService.id} className="mb-8 last:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{detailService.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">{detailService.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {detailService.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                        <span className="text-gray-800 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
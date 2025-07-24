import React from 'react';
import { Target, Award, Globe, Users, Eye, Building2, GraduationCap, Lightbulb, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: t.precision,
      description: t.precisionDesc
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: t.excellence,
      description: t.excellenceDesc
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t.internationalExpertise,
      description: t.internationalDesc
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t.clientFocused,
      description: t.clientFocusedDesc
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.aboutTitle}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.aboutSubtitle}
            </p>
          </div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  {t.ourMission}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.missionText}
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-primary mr-3" />
                  {t.ourVision}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.visionText}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Professional team meeting"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4">{t.whyChooseUs}</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>{t.turkishEuExpertise}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>{t.provenTrackRecord}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>{t.comprehensiveSupport}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>{t.costEffective}</span>
                </li>
              </ul>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Company Overview */}
              <div className="relative bg-gray-50 p-8 rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                    alt="Business documents"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Building2 className="h-6 w-6 text-primary mr-3" />
                  {t.companyOverview}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.companyOverviewText}
                </p>
              </div>

              {/* Founders Expertise */}
              <div className="relative bg-gray-50 p-8 rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                    alt="Professional expertise"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  {t.foundersExpertise}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.foundersExpertiseText}
                </p>
              </div>

              {/* Experience and Approach */}
              <div className="relative bg-gray-50 p-8 rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <img 
                    src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                    alt="Strategic approach"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lightbulb className="h-6 w-6 text-primary mr-3" />
                  {t.experienceAndApproach}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.experienceAndApproachText}
                </p>
              </div>

              {/* Comprehensive Services */}
              <div className="relative bg-gray-50 p-8 rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <img 
                    src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                    alt="Comprehensive services"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  {t.comprehensiveServices}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.comprehensiveServicesText}
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
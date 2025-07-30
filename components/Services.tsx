'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslations } from '@/lib/i18n'
import { ChevronDown, ChevronUp, Shield, FileText, Globe, Zap, Battery, Leaf, Beaker, Scale, Briefcase, Settings } from 'lucide-react'

const Services = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const services = [
    {
      id: 'gpsr',
      icon: Shield,
      color: 'blue',
      service: t.services.gpsr
    },
    {
      id: 'epr',
      icon: Leaf,
      color: 'green',
      service: t.services.epr
    },
    {
      id: 'weee',
      icon: Zap,
      color: 'yellow',
      service: t.services.weee
    },
    {
      id: 'battery',
      icon: Battery,
      color: 'orange',
      service: t.services.battery
    },
    {
      id: 'espr',
      icon: Settings,
      color: 'purple',
      service: t.services.espr
    },
    {
      id: 'kkdik',
      icon: Beaker,
      color: 'indigo',
      service: t.services.kkdik
    },
    {
      id: 'reach',
      icon: Globe,
      color: 'blue',
      service: t.services.reach
    },
    {
      id: 'biocidal',
      icon: Shield,
      color: 'green',
      service: t.services.biocidal
    },
    {
      id: 'sds',
      icon: FileText,
      color: 'red',
      service: t.services.sds
    },
    {
      id: 'labor',
      icon: Scale,
      color: 'gray',
      service: t.services.labor
    },
    {
      id: 'commercial',
      icon: Briefcase,
      color: 'blue',
      service: t.services.commercial
    },
    {
      id: 'regulatory',
      icon: Settings,
      color: 'purple',
      service: t.services.regulatory
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      yellow: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
      orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200',
      red: 'bg-red-100 text-red-600 hover:bg-red-200',
      gray: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
          <p className="text-lg text-gray-700 mt-4">
            {t.services.overview}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            const isExpanded = expandedService === service.id
            
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(service.color)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {service.service.description}
                  </p>
                  
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.service.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let our experts help you navigate the complex world of regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                {t.common.getQuote}
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                {t.common.contactUs}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 

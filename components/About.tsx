'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslations } from '@/lib/i18n'
import { Award, Users, Target, CheckCircle } from 'lucide-react'

const About = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {t.about.founders}
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">{t.about.values.excellence}</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  {t.about.mission}
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-6 h-6 text-green-600" />
                  <h4 className="font-semibold text-gray-900">{t.about.values.trust}</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  {t.about.vision}
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg text-white">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">{t.about.experience}</div>
            </div>
            
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">{t.hero.stats.projects}</div>
            </div>
            
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">{t.hero.stats.satisfaction}</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg text-white">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">{t.contact.businessHours.title}</div>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.about.expertise.team}</h3>
            <p className="text-gray-600">
              {t.about.description}
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.about.expertise.trackRecord}</h3>
            <p className="text-gray-600">
              {t.about.description}
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.about.expertise.recognition}</h3>
            <p className="text-gray-600">
              {t.about.description}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">{t.about.values.excellence}</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t.about.values.excellence}</h4>
              <p className="text-sm text-gray-600">{t.about.values.excellenceDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t.about.values.integrity}</h4>
              <p className="text-sm text-gray-600">{t.about.values.integrityDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t.about.values.innovation}</h4>
              <p className="text-sm text-gray-600">{t.about.values.innovationDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t.about.values.trust}</h4>
              <p className="text-sm text-gray-600">{t.about.values.trustDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 
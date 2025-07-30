'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslations } from '@/lib/i18n'
import { Newspaper, Calendar, ArrowRight } from 'lucide-react'

const News = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Newspaper className="w-4 h-4 mr-2" />
            {t.news.subtitle}
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.news.title}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.news.description}
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Calendar className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.news.comingSoon}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.news.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                {t.common.contactUs}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Placeholder for future news */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* This section will be populated with actual news content in the future */}
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Newspaper className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t.news.comingSoon}
            </h3>
            <p className="text-gray-600 text-sm">
              {t.news.description}
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t.news.comingSoon}
            </h3>
            <p className="text-gray-600 text-sm">
              {t.news.description}
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t.news.comingSoon}
            </h3>
            <p className="text-gray-600 text-sm">
              {t.news.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News 
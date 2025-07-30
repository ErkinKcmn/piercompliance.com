'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslations } from '@/lib/i18n'
import { Phone, Mail, MapPin, Send, CheckCircle, X } from 'lucide-react'

const Contact = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isQuoteSubmitted, setIsQuoteSubmitted] = useState(false)
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleQuoteInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setQuoteFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Pier Compliance - Contact Form Submission')
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Message: ${formData.message}
    `)
    
    const mailtoLink = `mailto:${t.contact.email}?subject=${subject}&body=${body}`
    
    // Open email client
    window.open(mailtoLink, '_blank')
    
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with quote form data
    const subject = encodeURIComponent('Pier Compliance - Quote Request')
    const body = encodeURIComponent(`
Name: ${quoteFormData.name}
Email: ${quoteFormData.email}
Company: ${quoteFormData.company}
Service: ${quoteFormData.service}
Message: ${quoteFormData.message}
    `)
    
    const mailtoLink = `mailto:${t.contact.email}?subject=${subject}&body=${body}`
    
    // Open email client
    window.open(mailtoLink, '_blank')
    
    setIsQuoteSubmitted(true)
    setQuoteFormData({ name: '', email: '', company: '', service: '', message: '' })
    setShowQuoteForm(false)
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsQuoteSubmitted(false), 3000)
  }

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {t.contact.getInTouch}
                </h3>
                <p className="text-gray-600 mb-8">
                  {t.contact.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.contact.businessHours.title}</h4>
                    <p className="text-gray-600">{t.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.contact.businessHours.title}</h4>
                    <a href={`tel:${t.contact.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {t.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.contact.businessHours.title}</h4>
                    <a href={`mailto:${t.contact.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {t.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">{t.contact.businessHours.title}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>{t.contact.businessHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.contact.businessHours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.contact.businessHours.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-lg p-6 text-white">
                <h4 className="font-semibold mb-4">{t.contact.whyChooseUs.title}</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t.contact.whyChooseUs.expertTeam}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t.contact.whyChooseUs.experience}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t.contact.whyChooseUs.projects}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t.contact.whyChooseUs.personalized}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t.contact.form.title}
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>{t.contact.form.success}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder={t.contact.form.name}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder={t.contact.form.email}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder={t.contact.form.company}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder={t.contact.form.message}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.contact.form.send}</span>
                </button>
              </form>

              {/* Quote Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="w-full bg-white border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-200"
                >
                  {t.common.getQuote}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {t.contact.quoteForm.title}
              </h3>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              {t.contact.quoteForm.subtitle}
            </p>

            {isQuoteSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>{t.contact.quoteForm.success}</span>
              </div>
            )}

            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              <div>
                <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.quoteForm.name}
                </label>
                <input
                  type="text"
                  id="quote-name"
                  name="name"
                  value={quoteFormData.name}
                  onChange={handleQuoteInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t.contact.quoteForm.name}
                />
              </div>

              <div>
                <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.quoteForm.email}
                </label>
                <input
                  type="email"
                  id="quote-email"
                  name="email"
                  value={quoteFormData.email}
                  onChange={handleQuoteInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t.contact.quoteForm.email}
                />
              </div>

              <div>
                <label htmlFor="quote-company" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.quoteForm.company}
                </label>
                <input
                  type="text"
                  id="quote-company"
                  name="company"
                  value={quoteFormData.company}
                  onChange={handleQuoteInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t.contact.quoteForm.company}
                />
              </div>

              <div>
                <label htmlFor="quote-service" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.quoteForm.service}
                </label>
                <select
                  id="quote-service"
                  name="service"
                  value={quoteFormData.service}
                  onChange={handleQuoteInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">{t.contact.quoteForm.service}</option>
                  <option value={t.contact.quoteForm.services.gpsr}>{t.contact.quoteForm.services.gpsr}</option>
                  <option value={t.contact.quoteForm.services.epr}>{t.contact.quoteForm.services.epr}</option>
                  <option value={t.contact.quoteForm.services.weee}>{t.contact.quoteForm.services.weee}</option>
                  <option value={t.contact.quoteForm.services.battery}>{t.contact.quoteForm.services.battery}</option>
                  <option value={t.contact.quoteForm.services.espr}>{t.contact.quoteForm.services.espr}</option>
                  <option value={t.contact.quoteForm.services.kkdik}>{t.contact.quoteForm.services.kkdik}</option>
                  <option value={t.contact.quoteForm.services.reach}>{t.contact.quoteForm.services.reach}</option>
                  <option value={t.contact.quoteForm.services.biocidal}>{t.contact.quoteForm.services.biocidal}</option>
                  <option value={t.contact.quoteForm.services.sds}>{t.contact.quoteForm.services.sds}</option>
                  <option value={t.contact.quoteForm.services.labor}>{t.contact.quoteForm.services.labor}</option>
                  <option value={t.contact.quoteForm.services.commercial}>{t.contact.quoteForm.services.commercial}</option>
                  <option value={t.contact.quoteForm.services.regulatory}>{t.contact.quoteForm.services.regulatory}</option>
                  <option value={t.contact.quoteForm.services.gdpr}>{t.contact.quoteForm.services.gdpr}</option>
                  <option value={t.contact.quoteForm.services.kvkk}>{t.contact.quoteForm.services.kvkk}</option>
                  <option value={t.contact.quoteForm.services.c2c}>{t.contact.quoteForm.services.c2c}</option>
                </select>
              </div>

              <div>
                <label htmlFor="quote-message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.quoteForm.message}
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  value={quoteFormData.message}
                  onChange={handleQuoteInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t.contact.quoteForm.message}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.contact.quoteForm.send}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowQuoteForm(false)}
                  className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-all duration-200"
                >
                  {t.common.contactUs}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Contact 
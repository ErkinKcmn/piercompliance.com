'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslations } from '@/lib/i18n'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Scale, Beaker } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Engineering/Technical element */}
                <Beaker className="w-4 h-4 text-white absolute top-1 left-1" />
                {/* Legal element */}
                <Scale className="w-4 h-4 text-white absolute bottom-1 right-1" />
                {/* Pier text */}
                <span className="text-white font-bold text-xs relative z-10">Pier</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{t.header.companyName}</h3>
                <p className="text-sm text-gray-400">{t.header.tagline}</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              {t.footer.description}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">{t.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href={`tel:${t.contact.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {t.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href={`mailto:${t.contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {t.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.faq}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.ourServices}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#gpsr" className="text-gray-300 hover:text-white transition-colors">
                  {t.services.gpsr.title}
                </Link>
              </li>
              <li>
                <Link href="/services#kkdik" className="text-gray-300 hover:text-white transition-colors">
                  {t.services.kkdik.title}
                </Link>
              </li>
              <li>
                <Link href="/services#biocidal" className="text-gray-300 hover:text-white transition-colors">
                  {t.services.biocidal.title}
                </Link>
              </li>
              <li>
                <Link href="/services#sds" className="text-gray-300 hover:text-white transition-colors">
                  {t.services.sds.title}
                </Link>
              </li>
              <li>
                <Link href="/services#labor" className="text-gray-300 hover:text-white transition-colors">
                  {t.services.labor.title}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 {t.header.companyName}. {t.footer.rights}
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t.footer.privacy}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t.footer.terms}
              </Link>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
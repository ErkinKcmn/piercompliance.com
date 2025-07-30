'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      
      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4 mr-2" />
              Professional Compliance Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight"
            >
              Expert{' '}
              <span className="gradient-text">Regulatory Compliance</span>
              {' '}Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-secondary-600 mb-8 leading-relaxed"
            >
              Navigate complex regulatory landscapes with confidence. Our expert team provides comprehensive compliance solutions for GPSR, ESPR, KKDIK, REACH, and Biocidal regulations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="#contact" className="btn-primary group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#services" className="btn-secondary">
                View Services
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-secondary-600">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-secondary-600">
                <Shield className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium">100% Compliance Rate</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-secondary-600">
                <Clock className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-600/10 rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Why Choose Pier Compliance?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">Expert Knowledge</h4>
                      <p className="text-sm text-secondary-600">Deep understanding of EU and Turkish regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">Proven Track Record</h4>
                      <p className="text-sm text-secondary-600">Successfully completed 500+ compliance projects</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">Personalized Service</h4>
                      <p className="text-sm text-secondary-600">Tailored solutions for your specific needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Shield,
    title: 'GPSR Compliance',
    description: 'General Product Safety Regulation compliance services for product safety and market access.',
    features: ['Product safety assessment', 'Risk analysis', 'Compliance documentation', 'Market access support'],
    color: 'primary'
  },
  {
    icon: FileText,
    title: 'ESPR Compliance',
    description: 'Ecodesign for Sustainable Products Regulation services for environmental compliance.',
    features: ['Sustainable design guidance', 'Environmental impact assessment', 'Eco-labeling support', 'Compliance reporting'],
    color: 'accent'
  },
  {
    icon: Globe,
    title: 'KKDIK Compliance',
    description: 'Turkish REACH regulation compliance for chemical registration and evaluation.',
    features: ['Chemical registration', 'Safety assessment', 'Authorization processes', 'Regulatory reporting'],
    color: 'primary'
  },
  {
    icon: Zap,
    title: 'REACH Compliance',
    description: 'EU REACH regulation compliance for chemical substances and mixtures.',
    features: ['Substance registration', 'Safety data sheets', 'Risk management', 'Regulatory updates'],
    color: 'accent'
  },
  {
    icon: Shield,
    title: 'Biocidal Compliance',
    description: 'Biocidal product regulation compliance for antimicrobial products.',
    features: ['Product authorization', 'Safety evaluation', 'Label preparation', 'Regulatory support'],
    color: 'primary'
  },
  {
    icon: FileText,
    title: 'SDS Preparation',
    description: 'Safety Data Sheet preparation and management services.',
    features: ['SDS creation', 'Regular updates', 'Translation services', 'Regulatory compliance'],
    color: 'accent'
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Comprehensive{' '}
            <span className="gradient-text">Compliance Solutions</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We provide expert regulatory compliance services across all major EU and Turkish regulations, ensuring your products meet the highest standards of safety and compliance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 lg:p-8 group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-${service.color}-200 transition-colors`}>
                <service.icon className={`w-6 h-6 text-${service.color}-600`} />
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2 text-sm text-secondary-600">
                    <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="#contact" 
                className={`inline-flex items-center text-${service.color}-600 hover:text-${service.color}-700 font-medium group/link`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Ensure Your Compliance?
            </h3>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              Get expert guidance on your regulatory compliance needs. Our team is ready to help you navigate complex regulations and ensure your products meet all requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="btn-primary">
                Get Free Consultation
              </Link>
              <Link href="tel:+905325097758" className="btn-secondary">
                Call +90 532 509 77 58
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
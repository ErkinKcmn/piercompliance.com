'use client'

import { motion } from 'framer-motion'
import { Users, Award, Globe, Clock } from 'lucide-react'

const stats = [
  { icon: Users, value: '15+', label: 'Years Experience' },
  { icon: Award, value: '500+', label: 'Projects Completed' },
  { icon: Globe, value: '50+', label: 'Countries Served' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              About Us
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
              Leading Regulatory Compliance{' '}
              <span className="gradient-text">Experts</span>
            </h2>
            
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              Pier Compliance is a premier regulatory consulting firm specializing in EU and Turkish compliance regulations. With over 15 years of experience, we help businesses navigate complex regulatory landscapes with confidence and precision.
            </p>
            
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Our team of certified experts provides comprehensive solutions for GPSR, ESPR, KKDIK, REACH, and Biocidal regulations, ensuring your products meet all compliance requirements while maintaining market competitiveness.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-secondary-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-secondary-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Expert Team</h3>
                    <p className="text-secondary-600">Our certified professionals bring deep expertise in regulatory affairs and compliance management.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Global Reach</h3>
                    <p className="text-secondary-600">Serving clients across Europe and Turkey with localized compliance solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Timely Delivery</h3>
                    <p className="text-secondary-600">We ensure your compliance projects are completed on time and within budget.</p>
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
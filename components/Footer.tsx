'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

export default function Footer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-black text-gray-300 py-20 relative overflow-hidden border-t border-copper-600 border-opacity-20">
      {/* Accent background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(245, 158, 11, .02) 25%, transparent 25%)'
      }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-sans font-bold text-white mb-4">
              Total Restaurant Care
            </h3>
            <p className="font-light text-gray-400 leading-relaxed">
              Enterprise-grade commercial kitchen cleaning for restaurants and food service operations.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-sans font-bold text-white uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-light">
              {['Conveyor Oven Cleaning', 'Hood & Duct Cleaning', 'Equipment Cleaning', 'Emergency Services'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-copper-500 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-sans font-bold text-white uppercase tracking-widest mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li>Maryland</li>
              <li>Washington, DC</li>
              <li>Virginia</li>
              <li>Nationwide Available</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-sans font-bold text-white uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="tel:4105551234" className="text-copper-500 hover:text-copper-400 transition-colors duration-200 text-base font-semibold">
                  (410) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@trc.com" className="text-gray-400 hover:text-copper-500 transition-colors duration-200">
                  info@trc.com
                </a>
              </li>
              <li className="text-gray-500">
                24/7 Emergency Response
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light text-gray-500"
          >
            <p>&copy; 2026 Total Restaurant Care. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-copper-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-copper-500 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-copper-500 transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

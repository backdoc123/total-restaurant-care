'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

export default function Footer() {
  const footerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="bg-navy-950 text-slate-300 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Company info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-serif font-bold text-lg mb-4">
              Total Restaurant Care
            </h3>
            <p className="font-sans text-sm leading-relaxed">
              Professional commercial kitchen cleaning services for restaurants nationwide.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-sans font-bold mb-4">Services</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Oven Cleaning</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Kitchen Exhaust</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Equipment Cleaning</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Maintenance Plans</a></li>
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-sans font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>Maryland</li>
              <li>Washington, DC</li>
              <li>Virginia</li>
              <li>Nationwide Available</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-sans font-bold mb-4">Contact</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="tel:4105551234" className="hover:text-gold-400 transition-colors">
                  (410) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@trc.com" className="hover:text-gold-400 transition-colors">
                  info@trc.com
                </a>
              </li>
              <li>24/7 Emergency Response</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-sm text-slate-400">
            <p>&copy; 2024 Total Restaurant Care. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

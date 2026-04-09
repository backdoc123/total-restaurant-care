'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

export default function CTA() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center text-3xl">
              ✓
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-serif font-bold text-navy-900 mb-6"
          >
            Ready to Get Started?
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-sans"
          >
            Schedule a free inspection today. We'll assess your kitchen cleaning needs and provide a quote with zero obligation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gold-500 text-navy-900 font-sans font-bold text-lg rounded-lg hover:bg-gold-400 transition-colors duration-300 shadow-2xl"
            >
              Schedule Free Inspection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-gold-500 text-gold-500 font-sans font-bold text-lg rounded-lg hover:bg-gold-500 hover:text-white transition-all duration-300"
            >
              (410) XXX-XXXX
            </motion.button>
          </motion.div>

          {/* Trust note */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-slate-500 font-sans text-sm"
          >
            Bonded & Insured | Emergency Services Available | Same-Day Service Options
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

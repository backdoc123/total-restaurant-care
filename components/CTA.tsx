'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

export default function CTA() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-copper-600 text-white text-4xl">
              ✓
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-serif font-bold text-navy-900 mb-6"
          >
            Ready to Transform Your Kitchen?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Schedule a free inspection today. We'll assess your kitchen cleaning needs, provide a transparent quote, and get started on keeping your operation running at peak performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-copper-600 text-white font-sans font-bold text-lg rounded-lg hover:bg-copper-500 transition-colors duration-300 shadow-xl"
            >
              Schedule Free Inspection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border-2 border-copper-600 text-copper-600 font-sans font-bold text-lg rounded-lg hover:bg-copper-600 hover:text-white transition-all duration-300"
            >
              (410) 555-1234
            </motion.button>
          </motion.div>

          {/* Trust message */}
          <motion.p
            variants={itemVariants}
            className="text-slate-500 font-sans text-sm"
          >
            Bonded & Insured  •  Same-Day Service Options  •  Emergency Response Available
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden -mt-16">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(245, 158, 11, .03) 0%, transparent 50%)'
      }} />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon accent */}
          <motion.div variants={itemVariants} className="mb-8 inline-block">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-copper-600 to-copper-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-copper-600/30">
              ✓
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-sans font-black text-navy-900 mb-8 leading-tight"
          >
            Ready to Protect Your Kitchen?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-navy-700 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Schedule a free inspection today. We'll assess your kitchen's cleaning needs, provide a transparent quote, and begin protecting your operation from fire hazards and compliance issues.
          </motion.p>

          {/* Key benefits */}
          <motion.div variants={itemVariants} className="space-y-4 mb-12 max-w-xl mx-auto">
            {[
              'No-obligation inspection and assessment',
              'Transparent pricing with detailed scope',
              'Same-day service availability',
            ].map((benefit, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 bg-copper-600 rounded-full" />
                <span className="text-navy-700 font-light">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-copper-600 to-copper-500 text-white font-sans font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-copper-600/40 transition-all duration-300 flex items-center gap-2"
            >
              Schedule Inspection
              <span>→</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-copper-600 text-copper-600 font-sans font-bold text-lg rounded-lg hover:bg-copper-50 transition-all duration-300"
            >
              (410) 555-1234
            </motion.button>
          </motion.div>

          {/* Trust message */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-navy-600 font-light uppercase tracking-widest"
          >
            Bonded & Insured  •  Same-Day Service  •  24/7 Emergency Response
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

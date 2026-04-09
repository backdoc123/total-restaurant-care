'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-950 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Overline */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-gold-400 font-sans text-sm uppercase tracking-widest font-semibold">
              Professional Cleaning Services
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Pizza Oven Cleaning{' '}
            <span className="text-gold-400">That Powers Your Kitchen</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 font-light"
          >
            Trusted by Pizza Hut, Dominos, and Papa Johns. We keep your conveyor ovens clean, compliant, and fire-safe.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold-500 text-navy-900 font-sans font-bold text-lg rounded-lg hover:bg-gold-400 transition-colors duration-300 shadow-2xl"
            >
              Schedule Free Inspection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gold-400 text-gold-400 font-sans font-bold text-lg rounded-lg hover:bg-gold-400 hover:text-navy-900 transition-all duration-300"
            >
              Get a Quote
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-slate-700">
            <p className="text-slate-300 text-sm uppercase tracking-widest font-sans mb-4">
              Trusted by restaurant chains nationwide
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-gold-400 font-bold text-xl">Pizza Hut</div>
              <div className="w-1 h-6 bg-slate-600" />
              <div className="text-slate-300 font-sans">Bonded & Insured</div>
              <div className="w-1 h-6 bg-slate-600" />
              <div className="text-slate-300 font-sans">25+ Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="text-gold-400 text-center">
          <div className="text-sm font-sans mb-2">Scroll to explore</div>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

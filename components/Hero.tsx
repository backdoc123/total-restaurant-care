'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-950 text-white relative overflow-hidden pt-20 flex items-center">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-96 h-96 bg-copper-600 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-copper-600 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Overline */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-copper-500 font-sans text-sm uppercase tracking-widest font-semibold">
              Professional Cleaning Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight text-white"
          >
            Chris
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Trusted by Pizza Hut, Dominos, and Papa Johns. We keep your conveyor ovens pristine, compliant, and fire-safe. Commercial kitchen cleaning that transforms your operation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-copper-600 text-white font-sans font-bold text-lg rounded-lg hover:bg-copper-500 transition-colors duration-300 shadow-2xl"
            >
              Schedule Free Inspection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-copper-500 text-copper-400 font-sans font-bold text-lg rounded-lg hover:bg-copper-600 hover:text-white transition-all duration-300"
            >
              Get a Quote
            </motion.button>
          </motion.div>

          {/* Trust line */}
          <motion.div variants={itemVariants} className="pt-12 border-t border-slate-600">
            <p className="text-slate-300 text-sm uppercase tracking-widest font-sans mb-6">
              Trusted by leading restaurant chains
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <span className="text-copper-500 font-bold text-lg font-serif">Pizza Hut</span>
              <div className="w-1 h-6 bg-slate-600" />
              <span className="text-slate-300 font-sans">Bonded & Insured</span>
              <div className="w-1 h-6 bg-slate-600" />
              <span className="text-slate-300 font-sans">25+ Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="text-copper-500 text-center">
          <div className="text-xs font-sans mb-3">Scroll to explore</div>
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="min-h-screen bg-black text-white relative overflow-hidden flex items-center">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Overline */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-orange-500 font-sans text-sm uppercase tracking-widest font-bold">
                Commercial Kitchen Experts
              </span>
            </motion.div>

            {/* Main Headline - LARGE & BOLD */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-8xl font-sans font-black mb-8 leading-tight tracking-tight"
            >
              RELIABLE{' '}
              <span className="text-orange-500">CONVEYOR OVEN</span>
              <br />
              SERVICES
            </motion.h1>

            {/* Benefit-driven copy */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-lg mb-12 leading-relaxed font-light"
            >
              The Total Restaurant Care team has a proven and effective solution for cleaning commercial conveyor ovens. Our certified technicians adhere to an in-depth process to help ensure your conveyor oven is properly cleaned and operating at its full potential.
            </motion.p>

            {/* Key benefits - bullet style */}
            <motion.div variants={itemVariants} className="space-y-4 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 mt-3 flex-shrink-0" />
                <p className="text-gray-300">Fire hazard prevention through deep cleaning</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 mt-3 flex-shrink-0" />
                <p className="text-gray-300">Regulatory compliance and health code adherence</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 mt-3 flex-shrink-0" />
                <p className="text-gray-300">Minimal downtime—same-day service options</p>
              </div>
            </motion.div>

            {/* CTA - AGGRESSIVE */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-orange-600 text-white font-sans font-bold text-lg rounded-lg hover:bg-orange-500 transition-colors duration-300 shadow-2xl"
              >
                Schedule Inspection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-orange-600 text-orange-600 font-sans font-bold text-lg rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                (410) 555-1234
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Image placeholder (for real image) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden border-2 border-orange-600 border-opacity-30">
              {/* Placeholder for real image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔧</div>
                  <p className="text-gray-400 text-lg">Conveyor Oven Cleaning</p>
                  <p className="text-gray-500 text-sm mt-2">[Real Image Here]</p>
                </div>
              </div>
            </div>

            {/* Trust badges below image */}
            <div className="mt-12 space-y-6">
              <div className="border-l-4 border-orange-600 pl-6">
                <p className="text-sm text-gray-400 uppercase tracking-widest">Trusted by</p>
                <p className="text-2xl font-bold text-white mt-2">Pizza Hut • Dominos • Papa Johns</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6">
                <p className="text-sm text-gray-400 uppercase tracking-widest">Certified & Bonded</p>
                <p className="text-2xl font-bold text-white mt-2">25+ Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="text-orange-500 text-center">
          <div className="text-xs font-sans mb-3">Scroll to explore</div>
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

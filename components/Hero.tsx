'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const words = ['Precision', 'Conveyor', 'Oven', 'Cleaning']
const highlightWords = ['Conveyor', 'Oven']

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15 + 0.4,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center pt-32 pb-32 mt-20">
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs - smooth, elegant floating */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-copper-600 via-copper-700 to-copper-900 rounded-full opacity-8 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-copper-600 via-copper-700 to-orange-600 rounded-full opacity-6 blur-3xl"
        />

        {/* Subtle animated grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(90deg, rgba(249,158,11,.15) 1px, transparent 1px), linear-gradient(rgba(249,158,11,.15) 1px, transparent 1px)',
          backgroundSize: '5rem 5rem'
        }} />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-40" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8 inline-block">
              <div className="px-4 py-2 border border-copper-600 border-opacity-40 rounded-full backdrop-blur-sm bg-copper-600 bg-opacity-10">
                <span className="text-copper-400 font-sans text-xs uppercase tracking-widest font-semibold">
                  Premium Industrial Cleaning
                </span>
              </div>
            </motion.div>

            {/* Headline - Word by word reveal */}
            <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black mb-8 leading-tight tracking-tight text-white">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-3 ${
                    highlightWords.includes(word)
                      ? 'relative'
                      : ''
                  }`}
                >
                  {highlightWords.includes(word) ? (
                    <span className="relative inline-block">
                      <span className="relative z-10">{word}</span>
                      <span className="absolute -inset-2 bg-gradient-to-r from-copper-600 to-copper-500 blur-lg opacity-60" />
                      <span className="absolute -inset-2 bg-gradient-to-r from-copper-600 to-copper-500 opacity-20" />
                      <span className="relative text-white">{word}</span>
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-300 max-w-xl mb-10 font-light leading-relaxed"
            >
              Enterprise-grade cleaning for commercial kitchens. Fire hazard prevention, regulatory compliance, and operational excellence in every service.
            </motion.p>

            {/* Value propositions */}
            <motion.div variants={itemVariants} className="space-y-4 mb-12">
              {[
                'Deep industrial cleaning with certified technicians',
                'Fire hazard prevention & regulatory compliance',
                'Same-day service with minimal operational downtime'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-copper-500 to-copper-400 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-gray-200 font-light">{item}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 sm:items-center"
            >
              <motion.button
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-copper-600 to-copper-500 text-white font-sans font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-copper-600/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Inspection
                <span>→</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-copper-600 border-opacity-60 text-copper-400 font-sans font-bold text-lg rounded-lg hover:bg-copper-600 hover:bg-opacity-15 hover:text-copper-300 transition-all duration-300"
              >
                (410) 555-1234
              </motion.button>
            </motion.div>

            {/* Trust line */}
            <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-gray-800">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Trusted by industry leaders</p>
              <div className="text-lg text-gray-400 font-light">Pizza Hut • Dominos • Papa Johns</div>
            </motion.div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2"
          >
            {/* Premium image placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-copper-600 border-opacity-30 relative group">
                {/* Animated accent */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-copper-600 to-copper-400 rounded-2xl opacity-0 group-hover:opacity-25 blur-lg transition-opacity duration-300"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="text-7xl mb-6"
                  >
                    🔧
                  </motion.div>
                  <p className="text-xl font-light text-gray-300 text-center">Conveyor Oven Cleaning</p>
                  <p className="text-sm text-gray-500 mt-4">[Premium Image Placeholder]</p>
                </div>
              </div>

              {/* Floating card accent */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-12 -right-12 w-48 p-6 bg-black border border-copper-600 border-opacity-30 rounded-xl backdrop-blur-sm hidden lg:block"
              >
                <p className="text-xs text-copper-400 uppercase tracking-widest mb-2">25+ Years</p>
                <p className="text-2xl font-bold text-white">Industry Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="text-copper-500 text-center">
          <p className="text-xs font-sans mb-3 uppercase tracking-widest">Scroll to explore</p>
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

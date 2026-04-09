'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-copper-600/20 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center gap-4">
          {/* Logo placeholder */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-copper-600 to-copper-500 flex items-center justify-center text-white font-black text-xl group-hover:shadow-lg group-hover:shadow-copper-600/50 transition-all duration-300">
              TRC
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-sans font-bold text-sm leading-tight">
                Total Restaurant
              </p>
              <p className="text-copper-500 font-sans font-bold text-sm">
                Care
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right side CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-copper-600 to-copper-500 text-white font-sans font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-copper-600/50 transition-all duration-300 hidden sm:block"
          >
            Schedule Now
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

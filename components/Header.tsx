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
          ? 'bg-black/85 backdrop-blur-lg border-b border-copper-600/30 py-4'
          : 'bg-black/40 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center gap-6">
          {/* Logo + Branding - More Prominent */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <motion.div 
              whileHover={{ scale: 1.08 }}
              className="w-14 h-14 rounded-lg bg-gradient-to-br from-copper-600 to-copper-500 flex items-center justify-center text-white font-black text-2xl group-hover:shadow-2xl group-hover:shadow-copper-600/60 transition-all duration-300"
            >
              TRC
            </motion.div>
            <div className="hidden sm:block">
              <p className="text-white font-sans font-black text-sm leading-tight">
                TOTAL RESTAURANT
              </p>
              <p className="text-copper-500 font-sans font-black text-sm leading-tight">
                CARE
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right side CTA */}
          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-copper-600 to-copper-500 text-white font-sans font-black text-sm rounded-lg hover:shadow-xl hover:shadow-copper-600/60 transition-all duration-300 hidden sm:block"
          >
            Schedule Now
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

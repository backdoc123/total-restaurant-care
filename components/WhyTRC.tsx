'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Variants } from 'framer-motion'

const reasons = [
  {
    number: '01',
    title: 'Specialized Expertise',
    description: 'Dedicated conveyor oven cleaning specialists with decades of combined experience. We understand your equipment like no one else.',
  },
  {
    number: '02',
    title: 'Safety First',
    description: 'Fire hazard elimination through deep industrial cleaning. Your team stays safe. Your kitchen stays protected.',
  },
  {
    number: '03',
    title: 'Code Compliant',
    description: 'Meet all health department and fire code requirements. Avoid violations, fines, and operational interruptions.',
  },
  {
    number: '04',
    title: 'Business Continuity',
    description: 'Minimal downtime means your kitchen keeps operating. Same-day service gets you back up and running fast.',
  },
]

function AnimatedNumber({ value, duration = 2.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let isMounted = true
    const target = value

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= target) {
          clearInterval(interval)
          return target
        }
        return Math.min(prev + Math.ceil(target / (duration * 60)), target)
      })
    }, 1000 / 60)

    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [value, duration])

  return <>{count}</>
}

export default function WhyTRC() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-40 bg-black text-white relative overflow-hidden">
      {/* Elegant background elements - matching hero */}
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-copper-400 font-sans text-sm uppercase tracking-widest font-bold mb-4">Why Choose TRC</p>
          <h2 className="text-5xl sm:text-6xl font-sans font-black leading-tight mb-8 text-white">
            The Standard for Commercial Kitchen Cleaning
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            We combine specialized expertise, proven processes, and unwavering commitment to your operational success.
          </p>
        </motion.div>

        {/* Four pillars grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              {/* Number badge - HIGH CONTRAST copper on black */}
              <div className="mb-8 h-20">
                <span className="text-7xl font-black text-copper-400 tabular-nums drop-shadow-lg">
                  {reason.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-sans font-bold mb-4 group-hover:text-copper-400 transition-colors duration-300 text-white">
                {reason.title}
              </h3>
              <p className="text-gray-300 font-light leading-relaxed text-lg mb-6">
                {reason.description}
              </p>

              {/* Accent line */}
              <div className="w-0 group-hover:w-20 h-1.5 bg-gradient-to-r from-copper-600 to-copper-400 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Credentials section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-24"
        >
          <p className="text-copper-400 font-sans text-sm uppercase tracking-widest font-bold mb-12">By The Numbers</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 500, label: 'Restaurants Served' },
              { value: 25, label: 'Years Experience' },
              { value: 100, label: 'Certified Staff' },
              { value: 24, label: 'Hour Emergency Response' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center group"
              >
                <div className="text-6xl sm:text-7xl font-black text-copper-400 mb-3 group-hover:text-copper-300 transition-colors tabular-nums drop-shadow-lg">
                  <AnimatedNumber value={stat.value} duration={2.5} />
                  {stat.label.includes('Hour') ? '/7' : stat.label.includes('Years') ? '+' : '%'}
                </div>
                <p className="text-gray-300 font-light text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
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

export default function WhyTRC() {
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
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-32 bg-gradient-to-b from-navy-900 to-navy-950 text-white relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-32 w-72 h-72 bg-gradient-to-br from-copper-600 to-copper-900 rounded-full opacity-5 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-copper-400 font-sans text-sm uppercase tracking-widest font-bold mb-4">Why Choose TRC</p>
          <h2 className="text-5xl sm:text-6xl font-sans font-black leading-tight mb-8">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              {/* Number badge */}
              <div className="mb-6">
                <span className="text-6xl font-black text-copper-600 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                  {reason.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-sans font-bold mb-4 group-hover:text-copper-400 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                {reason.description}
              </p>

              {/* Accent line */}
              <div className="w-0 group-hover:w-16 h-1 bg-gradient-to-r from-copper-600 to-copper-400 transition-all duration-300 mt-6" />
            </motion.div>
          ))}
        </motion.div>

        {/* Credentials section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-navy-700 pt-24"
        >
          <p className="text-copper-400 font-sans text-sm uppercase tracking-widest font-bold mb-8">By The Numbers</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Restaurants Served' },
              { value: '25+', label: 'Years Experience' },
              { value: '100%', label: 'Certified Staff' },
              { value: '24/7', label: 'Emergency Response' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-5xl sm:text-6xl font-black text-copper-600 mb-3 group-hover:text-copper-500 transition-colors">
                  {stat.value}
                </div>
                <p className="text-gray-400 font-light text-sm uppercase tracking-wide">
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

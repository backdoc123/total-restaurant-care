'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const reasons = [
  {
    title: 'Pizza Oven Expertise',
    description: 'Specialized in conveyor oven cleaning. We understand the unique challenges of your equipment.',
  },
  {
    title: 'Fire Hazard Prevention',
    description: 'Grease buildup is a leading cause of kitchen fires. We eliminate it completely.',
  },
  {
    title: 'Regulatory Compliance',
    description: 'Ensure your kitchen meets all local health and safety codes. Avoid costly citations.',
  },
  {
    title: 'Minimal Downtime',
    description: 'Fast, efficient service. Get your kitchen back to full operation the same day.',
  },
]

export default function WhyTRC() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-24 bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 font-sans text-sm uppercase tracking-widest font-semibold">
            Why Choose TRC
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-4 mb-6">
            Professional Excellence Since Day One
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We combine expertise, speed, and professionalism to keep your kitchen safe and compliant.
          </p>
        </motion.div>

        {/* Four reasons grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-6"
            >
              {/* Icon circle */}
              <div className="flex-shrink-0">
                <motion.div
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center h-14 w-14 rounded-lg bg-gold-500 text-navy-900 font-bold text-xl"
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-serif font-bold mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-300 font-sans leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Credentials section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-slate-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">500+</div>
              <p className="text-slate-300 font-sans">Restaurants Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">25+</div>
              <p className="text-slate-300 font-sans">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">100%</div>
              <p className="text-slate-300 font-sans">Bonded & Insured</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">24h</div>
              <p className="text-slate-300 font-sans">Emergency Response</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

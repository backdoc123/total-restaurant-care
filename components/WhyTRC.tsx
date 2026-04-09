'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const reasons = [
  {
    title: 'Pizza Oven Expertise',
    description: 'Specialized in conveyor oven cleaning. We understand the unique challenges and requirements of your equipment.',
  },
  {
    title: 'Fire Hazard Prevention',
    description: 'Grease buildup is a leading cause of kitchen fires. We eliminate it completely and keep your operation safe.',
  },
  {
    title: 'Regulatory Compliance',
    description: 'Ensure your kitchen meets all local health and safety codes. Avoid costly citations and operational shutdowns.',
  },
  {
    title: 'Minimal Downtime',
    description: 'Fast, efficient service. Get your kitchen back to full operation the same day we work with you.',
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-copper-500 font-sans text-sm uppercase tracking-widest font-semibold">
            Why Choose TRC
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-4 mb-6">
            Professional Excellence Since Day One
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            We combine deep expertise, operational efficiency, and professionalism to keep your kitchen safe, compliant, and running smoothly.
          </p>
        </motion.div>

        {/* Four reasons grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-6"
            >
              {/* Icon badge */}
              <motion.div
                whileInView={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-copper-600 text-white font-bold text-xl font-serif">
                  {index + 1}
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-serif font-bold mb-3 text-white">
                  {reason.title}
                </h3>
                <p className="text-slate-300 font-sans leading-relaxed text-base">
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
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-20 border-t border-slate-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-copper-500 mb-2 font-serif">500+</div>
              <p className="text-slate-300 font-sans text-sm">Restaurants Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-copper-500 mb-2 font-serif">25+</div>
              <p className="text-slate-300 font-sans text-sm">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-copper-500 mb-2 font-serif">100%</div>
              <p className="text-slate-300 font-sans text-sm">Bonded & Insured</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-copper-500 mb-2 font-serif">24h</div>
              <p className="text-slate-300 font-sans text-sm">Emergency Response</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

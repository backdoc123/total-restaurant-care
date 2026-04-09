'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const services = [
  {
    title: 'Conveyor Oven Cleaning',
    description: 'Deep cleaning of pizza ovens and conveyor systems. Removes grease, carbon buildup, and fire hazards.',
    icon: '🔥',
  },
  {
    title: 'Commercial Kitchen Cleaning',
    description: 'Complete kitchen exhaust system cleaning including hoods, ducts, and vents.',
    icon: '🧹',
  },
  {
    title: 'Duct & Exhaust Cleaning',
    description: 'Professional duct cleaning to improve airflow and ensure compliance with safety codes.',
    icon: '💨',
  },
  {
    title: 'Equipment Cleaning',
    description: 'Deep cleaning of stoves, grills, fryers, and other kitchen equipment.',
    icon: '🧼',
  },
  {
    title: 'Scheduled Maintenance',
    description: 'Recurring cleaning programs tailored to your restaurant\'s needs.',
    icon: '📅',
  },
  {
    title: 'Emergency Services',
    description: 'Rapid response for urgent cleaning situations to minimize downtime.',
    icon: '⚡',
  },
]

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-sans text-sm uppercase tracking-widest font-semibold">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy-900 mt-4 mb-6">
            Everything Your Kitchen Needs
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Complete commercial kitchen cleaning solutions designed for restaurants, pizza chains, and food service operations.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="p-8 bg-slate-50 border border-slate-200 rounded-xl hover:border-gold-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 font-sans leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

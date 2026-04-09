'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const services = [
  {
    icon: '🔬',
    title: 'Deep Industrial Cleaning',
    description: 'Certified technicians use proven methods to remove grease, carbon, and buildup from conveyor ovens and kitchen systems.',
  },
  {
    icon: '🛡️',
    title: 'Fire Hazard Prevention',
    description: 'Eliminate dangerous grease accumulation. Our process ensures your kitchen stays safe and fire-compliant.',
  },
  {
    icon: '⚖️',
    title: 'Regulatory Compliance',
    description: 'Meet all local health codes and safety standards. Avoid costly violations and operational shutdowns.',
  },
  {
    icon: '⏱️',
    title: 'Minimal Downtime',
    description: 'Same-day service options keep your operation running. Efficient work minimizes kitchen interruption.',
  },
  {
    icon: '📅',
    title: 'Scheduled Maintenance',
    description: 'Recurring cleaning programs customized to your kitchen\'s needs. Prevents buildup before it becomes critical.',
  },
  {
    icon: '🚨',
    title: 'Emergency Response',
    description: '24-hour availability for urgent cleaning needs. Rapid deployment when you need it most.',
  },
]

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, .02) 0%, transparent 50%)'
      }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-24 max-w-3xl"
        >
          <p className="text-copper-600 font-sans text-sm uppercase tracking-widest font-bold mb-4">Our Services</p>
          <h2 className="text-5xl sm:text-6xl font-sans font-black text-navy-900 mb-8 leading-tight">
            Complete Kitchen Cleaning Solutions
          </h2>
          <p className="text-xl text-navy-700 font-light leading-relaxed">
            From conveyor ovens to exhaust systems, we provide comprehensive cleaning services that prioritize safety, compliance, and operational efficiency.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-8 bg-white border-2 border-navy-100 rounded-xl hover:border-copper-600 hover:border-opacity-50 hover:shadow-2xl hover:shadow-copper-600/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 inline-block group-hover:animate-float">
                {service.icon}
              </div>

              {/* Title with accent line */}
              <div className="mb-4">
                <h3 className="text-xl font-sans font-bold text-navy-900">
                  {service.title}
                </h3>
                <div className="w-0 group-hover:w-12 h-1 bg-gradient-to-r from-copper-600 to-copper-400 transition-all duration-300 mt-3" />
              </div>

              {/* Description */}
              <p className="text-navy-700 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

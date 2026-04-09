'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const services = [
  {
    title: 'Deep Industrial Cleaning',
    description: 'Certified technicians use proven methods to remove grease, carbon, and buildup from conveyor ovens and kitchen systems.',
  },
  {
    title: 'Fire Hazard Prevention',
    description: 'Eliminate dangerous grease accumulation. Our process ensures your kitchen stays safe and fire-compliant.',
  },
  {
    title: 'Regulatory Compliance',
    description: 'Meet all local health codes and safety standards. Avoid costly violations and operational shutdowns.',
  },
  {
    title: 'Minimal Downtime',
    description: 'Same-day service options keep your operation running. Efficient work minimizes kitchen interruption.',
  },
  {
    title: 'Scheduled Maintenance',
    description: 'Recurring cleaning programs customized to your kitchen\'s needs. Prevents buildup before it becomes critical.',
  },
  {
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
        delayChildren: 0.15,
      },
    },
  }

  const cardVariants: Variants = {
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
    <section className="py-40 bg-black relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, .02) 0%, transparent 50%)'
      }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-24 max-w-3xl"
        >
          <p className="text-copper-500 font-sans text-sm uppercase tracking-widest font-bold mb-4">Our Services</p>
          <h2 className="text-5xl sm:text-6xl font-sans font-black text-white mb-8 leading-tight">
            Complete Kitchen Cleaning Solutions
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
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
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group p-8 bg-black border-2 border-copper-600 border-opacity-40 rounded-xl hover:border-copper-500 hover:border-opacity-80 hover:bg-black hover:shadow-2xl hover:shadow-copper-600/20 transition-all duration-300"
            >
              {/* Title with accent line */}
              <div className="mb-6">
                <h3 className="text-2xl font-sans font-bold text-white group-hover:text-copper-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="w-0 group-hover:w-16 h-1.5 bg-gradient-to-r from-copper-600 to-copper-400 transition-all duration-300 mt-4" />
              </div>

              {/* Description */}
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

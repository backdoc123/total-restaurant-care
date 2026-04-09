'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const services = [
  {
    title: 'Conveyor Oven Cleaning',
    description: 'Deep industrial cleaning of pizza ovens and conveyor systems. Removes grease buildup, carbon deposits, and fire hazards. Certified process ensures optimal equipment performance.',
  },
  {
    title: 'Kitchen Hood & Duct Cleaning',
    description: 'Complete exhaust system cleaning including hoods, ducts, and vents. Meets all local fire codes and health department requirements. Prevents costly violations.',
  },
  {
    title: 'Equipment Deep Cleaning',
    description: 'Professional cleaning of stoves, grills, fryers, and specialized kitchen equipment. Extends equipment lifespan and maintains food safety standards.',
  },
  {
    title: 'Fire Hazard Remediation',
    description: 'Comprehensive grease removal to eliminate fire risks. Certified technicians follow industry best practices. Your operation stays safe and compliant.',
  },
  {
    title: 'Scheduled Maintenance Programs',
    description: 'Recurring cleaning plans customized to your kitchen\'s usage and requirements. Prevents buildup, reduces emergency calls, minimizes downtime.',
  },
  {
    title: 'Emergency & Rapid Response',
    description: '24-hour emergency cleaning services available. Same-day appointments to minimize operational interruption. Rapid deployment for urgent situations.',
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
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-orange-600 font-sans text-sm uppercase tracking-widest font-bold">
            Our Services
          </span>
          <h2 className="text-5xl sm:text-6xl font-sans font-black text-black mt-4 mb-8">
            Complete Kitchen Cleaning Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl font-light leading-relaxed">
            From conveyor ovens to hood systems, we provide comprehensive cleaning services that keep your commercial kitchen safe, compliant, and operating at peak efficiency.
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
              className="p-8 bg-gray-50 border-l-4 border-orange-600 rounded-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-3 h-3 bg-orange-600 mt-2 flex-shrink-0" />
                <h3 className="text-2xl font-sans font-bold text-black">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 font-sans leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CtaImage() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, .02) 0%, transparent 50%)'
      }} />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-4xl sm:text-5xl font-sans font-black text-white mb-6">
              Professional Results Every Time
            </h3>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
              Our certified technicians deliver superior cleaning results using industry-leading methods and equipment. Every job is completed to the highest standards, ensuring your kitchen equipment performs at peak efficiency.
            </p>
            <div className="space-y-4">
              {[
                'Deep cleaning of all conveyor oven surfaces',
                'Grease and carbon removal from hard-to-reach areas',
                'Professional-grade equipment and techniques',
                'Minimal downtime with efficient service delivery'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-copper-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 font-light">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-2 border-copper-600 border-opacity-40 hover:border-copper-500 hover:border-opacity-80 transition-all duration-300 group">
                {/* Animated accent */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-copper-600 to-copper-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Image */}
                <Image
                  src="/cta-oven.jpg"
                  alt="Clean Conveyor Oven"
                  width={600}
                  height={400}
                  className="relative z-10 w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

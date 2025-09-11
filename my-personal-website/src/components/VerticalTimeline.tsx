'use client'

import { motion } from 'framer-motion'

type Item = {
  date: string
  title: string
  subtitle?: string
  description: string
}

interface Props {
  items: Item[]
}

export default function VerticalTimeline({ items }: Props) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-start"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            {/* Content card */}
            <div className="ml-6 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#1b1b1b] border border-gray-200 dark:border-[#333] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1 sm:mb-0">
                    {item.date}
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                
                {item.subtitle && (
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                    {item.subtitle}
                  </p>
                )}
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

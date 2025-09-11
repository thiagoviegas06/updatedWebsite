'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Item = {
  date: string
  title: string
  subtitle?: string
  description: string
}

interface Props {
  items: Item[]
}

export default function HorizontalTimeline({ items }: Props) {
  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full h-[250px] flex items-center justify-center overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#1a1a1a] p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-[#333] transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#1a1a1a] p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-[#333] transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Timeline Card */}
      <div className="w-[320px] h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.article
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full h-fit bg-white dark:bg-[#1b1b1b] border border-gray-200 dark:border-[#333] rounded-xl p-6 shadow"
          >
            <p className="text-sm text-blue-600 font-medium">{items[current].date}</p>
            <h3 className="text-lg font-semibold mt-1">{items[current].title}</h3>
            {items[current].subtitle && (
              <p className="text-sm italic text-gray-500 dark:text-gray-400">{items[current].subtitle}</p>
            )}
            <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm leading-relaxed">
              {items[current].description}
            </p>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  )
}

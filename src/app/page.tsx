'use client'

import { motion } from 'framer-motion'
import { Code, Cpu, Gamepad2, Brain, Shield, Zap, ArrowRight } from 'lucide-react'

export default function HomePage() {
  const techIcons = [
    { icon: Code, label: 'Development' },
    { icon: Brain, label: 'AI/ML' },
    { icon: Cpu, label: 'Systems' },
    { icon: Shield, label: 'Security' },
    { icon: Gamepad2, label: 'Gaming' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  }

  return (
    <main className="min-h-screen relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen px-6 py-12 flex flex-col items-center justify-center text-center"
      >
        {/* Main Content */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Thiago
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
          >
            Computer Scientist & AI Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science graduate</span> from Drexel University, 
            currently pursuing my <span className="font-semibold text-purple-600 dark:text-purple-400">Master's at NYU</span> with a focus on 
            <span className="font-semibold text-indigo-600 dark:text-indigo-400"> AI & Machine Learning</span>. 
            I love building tools that help people be more efficient and productive in their daily lives. 
          </motion.p>

          {/* Areas of Interest Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200"
          >
            Some of my areas of interest
          </motion.h2>

          {/* Tech Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {techIcons.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-xl group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/portfolio"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="/contact"
              className="group bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Let's Connect
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

          {/* Fun Stats */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '5+', label: 'Years Learning' },
              { number: '2', label: 'Co-ops Completed' },
              { number: '∞', label: 'Cups of Coffee' },
            ].map(({ number, label }, index) => (
              <motion.div
                key={label}
                className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  )
}

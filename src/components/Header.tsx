'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Code, User, Briefcase, Mail } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: '/about', label: 'About', icon: User },
    { href: '/portfolio', label: 'Portfolio', icon: Briefcase },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  const linkClass = (href: string) => {
    const isActive = pathname === href
    return `group relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
    }`
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <Image 
                src="/tv-logo.png" 
                alt="Thiago Viegas logo" 
                width={48} 
                height={48} 
                priority 
                className="rounded-xl group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Thiago Viegas
              </span>
              <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                Neuroinformatics Researcher
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Navigation */}
        <motion.nav 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navItems.map(({ href, label, icon: Icon }, index) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link href={href} className={linkClass(href)}>
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">{label}</span>
                {pathname === href && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Tech Badge */}
        <motion.div
          className="hidden lg:flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl border border-blue-200 dark:border-blue-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
            Available for Internships
          </span>
        </motion.div>
      </div>
    </header>
  )
}

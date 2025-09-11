import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header' // ✅ your custom header
import AnimatedBackground from '@/components/AnimatedBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thiago Viegas',
  description: 'Personal Portfolio of Thiago Viegas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-black dark:text-white`}>
        <AnimatedBackground />
        <Header /> {/* 👈 Header is rendered on all pages */}
        <main>{children}</main>
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header' // ✅ your custom header

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
      <body className={`${inter.className} bg-gray-50 dark:bg-[#121212] text-black dark:text-white`}>
        <Header /> {/* 👈 Header is rendered on all pages */}
        <main>{children}</main>
      </body>
    </html>
  )
}

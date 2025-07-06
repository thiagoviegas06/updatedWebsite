'use client'                    

// src/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `relative transition hover:text-blue-600 ${
      pathname === href
        ? 'text-blue-600 font-semibold'
        : 'text-gray-700 dark:text-gray-200'
    }`;

  return (
    <header className="bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-[#333]">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/tv-logo.png" alt="Thiago Viegas logo" width={64} height={64} priority />
          <span className="sr-only">Home</span>
        </Link>

        <nav className="flex gap-8 text-sm">
          <Link href="/about"     className={linkClass('/about')}>About Me</Link>
          <Link href="/portfolio" className={linkClass('/portfolio')}>Portfolio</Link>
          <Link href="/contact"   className={linkClass('/contact')}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-950/95 to-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo_no_white.png"
              alt="PladeX Logo"
              width={40}
              height={40}
              className="w-10 h-10 group-hover:scale-110 transition-transform"
            />
            <span className="font-bold text-xl text-white hidden sm:inline">PladeX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link href="/services" className="text-slate-200 hover:text-white transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-slate-200 hover:text-white transition-colors font-medium">
              About
            </Link>
            <Link href="/projects" className="text-slate-200 hover:text-white transition-colors font-medium">
              Projects
            </Link>
            <Link href="/contact" className="text-slate-200 hover:text-white transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div>
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-slate-600/50 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/services"
                className="text-slate-200 hover:text-white transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-slate-200 hover:text-white transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-slate-200 hover:text-white transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-slate-200 hover:text-white transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

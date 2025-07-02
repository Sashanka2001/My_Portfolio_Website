"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavigationProps {
  activeSection: string
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  scrollToSection: (section: string) => void
}

export default function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) {
  const pathname = usePathname()

  const navItems = [
    { name: "home", label: "Home", href: "/" },
    { name: "about", label: "About", href: "/about" },
    { name: "projects", label: "Projects", href: "/projects" },
    { name: "contact", label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-white tracking-wide hover:text-teal-400 transition-colors">
        
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors text-sm tracking-wide ${
                  pathname === item.href ? "text-teal-400 font-semibold" : "text-gray-300 hover:text-teal-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left py-2 text-gray-300 hover:text-teal-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

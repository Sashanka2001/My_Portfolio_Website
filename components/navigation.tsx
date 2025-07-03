 "use client"

import { Menu, X, User, Home, FolderOpen, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"

interface NavigationProps {
  activeSection: string
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  scrollToSection: (section: string) => void
}

export default function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) {
  const pathname = usePathname()

  const navItems = [
    { name: "home", label: "Home", href: "/", icon: Home },
    { name: "about", label: "About", href: "/about", icon: User },
    { name: "projects", label: "Projects", href: "/projects", icon: FolderOpen },
    { name: "contact", label: "Contact", href: "/contact", icon: Mail },
  ]

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-md z-50 border-b border-slate-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-bold text-white tracking-wide hover:text-teal-400 transition-all duration-300 group">
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm tracking-wide ${
                    isActive
                      ? "bg-teal-500/20 text-teal-400 font-semibold border border-teal-500/30"
                      : "text-gray-300 hover:text-teal-400 hover:bg-slate-700/50"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-slate-700/50 text-white hover:bg-slate-600/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            <Card className="bg-slate-800/50 border-slate-600/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="space-y-2">
                  {navItems.map((item) => {
                    const IconComponent = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "bg-teal-500/20 text-teal-400 font-semibold border border-teal-500/30"
                            : "text-gray-300 hover:text-teal-400 hover:bg-slate-700/50"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isActive ? "bg-teal-500/20" : "bg-slate-600/50"
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </nav>
  )
}

 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub (Personal)",
      icon: Github,
      href: "https://github.com/Sashanka2001",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-100",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-100",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:chamudisashanka01@gmail.com",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-100",
    },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-8 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content - Certificate Style - Made Smaller */}
        <div className="bg-slate-700/50 rounded-2xl p-6 shadow-lg mb-6 backdrop-blur-sm border border-slate-600/30">
          <div className="grid md:grid-cols-3 gap-6">
            {/* About Section */}
            <Card className="bg-slate-600/30 border-slate-500/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="w-4 h-4 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Sashanka Rathnayaka</h3>
                <p className="text-slate-300 text-xs mb-3 leading-relaxed">
                  Computer Science student passionate about creating innovative web solutions and building impactful
                  digital experiences.
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-7 h-7 rounded-full bg-slate-600/50 flex items-center justify-center text-slate-300 transition-all duration-300 ${social.color} ${social.bgColor}`}
                      >
                        <IconComponent className="w-3 h-3" />
                      </Link>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-slate-600/30 border-slate-500/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-3 text-white text-sm">Quick Links</h4>
                <ul className="space-y-1">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-300 hover:text-teal-400 transition-colors text-xs flex items-center gap-2 py-1"
                      >
                        <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-slate-600/30 border-slate-500/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <Mail className="w-4 h-4 text-green-600" />
                </div>
                <h4 className="font-semibold mb-3 text-white text-sm">Get In Touch</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-3 h-3 text-red-400" />
                    <a href="mailto:chamudisashanka01@gmail.com" className="hover:text-red-400 transition-colors">
                      chamudisashanka01@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    <span>Sri Lanka - Colombo</span>
                  </div>
                  <div className="mt-3">
                    <span className="px-2 py-1 bg-teal-600/20 text-teal-300 rounded-full text-xs border border-teal-500/30">
                      Available for Internships
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Copyright - Made Smaller */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-full border border-slate-600/30">
            <span className="text-slate-300 text-xs">© 2025 Sashanka Rathnayaka</span>
            <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
            <span className="text-slate-400 text-xs">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

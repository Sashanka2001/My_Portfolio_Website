"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sashanka Rathnayaka</h3>
            <p className="text-slate-300 mb-4">
              Computer Science student passionate about creating innovative web solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Sashanka2001" className="text-slate-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:your.email@example.com" className="text-slate-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-300">© 2025 Sashanka Rathnayaka</p>
        </div>
      </div>
    </footer>
  )
}

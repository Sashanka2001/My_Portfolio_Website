"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-slate-600 mb-8">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
            discuss projects, internships, or just connect!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/IT23231528chamudi"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
            >
              <Github size={24} />
              <span>GitHub (Work)</span>
            </a>

            <a
              href="https://github.com/Sashanka2001"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
            >
              <Github size={24} />
              <span>GitHub (Personal)</span>
            </a>

            <a
              href="chamudisashanka01@gamil.com"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

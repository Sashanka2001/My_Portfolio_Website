 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, PenSquare } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("contact")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const contactLinks = [
    {
      id: 1,
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/",
      description: "Connect with me professionally",
      color:
        "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30",
      iconColor: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    },
    {
      id: 2,
      name: "GitHub (Work)",
      icon: Github,
      href: "https://github.com/IT23231528chamudi",
      description: "View my work projects",
       color:
        "bg-gray-50 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900/30",
      iconColor: "bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400",
    },
    {
      id: 3,
      name: "GitHub (Personal)",
      icon: Github,
      href: "https://github.com/Sashanka2001",
      description: "Explore my personal projects",
      color:
        "bg-gray-50 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900/30",
      iconColor: "bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400",
    },
    {
      id: 4,
      name: "Medium",
      icon: PenSquare,
      href: "https://medium.com/@chamudi_sashanka",
      description:  "Read my articles",
      color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30",
       iconColor:  "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    },
    
    {
      id: 5,
      name: "Email",
      icon: Mail,
      href: "mailto:chamudisashanka01@gmail.com.com",
      description: "Send me a message",
      color:
        "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30",
      iconColor: "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400",
    },
  ]

  const isExternal = (url) => {
    return url.startsWith("http") || url.startsWith("mailto:")
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-10 lg:px-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 animate-scale-in"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
            discuss projects just connect!
          </p>
        </div>

        {/* Contact Links Grid */}
        <div
          className={`bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden transition-all duration-1000 ${
            isVisible ? "animate-slide-up animate-delay-200" : "opacity-0"
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-2xl"></div>

           <div className="flex flex-nowrap justify-center gap-4 overflow-x-auto relative">
            {contactLinks.map((contact, index) => {
              const IconComponent = contact.icon
              const ButtonContent = (
                <span
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border hover:scale-105 hover:shadow-lg ${contact.color}`}
                >
                  Connect
                </span>
              )

              return (
                <Card
                  key={contact.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover-lift card-hover dark:bg-slate-700 border-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 animate-bounce-in overflow-hidden relative"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float ${contact.iconColor}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-3 text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 dark:group-hover:from-slate-100 dark:group-hover:to-slate-300 transition-all duration-300">
                      {contact.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {contact.description}
                    </p>

                    {isExternal(contact.href) ? (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                         className="relative z-10"
                      >
                        {ButtonContent}
                      </a>
                    ) : (
                      <Link href={contact.href} className="relative z-10">
                        {ButtonContent}
                         </Link>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg"></div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

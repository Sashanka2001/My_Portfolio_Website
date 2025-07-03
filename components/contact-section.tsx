 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const contactLinks = [
    {
      id: 1,
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/",
      description: "Connect with me professionally",
      color: "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100",
      iconColor: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      name: "GitHub (Work)",
      icon: Github,
      href: "https://github.com/IT23231528chamudi",
      description: "View my work projects",
      color: "bg-green-50 text-green-600 border-green-100 hover:bg-green-100",
      iconColor: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      name: "GitHub (Personal)",
      icon: Github,
      href: "https://github.com/Sashanka2001",
      description: "Explore my personal projects",
      color: "bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100",
      iconColor: "bg-gray-100 text-gray-600",
    },
    {
      id: 4,
      name: "Email",
      icon: Mail,
      href: "mailto:chamudisashanka01@gmail.com",
      description: "Send me a message",
      color: "bg-red-50 text-red-600 border-red-100 hover:bg-red-100",
      iconColor: "bg-red-100 text-red-600",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 sm:px-10 lg:px-20 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
            discuss projects, internships, or just connect!
          </p>
        </div>

        {/* Contact Links Grid - Certificate Style */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactLinks.map((contact) => {
              const IconComponent = contact.icon
              return (
                <Card key={contact.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${contact.iconColor}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">{contact.name}</h4>
                    <p className="text-xs text-slate-600 mb-4">{contact.description}</p>

                    <Link
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-medium transition-colors border ${contact.color}`}
                    >
                      Connect
                    </Link>
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

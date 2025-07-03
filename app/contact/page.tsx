 "use client"

import type React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Mail, MapPin, User } from "lucide-react"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.location.href = "/"
      return
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      id: 1,
      icon: Mail,
      title: "Email (Personal)",
      value: "sashankarathnayaka01@gmail.com",
      link: "mailto:sashankarathnayaka01@gmail.com",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      icon: Mail,
      title: "Email (Work)",
      value: "it23231528@my.sliit.lk",
      link: "mailto:it23231528@my.sliit.lk",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Location",
      value: "R.M.H.B.Rathnayaka, wawaegedara, pothuhera",
      link: "R.M.H.B.Rathnayaka, wawaegedara, pothuhera",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">Get In Touch</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-200 rounded-2xl blur-xl opacity-50"></div>
                <img
                  src="https://pagedone.io/asset/uploads/1696245837.png"
                  alt="Contact illustration"
                  className="relative w-full h-auto rounded-2xl shadow-lg border border-slate-200/50"
                  style={{
                    filter: "hue-rotate(210deg) saturate(0.8) brightness(1.1)",
                  }}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details - Certificate Style */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Contact Information</h3>
                <div className="grid gap-4">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon
                    return (
                      <Card key={info.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${info.color}`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-800 text-sm">{info.title}</h4>
                              <a
                                href={info.link}
                                className="text-slate-600 hover:text-teal-600 transition-colors text-xs"
                              >
                                {info.value}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Availability - Certificate Style */}
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Currently Available</h3>
                      <p className="text-slate-600 mb-4">
                        I'm actively seeking internship opportunities and freelance projects. Let's discuss how I can
                        contribute to your team!
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-sm border border-teal-200">
                      Internships
                    </span>
                    <span className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-sm border border-teal-200">
                      Collaborations
                    </span>
                    <span className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-sm border border-teal-200">
                      Freelance Projects
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Mail, MapPin,Send, MessageCircle } from "lucide-react"

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
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email (Pesonal)",
      value: "sashankarathnayaka01@gmail.com",
      link: "sashankarathnayaka01@gmail.com",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email (Work)",
      value: "it23231528@my.sliit.lk",
      link: "it23231528@my.sliit.lk",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Sri Lanka - Colombo",
      link: "#",
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
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl blur-xl opacity-50"></div>
                <img
                  src="https://pagedone.io/asset/uploads/1696245837.png"
                  alt="Contact illustration"
                  className="relative w-full h-auto rounded-2xl shadow-lg border border-slate-200/50"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">

              {/* Contact Details */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{info.title}</h3>
                        <a href={info.link} className="text-slate-600 hover:text-teal-600 transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

               {/* Availability */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Currently Available</h3>
                  <p className="text-slate-600 mb-4">
                    I'm actively seeking internship opportunities and freelance projects. Let's discuss how I can
                    contribute to your team!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">Internships</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">Collaborations</span>
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

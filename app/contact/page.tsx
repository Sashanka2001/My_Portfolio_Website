"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"

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
      title: "Email",
      value: "sashanka.rathnayaka@example.com",
      link: "mailto:sashanka.rathnayaka@example.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+94 XX XXX XXXX",
      link: "tel:+94XXXXXXXX",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Sri Lanka",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Sashanka2001",
      color: "text-gray-800 hover:text-gray-900",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "WhatsApp",
      url: "#",
      color: "text-green-600 hover:text-green-700",
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
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
                  <Send className="w-6 h-6 text-teal-600" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

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

              {/* Social Links */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors ${social.color}`}
                      >
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                          {social.icon}
                        </div>
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="shadow-lg bg-teal-50 border-teal-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-teal-800 mb-2">Currently Available</h3>
                  <p className="text-teal-700 mb-4">
                    I'm actively seeking internship opportunities and freelance projects. Let's discuss how I can
                    contribute to your team!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-200 text-teal-800 rounded-full text-sm">Internships</span>
                    <span className="px-3 py-1 bg-teal-200 text-teal-800 rounded-full text-sm">Freelance</span>
                    <span className="px-3 py-1 bg-teal-200 text-teal-800 rounded-full text-sm">Collaborations</span>
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

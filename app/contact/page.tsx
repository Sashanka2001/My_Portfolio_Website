 "use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, User, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("contact")
  const [isVisible, setIsVisible] = useState(false)
  const [contactInfo, setContactInfo] = useState([
    {
      id: 1,
      icon: Mail,
      title: "Email (Personal)",
      value: "chamudisashanka01@gmail.com",
      link: "mailto:chamudisashanka01@gmail.com",
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    },
    {
      id: 2,
      icon: Mail,
      title: "Email (Work)",
      value: "it23231528@my.sliit.lk",
      link: "mailto:it23231528@my.sliit.lk",
      color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Location",
      value: "R.M.H.B.Rathnayaka, wawaegedara, pothuhera",
      link: "R.M.H.B.Rathnayaka, wawaegedara, pothuhera",
      color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    },
  ])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.location.href = "/"
      return
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 gradient-text mb-4">
              Let's Connect
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Image */}
            <div
              className={`flex items-center justify-center transition-all duration-1000 ${isVisible ? "animate-fade-in-left animate-delay-200" : "opacity-0"}`}
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-200 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl blur-xl opacity-50"></div>
                <img
                  src="https://pagedone.io/asset/uploads/1696245837.png"
                  alt="Contact illustration"
                  className="relative w-full h-auto rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50"
                  style={{
                    filter: "hue-rotate(210deg) saturate(0.8) brightness(1.1)",
                  }}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-right animate-delay-300" : "opacity-0"}`}
            >
              {/* Contact Details - Certificate Style */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift card-hover">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center gradient-text">
                  Contact Information
                </h3>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <Card
                        key={info.id}
                        className="hover:shadow-lg transition-all duration-300 hover-lift dark:bg-slate-700 border-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 animate-bounce-in"
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${info.color}`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{info.title}</h4>
                              <a
                                href={info.link}
                                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-xs"
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
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift card-hover dark:bg-slate-800 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 animate-bounce-in animate-delay-700">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/20 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 gradient-text">
                        Currently Available
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        I'm actively seeking SE internship opportunities and freelance projects. Let's discuss how I can
                        contribute to your team!
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-full text-sm border border-teal-200 dark:border-teal-700">
                      SE Internships
                    </span>
                    <span className="px-3 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-full text-sm border border-teal-200 dark:border-teal-700">
                      Collaborations
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

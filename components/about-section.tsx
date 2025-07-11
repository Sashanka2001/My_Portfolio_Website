 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Code, Database, Globe, Smartphone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AboutSection() {
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

    const section = document.getElementById("about")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development with modern frameworks",
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-100 dark:border-blue-800",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture and optimization",
      color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
      borderColor: "border-green-100 dark:border-green-800",
    },
    {
      icon: Globe,
      title: "API Development",
      description: "RESTful APIs and microservices",
      color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-100 dark:border-purple-800",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first, user-friendly interfaces",
      color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
      borderColor: "border-orange-100 dark:border-orange-800",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-teal-200/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4 gradient-text">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-4 animate-scale-in"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Passionate Computer Science student dedicated to creating innovative solutions through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - About Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? "animate-fade-in-left animate-delay-200" : "opacity-0"}`}
          >
            {/* Profile Card */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift card-hover dark:bg-slate-800 animate-bounce-in">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Hello I'm Sashanka</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4 animate-scale-in"></div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p className="animate-fade-in-up animate-delay-400">
                    I'm a dedicated Computer Science student with a passion for technology and problem-solving. My
                    journey in programming started with curiosity and has evolved into a deep commitment to creating
                    meaningful software solutions.
                  </p>
                  <p className="animate-fade-in-up animate-delay-500">
                    I enjoy working on both <b>front-end and back-end development</b> with experience in modern web
                    technologies. I'm always eager to learn new technologies and take on challenging projects that push
                    my boundaries.
                  </p>
                </div>

              

                <Link href="/about">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white group transition-all duration-300 hover-lift btn-ripple animate-fade-in-up animate-delay-800">
                    Learn More About Me
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Skills Grid */}
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? "animate-fade-in-right animate-delay-300" : "opacity-0"}`}
          >
            {/* Skills Grid - Certificate Style */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl card-hover">
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-500 hover-lift card-hover ${skill.borderColor} dark:bg-slate-700 animate-bounce-in`}
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${skill.color} animate-float`}
                          style={{ animationDelay: `${index * 0.5}s` }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2 text-sm">{skill.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {skill.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

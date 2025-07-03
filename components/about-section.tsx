 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Code, Database, Globe, Smartphone, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development with modern frameworks",
      color: "bg-blue-100 text-blue-600",
      borderColor: "border-blue-100",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture and optimization",
      color: "bg-green-100 text-green-600",
      borderColor: "border-green-100",
    },
    {
      icon: Globe,
      title: "API Development",
      description: "RESTful APIs and microservices",
      color: "bg-purple-100 text-purple-600",
      borderColor: "border-purple-100",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first, user-friendly interfaces",
      color: "bg-orange-100 text-orange-600",
      borderColor: "border-orange-100",
    },
  ]

  return (
    <section id="about" className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate Computer Science student dedicated to creating innovative solutions through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - About Content */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Hello! I'm Sashanka</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4"></div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    I'm a dedicated Computer Science student with a passion for technology and problem-solving. My
                    journey in programming started with curiosity and has evolved into a deep commitment to creating
                    meaningful software solutions.
                  </p>
                  <p>
                    I enjoy working on both front-end and back-end development, with experience in modern web
                    technologies. I'm always eager to learn new technologies and take on challenging projects that push
                    my boundaries.
                  </p>
                </div>

                {/* Info Tags */}
                <div className="flex flex-wrap gap-4 mt-6 mb-6">
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-full text-slate-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-green-100 rounded-full text-green-600 text-sm">
                    <Mail className="w-4 h-4" />
                    <span>Available for opportunities</span>
                  </div>
                </div>

                <Link href="/about">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white group transition-all duration-300">
                    Learn More About Me
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="space-y-6">
            
            {/* Skills Grid - Certificate Style */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${skill.borderColor}`}
                    >
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${skill.color}`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm">{skill.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{skill.description}</p>
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

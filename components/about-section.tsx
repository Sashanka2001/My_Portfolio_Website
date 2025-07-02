"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Code, Database, Globe, Smartphone } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Hello! I'm Sashanka</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm a dedicated Computer Science student with a passion for technology and problem-solving. My journey in
              programming started with curiosity and has evolved into a deep commitment to creating meaningful software
              solutions.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I enjoy working on both front-end and back-end development, with experience in modern web technologies.
              I'm always eager to learn new technologies and take on challenging projects that push my boundaries.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={16} />
                <span>Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail size={16} />
                <span>Available for opportunities</span>
              </div>
            </div>
            <Link href="/about">
              <Button className="bg-teal-600 hover:bg-teal-700">Learn More About Me</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <Code className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h4 className="font-semibold text-slate-800">Web Development</h4>
                <p className="text-sm text-slate-600 mt-2">Full-stack development with modern frameworks</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Database className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <h4 className="font-semibold text-slate-800">Database Design</h4>
                <p className="text-sm text-slate-600 mt-2">Efficient database architecture and optimization</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <h4 className="font-semibold text-slate-800">API Development</h4>
                <p className="text-sm text-slate-600 mt-2">RESTful APIs and microservices</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Smartphone className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <h4 className="font-semibold text-slate-800">Responsive Design</h4>
                <p className="text-sm text-slate-600 mt-2">Mobile-first, user-friendly interfaces</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

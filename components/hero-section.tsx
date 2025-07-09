 "use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (section: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-blue-900/20"></div>
        <div
          className="w-full h-full absolute inset-0 bg-no-repeat bg-top opacity-30"
          style={{
            backgroundImage: "url('/2.jpg')",
            backgroundSize: "55%",
            backgroundPosition: "top right",
          }}
        ></div>
        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>
      </div>
      

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-center min-h-screen py-20">
          {/* Centered Content */}
          <div className="text-white space-y-8 text-center max-w-4xl">
            {/* Main Title with Certificate-style accent */}
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 tracking-tight">
                <span className="block text-teal-400">Sashanka</span>
                <span className="block">Rathnayaka</span>
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-light tracking-wide text-slate-300">
                 Computer Science Undergraduate
              </p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Passionate about creating innovative web solutions and building impactful digital experiences through
                modern technologies.
              </p>
            </div>

            {/* Enhanced Action Buttons - Made Smaller */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-base font-semibold tracking-wide group transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                WORK WITH ME
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-slate-900 px-6 py-3 text-base font-semibold tracking-wide bg-white/5 backdrop-blur-sm transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                VIEW PROJECTS
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-slate-900 px-6 py-3 text-base font-semibold tracking-wide bg-white/5 backdrop-blur-sm transition-all duration-300"
                asChild
              >
                 
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

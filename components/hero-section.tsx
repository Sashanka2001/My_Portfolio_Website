  "use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Github } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (section: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-[#0a0f1c] via-[#0f2b61] to-[#e6f0ff] absolute inset-0"></div>
        <div
          className="w-full h-full absolute inset-0 bg-no-repeat bg-top opacity-40"
          style={{
            backgroundImage: "url('/2.jpg')",
            backgroundSize: "59%",
            backgroundPosition: "top right",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Text */}
          <div className="text-white">
            <h1 className="text-sans-600 text-5xl md:text-6xl lg:text-7xl font-light leading-relaxed mb-4 tracking-tight">
              Sashanka
              <br />
              Rathnayaka
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 tracking-wide">COMPUTER SCIENCE - (UG Student)</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold tracking-wide bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                WORK WITH ME
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold tracking-wide bg-transparent"
                onClick={() => scrollToSection("projects")}
              >
                VIEW PROJECTS
              </Button>
            </div>
          </div>
          {/* Right Column (optional) */}
          <div className="text-white space-y-6 lg:text-right">
            {/* Optional content here */}
          </div>
        </div>
      </div>
    </section>
  )
}

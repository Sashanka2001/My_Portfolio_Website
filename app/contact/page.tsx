 "use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, User, Mail } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("contact")
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const contactInfo = [
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
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      const section = document.getElementById("contact-page")
      canvas.width = window.innerWidth
      canvas.height = section?.scrollHeight || window.innerHeight
    }

    setCanvasSize()

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 95; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.5,
        alpha: Math.random() * 0.45 + 0.25,
      })
    }

    let animId = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(94,234,212,${p.alpha})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(94,234,212,${0.11 * (1 - dist / 130)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener("resize", setCanvasSize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.location.href = "/"
      return
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="contact-page" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#080e18]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(20,80,80,0.18)_0%,transparent_70%),radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(10,40,80,0.2)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 z-0 opacity-25 bg-[linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[size:34px_34px]"></div>
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(45,212,191,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.35)_1px,transparent_1px)] bg-[size:170px_170px]"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />

      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 gradient-text mb-4">
              Let's Connect
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Image */}
            <div
              className={`flex items-center justify-center transition-all duration-1000 ${isVisible ? "animate-fade-in-left animate-delay-200" : "opacity-0"}`}
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-2xl blur-xl opacity-50"></div>
                <img
                  src="https://pagedone.io/asset/uploads/1696245837.png"
                  alt="Contact illustration"
                  className="relative w-full h-auto rounded-2xl shadow-lg border border-cyan-200/15 [filter:hue-rotate(210deg)_saturate(0.8)_brightness(1.1)]"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-right animate-delay-300" : "opacity-0"}`}
            >
              {/* Contact Details - Certificate Style */}
              <div className="bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl rounded-3xl p-8 shadow-[0_30px_90px_rgba(0,0,0,0.5)] hover:shadow-[0_35px_100px_rgba(0,0,0,0.55)] transition-all duration-500 hover-lift card-hover">
                <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center gradient-text">
                  Contact Information
                </h3>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <Card
                        key={info.id}
                        className="hover:shadow-[0_24px_48px_rgba(8,145,178,0.24)] transition-all duration-300 hover-lift border border-cyan-300/20 bg-slate-900/55 backdrop-blur-xl animate-bounce-in"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center ${info.color}`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-100 text-sm">{info.title}</h4>
                              <a
                                href={info.link}
                                className="text-slate-300 hover:text-teal-300 transition-colors text-xs"
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
              <Card className="shadow-[0_30px_90px_rgba(0,0,0,0.5)] hover:shadow-[0_24px_48px_rgba(8,145,178,0.24)] transition-all duration-500 hover-lift card-hover border border-cyan-300/20 bg-slate-900/55 backdrop-blur-xl animate-bounce-in animate-delay-700">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-teal-500/20 border border-teal-300/20 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-teal-200" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-100 mb-2 gradient-text">
                        Currently Available
                      </h3>
                      <p className="text-slate-300 mb-4">
                         Currently working as a Software Engineer Intern while actively seeking freelance projects and collaboration opportunities. 
                         I'd love to discuss how I can contribute to your project!
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-800/80 text-slate-200 rounded-full text-sm border border-slate-600/40">
                      Freelance Projects
                    </span>
                    <span className="px-3 py-1 bg-slate-800/80 text-slate-200 rounded-full text-sm border border-slate-600/40">
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

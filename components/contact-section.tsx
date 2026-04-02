 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, PenSquare } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      const section = document.getElementById("contact")
      canvas.width = window.innerWidth
      canvas.height = section?.offsetHeight || window.innerHeight
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("contact")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const contactLinks = [
    {
      id: 1,
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/",
      description: "Connect with me professionally",
      color:
        "bg-blue-900/25 text-blue-100 border-blue-300/20 hover:bg-blue-900/35",
      iconColor: "bg-blue-500/20 text-blue-200",
    },
    {
      id: 2,
      name: "GitHub (Work)",
      icon: Github,
      href: "https://github.com/IT23231528chamudi",
      description: "View my work projects",
       color:
        "bg-slate-800/75 text-slate-200 border-slate-500/25 hover:bg-slate-700/80",
      iconColor: "bg-slate-700/60 text-slate-200",
    },
    {
      id: 3,
      name: "GitHub (Personal)",
      icon: Github,
      href: "https://github.com/Sashanka2001",
      description: "Explore my personal projects",
      color:
        "bg-slate-800/75 text-slate-200 border-slate-500/25 hover:bg-slate-700/80",
      iconColor: "bg-slate-700/60 text-slate-200",
    },
    {
      id: 4,
      name: "Medium",
      icon: PenSquare,
      href: "https://medium.com/@chamudi_sashanka",
      description:  "Read my articles",
      color: "bg-purple-900/25 text-purple-100 border-purple-300/20 hover:bg-purple-900/35",
       iconColor:  "bg-purple-500/20 text-purple-200",
    },
    
    {
      id: 5,
      name: "Email",
      icon: Mail,
      href: "mailto:chamudisashanka01@gmail.com.com",
      description: "Send me a message",
      color:
        "bg-rose-900/25 text-rose-100 border-rose-300/20 hover:bg-rose-900/35",
      iconColor: "bg-rose-500/20 text-rose-200",
    },
  ]

  const isExternal = (url: string) => {
    return url.startsWith("http") || url.startsWith("mailto:")
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Hero-style animated background */}
      <div className="absolute inset-0 z-0 bg-[#080e18]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(20,80,80,0.18)_0%,transparent_70%),radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(10,40,80,0.2)_0%,transparent_70%)]"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-100 gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 animate-scale-in"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
            discuss projects just connect!
          </p>
        </div>

        {/* Contact Links Grid */}
        <div
          className={`bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl rounded-3xl p-12 shadow-[0_30px_90px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-1000 ${
            isVisible ? "animate-slide-up animate-delay-200" : "opacity-0"
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-2xl"></div>

           <div className="flex flex-nowrap justify-center gap-4 overflow-x-auto relative">
            {contactLinks.map((contact, index) => {
              const IconComponent = contact.icon
              const ButtonContent = (
                <span
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border hover:scale-105 hover:shadow-lg ${contact.color}`}
                >
                  Connect
                </span>
              )

              return (
                <Card
                  key={contact.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover-lift card-hover border border-cyan-200/10 bg-gradient-to-br from-slate-900/90 via-slate-900/75 to-cyan-900/25 animate-bounce-in overflow-hidden relative"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float ${contact.iconColor}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    <h4 className="font-bold text-slate-100 mb-3 text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-100 group-hover:to-slate-300 transition-all duration-300">
                      {contact.name}
                    </h4>
                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                      {contact.description}
                    </p>

                    {isExternal(contact.href) ? (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                         className="relative z-10"
                      >
                        {ButtonContent}
                      </a>
                    ) : (
                      <Link href={contact.href} className="relative z-10">
                        {ButtonContent}
                         </Link>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg"></div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

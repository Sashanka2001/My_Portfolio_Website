 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Globe, Smartphone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const skillDelayClasses = ["", "animate-delay-100", "animate-delay-200", "animate-delay-300"]

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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(window.innerHeight, document.body.scrollHeight)
    }

    setCanvasSize()

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.5,
        alpha: Math.random() * 0.4 + 0.2,
      })
    }

    let animationId = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(94,234,212,${particle.alpha})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 130) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(94,234,212,${0.08 * (1 - distance / 130)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener("resize", setCanvasSize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development with modern frameworks",
      color: "bg-cyan-500/20 text-cyan-400",
      borderColor: "border-cyan-500/40",
      titleColor: "text-white",
      descColor: "text-slate-300",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture and optimization",
      color: "bg-emerald-500/20 text-emerald-400",
      borderColor: "border-emerald-500/40",
      titleColor: "text-white",
      descColor: "text-slate-300",
    },
    {
      icon: Globe,
      title: "API Development",
      description: "RESTful APIs",
      color: "bg-violet-500/20 text-violet-400",
      borderColor: "border-violet-500/40",
      titleColor: "text-white",
      descColor: "text-slate-300",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first, user-friendly interfaces",
      color: "bg-amber-500/20 text-amber-400",
      borderColor: "border-amber-500/40",
      titleColor: "text-white",
      descColor: "text-slate-300",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-[#080e18]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(20,80,80,0.18)_0%,transparent_70%),radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(10,40,80,0.2)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 z-0 opacity-25 bg-[linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[size:34px_34px]"></div>
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(45,212,191,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.35)_1px,transparent_1px)] bg-[size:170px_170px]"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />

      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-[2rem] border border-cyan-300/10 bg-cyan-400/5 blur-3xl"></div>
        <div className="absolute bottom-16 right-12 w-72 h-72 rounded-[2rem] border border-fuchsia-300/10 bg-fuchsia-400/5 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl font-bold text-slate-100 mb-4 gradient-text">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-4 animate-scale-in"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate Computer Science student dedicated to creating innovative solutions through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - About Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? "animate-fade-in-left animate-delay-200" : "opacity-0"}`}
          >
            {/* Profile Card */}
            <Card className="group relative overflow-hidden border border-cyan-300/20 bg-slate-900/55 shadow-[0_30px_90px_rgba(0,0,0,0.5)] hover:shadow-[0_35px_100px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover-lift card-hover animate-bounce-in">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">Hello I'm Sashanka</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4 animate-scale-in"></div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-300 leading-relaxed">
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
                  <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift btn-ripple animate-glow group">
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
            <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-900/55 backdrop-blur-xl p-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)] card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-cyan-900/15"></div>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <Card
                      key={index}
                      className={`relative overflow-hidden border bg-slate-900/55 hover:shadow-[0_24px_48px_rgba(8,145,178,0.2)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover-lift card-hover animate-bounce-in border-cyan-300/20 ${skillDelayClasses[index] ?? ""}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${skill.color} animate-float ${skillDelayClasses[index] ?? ""}`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h4 className={`font-semibold mb-2 text-sm ${skill.titleColor}`}>{skill.title}</h4>
                        <p className={`text-xs leading-relaxed ${skill.descColor}`}>
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

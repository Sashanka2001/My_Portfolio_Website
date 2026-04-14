 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp, Code, Zap, Globe, Cpu, Layers, Wrench, Sparkles } from "lucide-react"

const skillIcons: Record<string, string> = {
  
}

const categoryIcons = {
  "Programming Languages": Code,
  "Frameworks & Libraries": Layers,
  "Tools & Technologies": Wrench,
  "Web Technologies": Globe,
  "Programming Paradigms & Principles": Cpu,
  "Development Methodologies": Zap,
  "Networking & Security:": Sparkles,
  "Database:": Code,
  "Operating Systems:": Code,
}

export default function SkillsSection() {
  const [showAllSkills, setShowAllSkills] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      const section = document.getElementById("skills")
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

    const section = document.getElementById("skills")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const skills = {

       " Web Development:": [
      "React",
      "Next.js",
      "Vue.js",
      "Spring Boot",
      "ASP.NET Web API",
      "Node.js",
      "Express.js",
      "Flutter (Learning)",
      "HTML",
      "Tailwind CSS",
      "CSS"
    ],

    "Programming Languages": [
      "Java",
      "C Language",
      "Python",
      "JavaScript",
      "TypeScript",
      "R Language",
      "C# (Learning)"
    ],

       "Database": [
    "MySQL",
    "MongoDB",
    "Firebase",
    "PostgreSQL",
    ],
    
     "Programming Paradigms &  Development Concepts: ": [
      "OOP",
      "SOLID",
      "SDLC",
      "ACID",
      "Agile",
      "BNF / EBNF",
      "Lex and Yacc",
    ],

    "Operating Systems" : ["Linux (Ubuntu)"],

    "Cloud Technologies: ": [
    "Vercel",
    "AWS (Learning)",
    "Azure (Learning)",
    ],

    "Project management Tools": [
    "Jira",
    "Clickup",
    ],

     "Design Tools and IDEs": [
      "Git",
      "draw.io",
      "Figma",
      "FlutterFlow",
      "VS Code",
      "Intellij",
    ],

    "Game Engines": [
      "Unity",
    ],

    "Testing Frameworks and Tools": [
      "Playwright",
      "Swagger",
      "Postman",
    ],

     "Networking & Security": ["Wireshark (basic protocol analysis and network design)"],

    
  }


  // Show only first 3 categories initially, or all if showAllSkills is true
  const skillEntries = Object.entries(skills)
  const displayedSkills = showAllSkills ? skillEntries : skillEntries.slice(0, 3)

  const getCategoryColor = (index: number) => {
    const colors = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-teal-600",
      "from-orange-500 to-red-600",
      "from-purple-500 to-pink-600",
      "from-teal-500 to-cyan-600",
      "from-indigo-500 to-blue-600",
      "from-pink-500 to-rose-600",
    ]
    return colors[index % colors.length]
  }

  const getCategoryBg = (index: number) => {
    const backgrounds = [
      "bg-slate-900/55 border border-indigo-300/20 backdrop-blur-xl",
      "bg-slate-900/55 border border-emerald-300/20 backdrop-blur-xl",
      "bg-slate-900/55 border border-orange-300/20 backdrop-blur-xl",
      "bg-slate-900/55 border border-fuchsia-300/20 backdrop-blur-xl",
      "bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl",
      "bg-slate-900/55 border border-blue-300/20 backdrop-blur-xl",
      "bg-slate-900/55 border border-rose-300/20 backdrop-blur-xl",
    ]
    return backgrounds[index % backgrounds.length]
  }

  return (
    <section
      id="skills"
      className="py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Hero-style animated background */}
      <div className="absolute inset-0 z-0 bg-[#080e18]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(20,80,80,0.18)_0%,transparent_70%),radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(10,40,80,0.2)_0%,transparent_70%)]"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 gradient-text mb-4">
            Skills & Technologies
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive showcase of technologies and concepts I've mastered through hands-on experience and
            continuous learning.
          </p>
        </div>

        {/* Skills Grid - Enhanced Certificate Style */}
        <div
          className={`bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl rounded-3xl p-12 shadow-[0_30px_90px_rgba(0,0,0,0.5)] mb-8 relative overflow-hidden transition-all duration-1000 ${isVisible ? "animate-slide-up animate-delay-200" : "opacity-0"}`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-400/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-2xl"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 relative">
            {displayedSkills.map(([category, skillList], categoryIndex) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Code
              const isHovered = hoveredCategory === category

              return (
                <Card
                  key={category}
                  className={`group hover:shadow-2xl transition-all duration-500 hover-lift card-hover ${getCategoryBg(categoryIndex)} ${categoryIndex < 3 ? "animate-bounce-in" : ""} overflow-hidden relative`}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Card Glow Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-8 transition-opacity duration-500"
                  ></div>

                  <CardContent className="p-8 relative">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${getCategoryColor(categoryIndex)} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-lg leading-tight transition-all duration-300">
                          {category}
                        </h4>
                        <div
                          className={`w-12 h-1 bg-gradient-to-r ${getCategoryColor(categoryIndex)} rounded-full mt-2 group-hover:w-20 transition-all duration-300`}
                        ></div>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={`group/skill px-3 py-2 bg-white/80 dark:bg-slate-600/50 text-slate-700 dark:text-slate-300 text-sm rounded-xl border border-slate-200/50 dark:border-slate-500/30 flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 ${categoryIndex < 3 ? "animate-fade-in-up" : ""} backdrop-blur-sm`}
                        >
                          {skillIcons[skill] && (
                            <img
                              src={skillIcons[skill] || "/placeholder.svg"}
                              alt={skill}
                              className="w-4 h-4 object-contain group-hover/skill:scale-110 transition-transform duration-200"
                            />
                          )}
                          <span className="font-medium group-hover/skill:text-slate-900 dark:group-hover/skill:text-slate-100 transition-colors duration-200">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(categoryIndex)} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`}
                    ></div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Enhanced View All Button */}
          <div className="text-center relative">
            <Button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className={`bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift btn-ripple animate-glow group ${isVisible ? "animate-bounce-in animate-delay-600" : "opacity-0"}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                  {showAllSkills ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
                <span>
                  {showAllSkills ? (
                    <>Show Less Skills & Technologies</>
                  ) : (
                    <>Explore All Skills & Technologies ({skillEntries.length} Categories)</>
                  )}
                </span>
              </div>
            </Button>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

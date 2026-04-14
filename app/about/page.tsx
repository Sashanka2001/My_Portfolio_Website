 "use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { Code, Database, Globe, Smartphone, Award, Users, Target, ChevronDown, ChevronUp } from "lucide-react"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [showAllCertificates, setShowAllCertificates] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      const section = document.getElementById("about-page")
      canvas.width = window.innerWidth
      canvas.height = section?.scrollHeight || window.innerHeight
    }

    setCanvasSize()

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 110; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.6 + 0.5,
        alpha: Math.random() * 0.45 + 0.2,
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
            ctx.strokeStyle = `rgba(94,234,212,${0.1 * (1 - dist / 130)})`
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

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Self-Driven Developer",
      description: "Pursuing self-study and practical projects to gain hands-on experience in software development",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "21+ Projects",
      description: "Completed various web development projects",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Experience working in agile development teams",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Strong analytical and problem-solving skills",
    },
  ]

  const interests = ["Web Development", "Mobile Apps", "UI/UX Design", "Open Source", "Database Design"]

  const certificates = [
     {
      name: "Codefest 2025 – Algothon Finalists ",
      organization: "SLIIT",
      skills: ["ProblemSolving", "Algorithms", "Teamwork"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Aug 2025",
    },
    {
      name: "Agile Project Management - IT Project Management",
      organization: "University of Moratuwa",
      skills: ["Agile Methodologies", "Project Management", "Scrum"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Apr 2025",
    },
    {
      name: "Programming in Python - 1. Python for Beginners",
      organization: "University of Moratuwa",
      skills: ["Python (Programming Language)"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Jan 2025",
    },
    {
      name: "Programming in Python - 2. Python for Beginners",
      organization: "University of Moratuwa",
      skills: ["Python (Programming Language)"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Jan 2025",
    },
    {
      name: "Web Development - 1.Web Design for Beginners",
      organization: "University of Moratuwa",
      skills: ["JavaScript","HTML", "CSS"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Jan 2025",
    },
    {
      name: "Web Development - 2.Front-End Web Development",
      organization: "University of Moratuwa",
      skills: ["Angular", "jQuery", "AJAX"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Feb 2025",
    },
    {
      name: "Web Development - 3.Server-side web programming",
      organization: "University of Moratuwa",
      skills: ["Node.js and Express", "REST APIs",],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued 2025",
    },
    {
      name: "SQL(Basic)",
      organization: "Hacker Rank",
      skills: ["SQL"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Jan 2025",
    },
    {
      name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      organization: "Microsoft",
      skills: ["Generative AI Tools", "Search Engine Technology", "Generative AI"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Jan 2025",
    },
    {
      name: "Introduction to C Programming Language",
      organization: "Sololearn",
      skills: ["C Programming Language"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Jan 2025",
    },
    {
      name: "C Programming Language Intermediate",
      organization: "Sololearn",
      skills: ["C Programming Language"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Jan 2025",
    },
    {
      name: "Introduction to Programming Using Java",
      organization: "Sololearn",
      skills: ["Java", "OOP"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Jan 2025",
    },
    {
      name: "Java Intermediate",
      organization: "Sololearn",
      skills: ["Java", "Advanced OOP"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Mar 2025",
    },
    {
      name: "Introduction to Python Programming Language",
      organization: "Sololearn",
      skills: ["Python Programming Language"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued Jan 2025",
    },
    {
      name: "Python Programming Language Intermediate",
      organization: "Sololearn",
      skills: ["Python Programming Language"],
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
      year: "Issued 2025",
    },
    {
      name: "Professional Practice in Software Development - 3.Capstone Project",
      organization: "University of Moratuwa",
      skills: ["Frontend Development","Backend Development"],
      link: "https://open.uom.lk/lms/course/view.php?id=20",
      year: "Issued 2025",
    },
  ]

  // Show only first 3 certificates initially, or all if showAllCertificates is true
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, 3)

  return (
    <div id="about-page" className="min-h-screen relative overflow-hidden">
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
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-100 gradient-text mb-4">About Me</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Passionate Computer Science student with a love for creating innovative solutions through code.
            </p>
          </div>


          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Photo and Basic Info */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-left animate-delay-200" : "opacity-0"}`}>
              <div className="bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl rounded-2xl p-8 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
                <div className="w-56 mx-auto bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold mb-6 overflow-hidden">
                  <img
                    src="Prof.png"
                    alt="Professional portrait"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h2 className="text-2xl font-bold text-slate-100 text-center mb-2">Sashanka Rathnayaka</h2>
                <p className="text-slate-300 text-center mb-4">Computer Science Student</p>
                <div className="space-y-2 text-sm text-slate-300">
                  {/*<p>
                    <strong>Location:</strong> Sri Lanka
                  </p>*/}
                  <p>
                    <strong>Education:</strong> BSc (Hons) in Computer Science
                  </p>
                  <p>
                    <strong>Focus:</strong> Full-Stack Web Development
                  </p>
                  <p>
                    <strong>Status:</strong> Available for Internships
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl rounded-2xl p-8 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
                <h3 className="text-xl font-bold text-slate-100 mb-6">Achievements</h3>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-teal-500/20 border border-teal-300/20 rounded-full flex items-center justify-center text-teal-200 mx-auto mb-2">
                        {achievement.icon}
                      </div>
                      <h4 className="font-semibold text-slate-100 text-sm">{achievement.title}</h4>
                      <p className="text-xs text-slate-300 mt-1">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Info */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-right animate-delay-300" : "opacity-0"}`}>
              {/* My Story */}
              <div className="bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl rounded-2xl p-8 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
                <h3 className="text-2xl font-bold text-slate-100 mb-6">My Story</h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Hello! I'm Sashanka Rathnayaka, a 3rd year Computer Science undergraduate at SLIIT with a passion
                    for building impactful digital solutions. My journey began with a curiosity about how software
                    works, which soon grew into hands-on experience in full-stack web development, distributed systems,
                    and human-computer interaction.
                  </p>
                  <p>
                    I specialize in technologies like <b>React, Next.js, Node.js(Express), Vue.js, Spring Boot and SQL</b> and have
                    also explored lower-level programming using C, Fortran, and Lex/Yacc. My academic and project work
                    spans <b>Web Development, IoT-based applications, UI/UX design, compiler construction, and game development.</b> I'm
                    familiar with tools like Figma, Jira, and methodologies such as Agile and Scrum.
                  </p>
                  <p>
                    Whether I'm crafting responsive user interfaces, designing robust backends, or experimenting with
                    emerging technologies, I bring a collaborative mindset and a drive to keep learning. I'm currently
                    seeking internship opportunities where I can grow further, contribute meaningfully, and work
                    alongside passionate developers.
                  </p>
                </div>
              </div>

              {/* Enhanced Skills Overview */}
              <Card className="bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.5)] hover:shadow-[0_35px_100px_rgba(0,0,0,0.55)] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                    <Code className="w-6 h-6 text-blue-300" />
                    Core Competencies
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 rounded-lg border border-blue-200/15 bg-blue-900/20 hover:bg-blue-900/30 transition-colors">
                      <Code className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                      <h4 className="font-semibold text-slate-100 mb-1">Frontend</h4>
                      <p className="text-sm text-slate-300">React, Next.js, Vue.js</p>
                    </div>
                    <div className="text-center p-4 rounded-lg border border-green-200/15 bg-green-900/20 hover:bg-green-900/30 transition-colors">
                      <Database className="w-8 h-8 mx-auto mb-2 text-green-300" />
                      <h4 className="font-semibold text-slate-100 mb-1">Backend</h4>
                      <p className="text-sm text-slate-300">Spring Booot, Node.js(Express), .NET</p>
                    </div>
                    <div className="text-center p-4 rounded-lg border border-purple-200/15 bg-purple-900/20 hover:bg-purple-900/30 transition-colors">
                      <Globe className="w-8 h-8 mx-auto mb-2 text-purple-300" />
                      <h4 className="font-semibold text-slate-100 mb-1">Database</h4>
                      <p className="text-sm text-slate-300">MYSQL, PostgreSQL, MongoDB, Firebase</p>
                    </div>
                    <div className="text-center p-4 rounded-lg border border-orange-200/15 bg-orange-900/20 hover:bg-orange-900/30 transition-colors">
                      <Smartphone className="w-8 h-8 mx-auto mb-2 text-orange-300" />
                      <h4 className="font-semibold text-slate-100 mb-1">Programming Languages</h4>
                      <p className="text-sm text-slate-300"> Java, C, Javascript, Typescript, Python </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>

          {/* Certificates Section - Show 3 initially with expand option */}
          <div className="bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl rounded-3xl p-12 shadow-[0_30px_90px_rgba(0,0,0,0.5)] mb-20">
            <h3 className="text-3xl font-bold text-slate-100 mb-8 text-center">Licenses & Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedCertificates.map((cert, index) => (
                <Card key={index} className="border border-cyan-300/20 bg-slate-900/55 backdrop-blur-xl hover:shadow-[0_24px_48px_rgba(8,145,178,0.2)] transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                       
                      <span className="text-xs bg-slate-800/85 text-slate-200 px-2 py-1 rounded-full border border-slate-600/40">{cert.year}</span>
                    </div>
                    <h4 className="font-semibold text-slate-100 mb-2 text-sm leading-tight">{cert.name}</h4>
                    <p className="text-xs text-slate-300 mb-3">{cert.organization}</p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-slate-800/80 text-slate-200 text-xs rounded-md border border-slate-600/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-300 text-xs font-medium hover:text-teal-200 transition-colors"
                    >
                      View Certificate
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All / Show Less Button */}
            <div className="text-center">
             <Button
  onClick={() => setShowAllCertificates(!showAllCertificates)}
  className="bg-teal-500 text-slate-950 hover:bg-teal-400 px-6 py-3 rounded-lg shadow-md transition duration-300 flex items-center justify-center mx-auto"
>
  {showAllCertificates ? (
    <>
      Show Less Certificates
      <ChevronUp className="w-4 h-4 ml-2" />
    </>
  ) : (
    <>
      View All Licenses & Certifications ({certificates.length})
      <ChevronDown className="w-4 h-4 ml-2" />
    </>
  )}
</Button>

              
            </div>
          </div>

               
          {/* Resume Download Link  
          <div className="text-center mb-16"> 
            <Link href="/resume.pdf" target="_blank">
              <Button className="bg-teal-600 text-white hover:bg-teal-700">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </Link>
          </div>  */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

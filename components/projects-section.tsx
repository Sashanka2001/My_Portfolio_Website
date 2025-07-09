 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("projects")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const featuredProjects = [
    {
      id: 1,
      title: "Cozy Cup Coffee Shop 🧋",
      description:
        "Full-stack web application for a coffee shop with online ordering and user authentication.",
      technologies: ["React", "SQL"],
      github: "https://github.com/Sashanka2001/Cozy_Cup",
      demo:
        "https://www.linkedin.com/feed/update/urn:li:activity:7286125017543725056/",
      image: "/cozycup.png?height=300&width=500",
      year: "2024",
    },
    {
      id: 2,
      title: "DSL and HTML Form Generator 💻",
      description:
        "Domain-specific language for generating HTML forms with custom syntax.",
      technologies: ["LEX & YACC", "BNF/EBNF", "HTML", "JavaScript", "CSS"],
      github:
        "https://github.com/IT23231528chamudi/Building-a-DSL-and-HTML-Form-Generator-with-Lex-and-Yacc-.git",
      demo: "https://youtu.be/Fatk3f0UGS8",
      image: "/lex.png?height=300&width=500",
      year: "2025",
    },
    {
      id: 3,
      title: "NEMRA Smart Apartment 🏙️",
      description:
        "Collaborative apartment management system with real-time updates.",
      technologies: ["TypeScript", "PostgreSQL", "SpringBoot"],
      github:
        "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group_12_nemra-apartment_management_system.git",
      demo: "#",
      image: "/nemra.png?height=300&width=500",
      year: "2025",
    },
  ]

  const bgColors = [
    "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10",
    "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10",
    "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/10 dark:to-cyan-900/10",
  ]

  const hoverColors = [
    "from-blue-500 to-purple-600",
    "from-orange-500 to-red-600",
    "from-teal-500 to-cyan-600",
  ]

  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-10 lg:px-20 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-green-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of web development and software engineering projects that reflect my practical experience and passion.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-xl mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group relative overflow-hidden transition-all duration-300 rounded-xl border-0 ${bgColors[index % bgColors.length]} hover:shadow-xl`}
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${hoverColors[index % hoverColors.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl z-0`}
                ></div>

                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-md">
                      <Code2 className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-xs bg-white/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/70 dark:bg-slate-700/50 text-blue-600 dark:text-blue-300 text-xs rounded-md border border-blue-100 dark:border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    {project.github && project.github !== "#" ? (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal-600 dark:text-teal-400 text-xs font-medium hover:text-teal-800 transition-colors flex-1"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Link>
                    ) : (
                      <span className="inline-flex items-center text-gray-400 text-xs font-medium flex-1">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </span>
                    )}

                    {project.demo && project.demo !== "#" ? (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal-600 dark:text-teal-400 text-xs font-medium hover:text-teal-800 transition-colors flex-1"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Link>
                    ) : (
                      <span className="inline-flex items-center text-gray-400 text-xs font-medium flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 relative">
          <Link href="/projects">
            <Button
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift btn-ripple animate-glow group"
            >
              View All Projects
            </Button>
          </Link>

          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
      </div>
    </section>
  )
}

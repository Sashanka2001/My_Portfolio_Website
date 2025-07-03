 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code2 } from "lucide-react"
import Link from "next/link"

export default function ProjectsSection() {
  const featuredProjects = [
    {
      id: 1,
      title: "Cozy Cup Coffee Shop 🧋",
      description: "Full-stack web application for a coffee shop with online ordering and user authentication.",
      technologies: ["React", "SQL"],
      github: "https://github.com/Sashanka2001/Cozy_Cup",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7286125017543725056/",
      image: "/cozycup.png?height=300&width=500",
      year: "2024",
    },
    {
      id: 2,
      title: "DSL and HTML Form Generator 💻",
      description: "Domain-specific language for generating HTML forms with custom syntax.",
      technologies: ["LEX & YACC", "BNF/EBNF", "HTML","JavaScript","CSS"],
      github: "https://github.com/IT23231528chamudi/Building-a-DSL-and-HTML-Form-Generator-with-Lex-and-Yacc-.git",
      demo: "https://youtu.be/Fatk3f0UGS8",
      image: "/lex.png?height=300&width=500",
      year: "2025",
    },
    {
      id: 3,
      title: "NEMRA Smart Apartment 🏙️",
      description: "Collaborative apartment management system with real-time updates.",
      technologies: ["TypeScript", "PostgreSQL", "SpringBoot"],
      github:
        "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group_12_nemra-apartment_management_system.git",
      demo: "#",
      image: "/nemra.png?height=300&width=500",
      year: "2025",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and software engineering.
          </p>
        </div>

        {/* Projects Grid - Certificate Style */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{project.year}</span>
                  </div>

                  {/* Project Image */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <h4 className="font-semibold text-slate-800 mb-2 text-sm leading-tight">{project.title}</h4>
                  <p className="text-xs text-slate-600 mb-3">{project.description}</p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.github && project.github !== "#" ? (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal-600 text-xs font-medium hover:text-teal-800 transition-colors flex-1"
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
                        className="inline-flex items-center text-teal-600 text-xs font-medium hover:text-teal-800 transition-colors flex-1"
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

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

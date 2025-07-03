 "use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectsSection() {
  const featuredProjects = [
    {
      title: "Cozy Cup Coffee Shop 🧋",
      description: "Full-stack web application for a coffee shop with online ordering and user authentication.",
      technologies: ["React"],
      github: "https://github.com/Sashanka2001/Cozy_Cup",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7286125017543725056/",
    },
    {
      title: "DSL and HTML Form Generator 💻",
      description: "Collaborative project management tool with real-time updates and team features.",
      technologies: ["LEX & YACC", "BNF/EBNF", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/IT23231528chamudi/Building-a-DSL-and-HTML-Form-Generator-with-Lex-and-Yacc-.git",
      demo: "https://youtu.be/Fatk3f0UGS8",
    },
    {
      title: "NEMRA Smart Apartment 🏙️",
      description: "Modern e-commerce solution with payment integration and inventory management.",
      technologies: ["Typescript", "Postgresql", "SpringBoot"],
      github:
        "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group_12_nemra-apartment_management_system.git",
      demo: "#",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {/* GitHub Link */}
                  {project.github && project.github !== "#" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 flex items-center justify-center gap-2 bg-transparent text-sm"
                      asChild
                    >
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 flex items-center justify-center gap-2 bg-transparent text-sm opacity-50"
                      disabled
                    >
                      <Github size={16} />
                      Code
                    </Button>
                  )}

                  {/* Demo Link */}
                  {project.demo && project.demo !== "#" ? (
                    <Button size="sm" className="flex-1 flex items-center justify-center gap-2 text-sm" asChild>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Demo
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-2 text-sm opacity-50"
                      disabled
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
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

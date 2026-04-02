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
      title: "Sherine Travels & Tours 🚗",
      description: "Collaborative vehicle rental management system ",
      longDescription: "Why I Built This: This was a group project where we developed a complete apartment management system using Node.js, React, and Azure for deployment. I contributed to the notification system, dashboard design, and CI/CD deployment setup. The system supports real-time booking updates, user notifications, and role-based dashboards for efficient management.",
      technologies: ["ASP.NET Web API", "React.js", "Azure", "PostgreSQL", "Paypal Integration", "Selenium"],
      github: "https://github.com/it23392830/Sherine_Travels_Vehicle_Rental_Management_System.git",
      demo: "https://youtu.be/Nw75febT4yo?si=KQo9cFC-uj_yXDt1",
      image: "sherine_dashboard.png",
      category: "Full Stack Projects",
      year: "2025",
    },
    {
      id: 2,
      title: "NEMRA Smart Apartment 🏙️",
      description:
        "Collaborative apartment management system with real-time updates.",
      technologies: ["React(TypeScript)", "PostgreSQL", "SpringBoot", "Paypal Integration", "Jira", "Figma"],
      github:
        "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group_12_nemra-apartment_management_system.git",
      demo: "#",
      image: "/nemra.png?height=300&width=500",
      year: "2025",
    },
    {
      id: 3,
      title: "SplendourLux (An Online Shopping Site) 🛍️",
      description: "Developed a modern e-commerce solution with secure payment integration and dynamic inventory management as part of a team collaboration",
      longDescription:
        "Complete e-commerce platform with user authentication, product catalog, shopping cart, payment processing, and order tracking. Admin dashboard for inventory and order management.",
      technologies: ["React", "SpringBoot", "MYSQL"],
      github: "https://github.com/IT23231528chamudi/OOAD-Group-12-Frontend.git",
      demo: "#",
      image: "/SplendourLux.png?height=300&width=500",
      category: "Full Stack",
      year: "2024",
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
      className="py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Experience-style dark background with square grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 z-0 bg-[#080e18]"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(20,80,80,0.18)_0%,transparent_70%),radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(10,40,80,0.2)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 z-0 opacity-25 bg-[linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[size:34px_34px]"></div>
        <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(45,212,191,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.35)_1px,transparent_1px)] bg-[size:170px_170px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-100 gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of web development and software engineering projects that reflect my practical experience and passion.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl rounded-3xl p-12 shadow-[0_30px_90px_rgba(0,0,0,0.5)] mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-teal-400/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group relative overflow-hidden transition-all duration-300 rounded-xl border border-cyan-200/10 ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-slate-900/90 via-slate-900/75 to-fuchsia-900/25"
                    : "bg-gradient-to-br from-slate-900/90 via-slate-900/75 to-cyan-900/25"
                } hover:shadow-[0_24px_48px_rgba(8,145,178,0.24)] hover:-translate-y-1`}
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${hoverColors[index % hoverColors.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl z-0`}
                ></div>

                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-slate-800/80 border border-slate-600/30 rounded-full flex items-center justify-center shadow-md">
                      <Code2 className="w-5 h-5 text-teal-300" />
                    </div>
                    <span className="text-xs bg-slate-800/85 text-slate-200 px-2 py-1 rounded-full border border-slate-600/40">
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

                  <h4 className="font-semibold text-slate-100 mb-2 text-sm leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-300 mb-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-800/75 text-slate-200 text-xs rounded-md border border-slate-600/35"
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
                        className="inline-flex items-center text-teal-300 text-xs font-medium hover:text-teal-200 transition-colors flex-1"
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
                        className="inline-flex items-center text-teal-300 text-xs font-medium hover:text-teal-200 transition-colors flex-1"
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
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-slate-950 px-8 py-4 rounded-2xl font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift btn-ripple animate-glow group"
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

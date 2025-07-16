 "use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Github, ExternalLink, Code2 } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("projects")
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)

  // Fade-in observer for header animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    const header = document.getElementById("projects-header")
    if (header) observer.observe(header)
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.location.href = "/"
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      id: 1,
      title: "NEMRA Smart Apartment 🏙️",
      description: "Collaborative apartment management system with real-time updates",
      longDescription:
        "Team collaboration platform with project boards, task assignment, real-time notifications, and progress tracking. Built with modern web technologies.",
      technologies: ["TypeScript", "PostgreSQL", "SpringBoot"],
      github:
        "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group_12_nemra-apartment_management_system.git",
      demo: "https://youtu.be/MuT70hK8rsE",
      image: "/nemra.png?height=300&width=500",
      category: "Full Stack",
      year: "2025",
    },
    {
      id: 2,
      title: "DSL and HTML Form Generator 💻",
      description: "Domain-specific language for generating HTML forms with custom syntax",
      longDescription:
        "Custom DSL built with Lex and Yacc for generating HTML forms. Features include BNF/EBNF grammar definition, lexical analysis, and automatic form generation with styling.",
      technologies: ["LEX & YACC", "BNF/EBNF", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/IT23231528chamudi/Building-a-DSL-and-HTML-Form-Generator-with-Lex-and-Yacc-.git",
      demo: "https://youtu.be/Fatk3f0UGS8",
      image: "/lex.png?height=300&width=500",
      category: "Frontend",
      pdf: "https://mysliit-my.sharepoint.com/:b:/g/personal/it23231528_my_sliit_lk/EY54Ld_BBYpInrpjN5MGO28Bl38EMp6EkMp0zAcMyiL6Dw?e=dYr3I4",
      year: "2025",
    },
    {
      id: 3,
      title: "Portfolio Website 👩🏻",
      description: "Personal portfolio showcasing projects and skills",
      longDescription:
        "Responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      github: "https://github.com/Sashanka2001/My_Portfolio_Website.git",
      demo: "#",
      image: "/pf.png?height=300&width=500",
      category: "Frontend",
      year: "2025",
    },
    {
      id: 4,
      title: "Fully Functional Calculator 🧮",
      description: "A fully functional calculator with basic arithmetic operations",
      longDescription:
        "Simple yet effective calculator built with HTML, CSS, and JavaScript. Features include basic arithmetic operations, clear functionality, and responsive design.",
      technologies: ["HTML", "JavaScript", "CSS"],
      github: "https://github.com/Sashanka2001/Task_2_CA-D1-3951.git",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7288282943976808448/",
      image: "/cal.png?height=300&width=500",
      category: "Frontend",
      year: "2025",
    },
    {
      id: 5,
      title: "Cozy Cup Coffee Shop 🧋",
      description:
        "A full-stack web application for a coffee shop with online ordering, user authentication, and payment integration",
      longDescription:
        "Built with React, Node.js, and MongoDB. Features include user registration/login, menu browsing, cart functionality, order management, and admin panel for managing products and orders.",
      technologies: ["React", "SQL"],
      github: "https://github.com/Sashanka2001/Cozy_Cup",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7286125017543725056/",
      image: "/cozycup.png?height=300&width=500",
      category: "Web App",
      year: "2024",
    },
    {
      id: 6,
      title: "SplendourLux (An Online Shopping Site) 🛍️",
      description: "Developed a modern e-commerce solution with secure payment integration and dynamic inventory management as part of a team collaboration",
      longDescription:
        "Complete e-commerce platform with user authentication, product catalog, shopping cart, payment processing, and order tracking. Admin dashboard for inventory and order management.",
      technologies: ["React", "SpringBoot", "SQL"],
      github: "https://github.com/IT23231528chamudi/OOAD-Group-12-Frontend.git",
      demo: "#",
      image: "/SplendourLux.png?height=300&width=500",
      category: "Full Stack",
      year: "2024",
    },
    {
      id: 7,
      title: "Dice Game - YAHTZEE 🎲",
      description: "Two-player Yahtzee game implemented in C programming language",
      longDescription:
        "Classic Yahtzee dice game for two players built in C. Features include dice rolling, scoring system, turn management, and winner determination.",
      technologies: ["C Language"],
      github: "https://github.com/IT23231528chamudi/Two-Player-Yahtzee-Game-in-C.git",
      demo: "https://youtu.be/YzF8iCasSq8",
      image: "/yatzee.png?height=300&width=500",
      category: "Games",
      pdf: "https://mysliit-my.sharepoint.com/:b:/g/personal/it23231528_my_sliit_lk/EX-UmE5CccdFmo625lCalXIB5HfTeCM-2IzhZP-Z-TCXZA?e=EDZrcw",
      year: "2024",
    },

    {
      id: 8,
      title: "Sustainable Computing Research 🌱",
      description: "Collaboratively researched and proposed strategies to reduce carbon emissions and optimize resource usage in distributed computing systems ",
      image: "/coa.png?height=300&width=500",
      category: "Research",
      technologies: [],
      pdf : "https://mysliit-my.sharepoint.com/:b:/g/personal/it23231528_my_sliit_lk/EXZ3zqkvj6pGoQxeqJiYyAABFH5WLKmYfLlHc3QFMd8LYw?e=0Rw2yX",
      year: "2024",
    },
     {
      id: 8,
      title: "Network Infrastructure Design 🔒",
      description: "Collaboratively designed a secure and scalable network infrastructure for a small enterprise operating across two floors",
      image: "/cn.jpeg?height=300&width=500",
      category: "Research",
      technologies: [],
      pdf : "https://mysliit-my.sharepoint.com/:b:/g/personal/it23231528_my_sliit_lk/ES8p-A0kEztOjXhTfw1MVpMBPYDIo_mbJka93oyk2FqcpQ?e=n3fhHf",
      year: "2024",
    },
    {
      id: 9,
      title: "Design and Functionality of the Web Page 🎨",
      description: "Modern web page design with interactive functionality",
      longDescription:
        "Responsive web page showcasing modern design principles with interactive elements, smooth animations, and user-friendly interface built with vanilla web technologies.",
      technologies: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Sashanka2001/Design-and-Functionality-of-the-Web-Page-Task-1-.git",
      demo: "https://youtu.be/aZEJ2L8FcUI",
      image: "/assi.png?height=300&width=500",
      category: "Web App",
      year: "2024",
    },

    {
      id: 10,
      title: "Dynamic Tic Tac Toe Game 🕹️",
      description: "Interactive Tic Tac Toe game with dynamic board size",
      longDescription:
        "Enhanced Tic Tac Toe game built in C with customizable board sizes and intelligent game logic. Features include player vs player mode and win detection.",
      technologies: ["C Language"],
      github: "https://github.com/IT23231528chamudi/Tic-Tac-Toc-Game-using-C.git",
      demo: "https://youtu.be/mFdrgqfz4xA",
      image: "/tic.png?height=300&width=500",
      category: "Games",
      year: "2023",
    },
    {
      id: 11,
      title: "Smart IoT Food Monitoring System 🥬",
      description: "An IoT-based system for monitoring food freshness and storage conditions, designed and implemented collaboratively",
      longDescription:
        "Smart monitoring system using Arduino sensors to track temperature, humidity, and other factors affecting food quality. Includes web dashboard for real-time monitoring.",
      technologies: ["Arduino", "Firebase", "HTML", "CSS", "Javascript"],
      github: "https://github.com/IT23231528chamudi/The-Smart-IoT-Food-Monitoring-System-master.git",
      demo: "https://youtu.be/H4k7qogUH7w",
      image: "/CT.jpg?height=300&width=500",
      category: "Full Stack",
      pdf : "https://mysliit-my.sharepoint.com/:b:/g/personal/it23231528_my_sliit_lk/EdemqOR2GYdJvCD8aqb3DGkBSC2WuVbd8pLgm2QbfhI6bw?e=YLvCoR",
      year: "2023",
    },
  ]

  const categories = ["All", "Full Stack", "Frontend", "Web App", "Games", "Research"]

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6)

  const bgColors = [
    "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10",
    "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10",
    "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/10 dark:to-cyan-900/10",
    "bg-gradient-to-br from-green-50 to-lime-50 dark:from-green-900/10 dark:to-lime-900/10",
    "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10",
  ]

  const hoverGlowColors = [
    "from-blue-500 to-purple-600",
    "from-orange-500 to-red-600",
    "from-teal-500 to-cyan-600",
    "from-green-500 to-lime-600",
    "from-pink-500 to-rose-600",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header with fade-in animation */}
        <section
          id="projects-header"
          className={`text-center mb-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6 origin-left scale-x-100 transition-transform duration-700"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in web development, full-stack
            applications, and modern technologies.
          </p>
        </section>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors font-semibold ${
                selectedCategory === category
                  ? "bg-teal-600 text-white shadow-lg"
                  : "bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group relative overflow-hidden transition-all duration-300 rounded-xl border-0
                ${bgColors[index % bgColors.length]}
                hover:shadow-xl
              `}
              >
                {/* Hover Glow Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${hoverGlowColors[index % hoverGlowColors.length]} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl pointer-events-none`}
                  style={{ filter: "blur(15px)" }}
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

                  {/* Project Image */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>

                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">{project.description}</p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
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
                    {/* PDF Link */}
  {project.pdf && (
    <Link
      href={project.pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-teal-600 text-xs font-medium hover:text-teal-800 transition-colors"
    >
      <ExternalLink className="w-3 h-3 mr-1" />
      View PDF
    </Link>
  )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length > 6 && (
            <div className="flex justify-center">
              <Button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift btn-ripple animate-glow group"
              >
                {showAllProjects ? "Show Less" : "Show All Projects"}
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

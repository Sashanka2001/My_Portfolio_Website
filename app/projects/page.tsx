"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import { useState } from "react"

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("projects")

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
      title: "Cozy Cup Coffee Shop 🧋",
      description:
        "A full-stack web application for a coffee shop with online ordering, user authentication, and with payment integration.",
      longDescription:
        "Built with React, Node.js, and MongoDB. Features include user registration/login, menu browsing, cart functionality, order management, and admin panel for managing products and orders.",
      technologies: ["React"],
      github: "https://github.com/Sashanka2001/Cozy_Cup",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7286125017543725056/",
      image: "/cozycup.png?height=300&width=500",
      category: "Web App",
    },
    {
      id: 2,
      title: "NEMRA Smart Apartment 🏙️",
      description: "Collaborative project management tool with real-time updates.",
      longDescription:
        "Team collaboration platform with project boards, task assignment, real-time notifications, and progress tracking. Built with modern web technologies.",
      technologies: ["Typescript","Postgresql","SpringBoot"],
      github: "#",
      demo: "#",
      image: "/nemra.png?height=300&width=500",
      category: "Full Stack",
    },
    {
      id: 3,
      title: "SplendourLux (An Online Shopping Site) 🛍️",
      description: "Modern e-commerce solution with payment integration and inventory management.",
      longDescription:
        "Complete e-commerce platform with user authentication, product catalog, shopping cart, payment processing, and order tracking. Admin dashboard for inventory and order management.",
      technologies: ["React","SpringBoot","SQL"],
      github: "https://github.com/IT23231528chamudi/OOAD-Group-12-Frontend.git",
      demo: "#",
      image: "/SplendourLux.png?height=300&width=500",
      category: "Full Stack",
    },
    {
      id: 4,
      title: "DSL and HTML Form Generator 💻 ",
      description: "Interactive weather application with location-based forecasts.",
      longDescription:
        "Weather dashboard with current conditions, 7-day forecast, interactive maps, and location search. Responsive design with data visualization.",
      technologies: ["LEX & YACC", "BNF/EBNF", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/IT23231528chamudi/Building-a-DSL-and-HTML-Form-Generator-with-Lex-and-Yacc-.git",
      demo: "#",
      image: "/lex.png?height=300&width=500",
      category: "Frontend",
    },
    {
      id: 5,
      title: "Portfolio Website 👨‍💻",
      description: "Personal portfolio showcasing projects and skills.",
      longDescription:
        "Responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      github: "#",
      demo: "#",
      image: "/pp.png?height=300&width=500",
      category: "Frontend",
    },
    {
      id: 6,
      title: "Fully Functional Calculator 🧮",
      description: "Real-time messaging app with group chat functionality.",
      longDescription:
        "Real-time chat application with private messaging, group chats, file sharing, and emoji support. Built with Socket.io for real-time communication.",
      technologies: ["HTML","JavaScript","CSS"],
      github: "https://github.com/Sashanka2001/Task_2_CA-D1-3951.git",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7288282943976808448/",
      image: "/placeholder.svg?height=300&width=500",
      category: "Frontend",
    },
    {
      id: 7,
      title: "Dice Game - YAHTZEE 🎲",
      description: "Real-time messaging app with group chat functionality.",
      longDescription:
        "Real-time chat application with private messaging, group chats, file sharing, and emoji support. Built with Socket.io for real-time communication.",
      technologies: ["C Language"],
      github: "https://github.com/IT23231528chamudi/Two-Player-Yahtzee-Game-in-C.git",
      demo: "#",
      image: "/yatzee.png?height=300&width=500",
      category: "Games",
    },
    {
      id: 8,
      title: "Dynamic Tic Tac Toe Game 🕹️",
      description: "Real-time messaging app with group chat functionality.",
      longDescription:
        "Real-time chat application with private messaging, group chats, file sharing, and emoji support. Built with Socket.io for real-time communication.",
      technologies: ["C Language"],
      github: "https://github.com/IT23231528chamudi/Tic-Tac-Toc-Game-using-C.git",
      demo: "#",
      image: "/tic.png?height=300&width=500",
      category: "Games",
    },
    {
      id: 9,
      title: "Smart IoT Food Monitoring System 🥬",
      description: "Real-time messaging app with group chat functionality.",
      longDescription:
        "Real-time chat application with private messaging, group chats, file sharing, and emoji support. Built with Socket.io for real-time communication.",
      technologies: ["Arduini", "Firebase", "HTML","CSS","Javascript"],
      github: "https://github.com/IT23231528chamudi/The-Smart-IoT-Food-Monitoring-System-master.git",
      demo: "#",
      image: "/placeholder.svg?height=300&width=500",
      category: "Full Stack",
    },
    {
      id: 10,
      title: "Design and Functionality of the Web Page 🎨",
      description: "Real-time messaging app with group chat functionality.",
      longDescription:
        "Real-time chat application with private messaging, group chats, file sharing, and emoji support. Built with Socket.io for real-time communication.",
      technologies: ["HTML","CSS","Javascript"],
      github: "https://github.com/Sashanka2001/Design-and-Functionality-of-the-Web-Page-Task-1-.git",
      demo: "#",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web App",
    },


    
  ]

  const categories = ["All", "Full Stack", "Frontend", "Web App","Games"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">My Projects</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A collection of projects I've worked on, showcasing my skills in web development, full-stack applications,
              and modern technologies.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-teal-500 text-white"
                    : "bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

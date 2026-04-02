 "use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Github, ExternalLink, Code2 } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("projects")
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
    for (let i = 0; i < 110; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.2,
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
            ctx.strokeStyle = `rgba(94,234,212,${0.09 * (1 - dist / 130)})`
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
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      id: 23,
      title: "SafeLanka - Disaster Management Platform ☔",
      description: "A comprehensive disaster management platform for real-time monitoring and response coordination",
      longDescription: "Why I Built This: I developed SafeLanka to address the critical need for effective disaster management in Sri Lanka. The platform provides real-time monitoring of natural disasters, facilitates communication between emergency responders and affected communities, and offers resources for disaster preparedness. This project was motivated by the increasing frequency of natural disasters and the importance of leveraging technology to enhance response efforts and save lives.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js","Socket.io"],
      image: "safelanka.png",
      category: "Full Stack",
      year: "2026",
      demo: "https://heapified-devthon-3-0.vercel.app/",
      github: "https://github.com/ravindu422/Heapified_Devthon_3.0",
    },
    
    {
      id: 22,
      title: "Watchlist – Movie Tracking & Rating Web App (MERN Stack)🎥",
      description: "A web application for tracking and rating movies with user authentication",
      longDescription: "Why I Built This: I developed the Watchlist Movie Tracking & Rating Web App to provide movie enthusiasts with a platform to easily track and rate the movies they watch. The app allows users to create personalized watchlists, rate movies, and discover new films based on their preferences. This project was motivated by my passion for movies and the desire to create a user-friendly application that enhances the movie-watching experience. By leveraging the MERN stack, I aimed to build a robust and scalable web application that offers seamless performance and an engaging user interface.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "watchlist.png",
      category: "Full Stack",
      year: "2026",
      demo: "https://youtu.be/TaE3uieW9gw",
      github: "https://github.com/Sashanka2001/Watchlist.git",
    },

    {
      id: 21,
      title: "Employee Leave Management System (MERN Stack) 🗂️",
      description: "A web application for managing employee leave requests and approvals",
      longDescription: "Why I Built This: I developed the Employee Leave Management System to streamline the process of managing employee leave requests and approvals within an organization. The system allows employees to submit leave requests, view their leave balances, and track the status of their requests. Managers can review and approve or reject leave requests, as well as generate reports on leave usage. This project was motivated by the need for an efficient and organized way to handle leave management, reducing paperwork and improving communication between employees and management.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "leave.png",
      category: "Full Stack",
      year: "2025",
      demo: "https://youtu.be/YWpJNqvaTr4",
       github: "https://github.com/Sashanka2001/Employee-Leave-Management-System.git",
    },
    
    {
      id: 20,
      title: "Focus Mode – Smart Productivity Site ⏳",
      description: "A productivity web app that helps users stay focused by blocking distracting websites",
      longDescription: "Why I Built This: I created Focus Mode to help users enhance their productivity by minimizing distractions from commonly visited websites. The app allows users to set focus sessions during which specified distracting sites are blocked, encouraging better concentration on tasks at hand. This project was inspired by the increasing need for effective time management tools in our digital age, where distractions are just a click away. By developing this app, I aimed to provide a simple yet effective solution for individuals looking to improve their focus and productivity.",
      technologies: ["React.js", "Node.js","Chrome Extensions"],
      image: "FM.png",
      category: "Web App",
      year: "2025",
      demo: "https://focus-mode-sashanka.vercel.app/",
       github: "https://github.com/Sashanka2001/Focus-Mode.git",
    },

    {
      id: 19,
      title: "Parallel Graph Traversal - BFS & DFS  🔍",
      description: "Research on parallel graph traversal algorithms using BFS and DFS with various parallelization techniques",
      longDescription: "Why I Built This: I undertook this research project to explore the performance of parallel graph traversal algorithms using different parallelization techniques such as OpenMP, MPI, and CUDA. The goal was to analyze how these methods can optimize the traversal of large-scale graphs, which is crucial in various applications like social network analysis, web crawling, and bioinformatics. The project involved implementing BFS and DFS algorithms in serial and parallel forms, benchmarking their performance, and evaluating scalability across different hardware architectures.",
      technologies: ["C", "OpenMP", "MPI", "CUDA"],
      image: "graph_traversal.png",
      category: "Research",
      year: "2025",
      demo: "https://youtu.be/PFOa2RiAXVI",
      pdf: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/projects/2007093250/multiple-media-viewer/?profileId=ACoAAEFYs2oB9nKVGXPNt8vWCYAU1ca6-YKyiSk&treasuryMediaId=1765091168891",
      github: "https://github.com/IT23231528chamudi/IT23231528_parallel_graph_traversal.git",
    },

    {
      id: 18,
      title: "Magical Christmas Forest VR (Unity XR) 🎄",
      description: "An immersive VR experience of a magical Christmas forest using Unity XR toolkit",
      longDescription: "Why I Built This: I developed this VR experience to explore the capabilities of Unity's XR toolkit and create an engaging holiday-themed environment. The project features interactive elements, ambient sounds, and festive visuals to provide users with a captivating virtual escape during the Christmas season.",
      technologies: ["Unity 3D", "3D Modeling & Scene Design","Animation Systems", "Lighting & Shading","Unity XR Toolkit", "C#"],
      image: "christmas_forest.png",
      category: "Graphics & Visualization",
      year: "2025",
      demo: "https://youtu.be/8U8u1k-Dows",
      pdf: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/projects/1826033900/multiple-media-viewer/?profileId=ACoAAEFYs2oB9nKVGXPNt8vWCYAU1ca6-YKyiSk&treasuryMediaId=1764910109973",
      github: "https://github.com/Sashanka2001/ChristmasForest-UnityProject.git",
    },

    {
      id: 17,
      title: "Hybrid 2D/3D Office Layout Designer 🏢",
      description: "A hybrid 2D - 3D OpenGL Interactive Office Designer featuring custom line/circle rendering",
      longDescription: "Why I Built This: This was a group project where we developed a complete apartment management system using Node.js, React, and Azure for deployment. I contributed to the notification system, dashboard design, and CI/CD deployment setup. The system supports real-time booking updates, user notifications, and role-based dashboards for efficient management.",
      technologies: ["C++", "OpenGL"],
      image: "office_layout.png",
      category: "Graphics & Visualization",
      year: "2025",
      demo: "https://youtu.be/Q6yK7MJhTIM",
      pdf: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/projects/1826033900/multiple-media-viewer/?profileId=ACoAAEFYs2oB9nKVGXPNt8vWCYAU1ca6-YKyiSk&treasuryMediaId=1764910109972",
      github: "#",
    },
      {
      id: 15,
      title: "Sherine Travels & Tours 🚗",
      description: "Collaborative vehicle rental management system ",
      longDescription: "Why I Built This: This was a group project where we developed a complete apartment management system using Node.js, React, and Azure for deployment. I contributed to the notification system, dashboard design, and CI/CD deployment setup. The system supports real-time booking updates, user notifications, and role-based dashboards for efficient management.",
      technologies: ["ASP.NET Web API", "React.js", "Azure", "PostgreSQL", "aypal Integration", "Selenium"],
      github: "https://github.com/it23392830/Sherine_Travels_Vehicle_Rental_Management_System.git",
      demo: "https://youtu.be/Nw75febT4yo?si=KQo9cFC-uj_yXDt1",
      image: "sherine_dashboard.png",
      category: "Full Stack",
      year: "2025",
    },

    {
      id: 16,
      title: "Playwright: Modern Web E2E Testing",
      description: "A comprehensive Playwright testing suite for modern web applications",
      longDescription: "Why I Built This: I developed this Playwright testing suite to streamline end-to-end testing for modern web applications. It includes tests for user authentication, form submissions, and UI interactions, ensuring robust application performance across different browsers and devices. The suite is designed for easy integration into CI/CD pipelines, enhancing development workflows.",
      technologies: ["Playwright", "TypeScript", "JavaScript"],
      github: "https://github.com/IT23231528chamudi/Haycarb_testing.git",
      image: "pw.png",
      category: "Research",
      year: "2025",
    },


      {
      id: 14,
      title: "Rock Paper Scissors Game 🎮",
      description: "A fun Python console game where players compete against the computer in classic Rock-Paper-Scissors",
      longDescription: "Why I Built This: I created this project to strengthen my basic Python programming skills, practice using conditionals, loops, and input handling. It also includes colorful text and emojis using the Colorama library to make the game more interactive and enjoyable.",    
      technologies: ["Python Language"],
      github: "https://github.com/Sashanka2001/Rock-Paper-Scissors-Game.git",
      demo: "",
      image: "rock_paper_scissors.png",
      category: "Games",
       year: "Currently work on this",
    },

     {
      id: 1,
      title: "CS Study Buddy website 🧑🏻‍💻",
      description: " A web application help to students manage assignments, notes, and schedules",
      longDescription: "Why I Built This: As a computer science student myself, I found that juggling assignments, notes, and schedules often becomes overwhelming. This app was born out of that experience to provide a simple, centralized platform that helps students manage their:",
      technologies: ["React", "SpringBoot" , "SQL"],
      github: "https://github.com/Sashanka2001/CS-Study-Buddy-website.git",
      demo: "",
      image: "cs.png",
      category: "Full Stack",
       year: "2025",
    },

    {
      id: 2,
      title: "NEMRA Smart Apartment 🏙️",
      description: "Collaborative apartment management system with real-time updates",
      longDescription:
        "Team collaboration platform with project boards, task assignment, real-time notifications, and progress tracking. Built with modern web technologies.",
      technologies: ["TypeScript", "PostgreSQL", "SpringBoot", "Paypal Integration", "Jira", "Figma"],
      github:
        "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group_12_nemra-apartment_management_system.git",
      demo: "https://youtu.be/MuT70hK8rsE",
      image: "/nemra.png?height=300&width=500",
      category: "Full Stack",
      year: "2025",
    },
    {
      id: 3,
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
      id: 4,
      title: "Portfolio Website 👩🏻",
      description: "Personal portfolio showcasing projects and skills",
      longDescription:
        "Responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      github: "https://github.com/Sashanka2001/My_Portfolio_Website.git",
      demo: "https://sashankar.vercel.app/",
      image: "/pf.png?height=300&width=500",
      category: "Frontend",
      year: "2025",
    },
    {
      id: 5,
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
      id: 6,
      title: "Cozy Cup Coffee Shop 🧋",
      description:
        "A full-stack web application for a coffee shop with online ordering, user authentication, and payment integration",
      longDescription:
        "Built with React, Node.js, and MongoDB. Features include user registration/login, menu browsing, cart functionality, order management, and admin panel for managing products and orders.",
      technologies: ["React", "SQL", "Figma", "Paypal Integration"],
      github: "https://github.com/Sashanka2001/Cozy_Cup",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7286125017543725056/",
      image: "/cozycup.png?height=300&width=500",
      category: "Web App",
      year: "2024",
    },
    {
      id: 7,
      title: "SplendourLux (An Online Shopping Site) 🛍️",
      description: "Developed a modern e-commerce solution with secure payment integration and dynamic inventory management as part of a team collaboration",
      longDescription:
        "Complete e-commerce platform with user authentication, product catalog, shopping cart, payment processing, and order tracking. Admin dashboard for inventory and order management.",
      technologies: ["React", "SpringBoot", "SQL", "Paypal Integration"],
      github: "https://github.com/IT23231528chamudi/OOAD-Group-12-Frontend.git",
      demo: "#",
      image: "/SplendourLux.png?height=300&width=500",
      category: "Full Stack",
      year: "2024",
    },
    {
      id: 8,
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
      id: 9,
      title: "Sustainable Computing Research 🌱",
      description: "Collaboratively researched and proposed strategies to reduce carbon emissions and optimize resource usage in distributed computing systems ",
      image: "/coa.png?height=300&width=500",
      category: "Research",
      technologies: [],
      pdf : "https://mysliit-my.sharepoint.com/:b:/g/personal/it23231528_my_sliit_lk/EXZ3zqkvj6pGoQxeqJiYyAABFH5WLKmYfLlHc3QFMd8LYw?e=0Rw2yX",
      year: "2024",
    },
     {
      id: 10,
      title: "Network Infrastructure Design 🔒",
      description: "Collaboratively designed a secure and scalable network infrastructure for a small enterprise operating across two floors",
      image: "/cn.jpeg?height=300&width=500",
      category: "Research",
      technologies: [],
      pdf : "https://mysliit-my.sharepoint.com/:b:/g/personal/it23231528_my_sliit_lk/ES8p-A0kEztOjXhTfw1MVpMBPYDIo_mbJka93oyk2FqcpQ?e=n3fhHf",
      year: "2024",
    },
    {
      id: 11,
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
      id: 12,
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
      id: 13,
      title: "Smart IoT Food Monitoring System 🥬",
      description: "An IoT-based system for monitoring food freshness and storage conditions, designed and implemented collaboratively",
      longDescription:
        "Smart monitoring system using Arduino sensors to track temperature, humidity, and other factors affecting food quality. Includes web dashboard for real-time monitoring.",
      technologies: ["ESP8266 Wi Fi Module", "DHT11 Sensor", "MQ2  Gas Sensor", "Firebase", "HTML", "CSS", "Javascript", "Python"],
      github: "https://github.com/IT23231528chamudi/The-Smart-IoT-Food-Monitoring-System-master.git",
      demo: "https://youtu.be/H4k7qogUH7w",
      image: "/CT.jpg?height=300&width=500",
      category: "Full Stack",
      pdf : "https://mysliit-my.sharepoint.com/:b:/g/personal/it23231528_my_sliit_lk/EdemqOR2GYdJvCD8aqb3DGkBSC2WuVbd8pLgm2QbfhI6bw?e=YLvCoR",
      year: "2023",
    },
    
  ]

  const categories = ["All", "Full Stack", "Frontend", "Web App", "Graphics & Visualization", "Games", "Research"]

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6)

  const bgColors = [
    "bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-indigo-900/30 border border-indigo-200/10",
    "bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-orange-900/30 border border-orange-200/10",
    "bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-900/30 border border-cyan-200/10",
    "bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-lime-900/30 border border-lime-200/10",
    "bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-rose-900/30 border border-rose-200/10",
  ]

  const hoverGlowColors = [
    "from-blue-500 to-purple-600",
    "from-orange-500 to-red-600",
    "from-teal-500 to-cyan-600",
    "from-green-500 to-lime-600",
    "from-pink-500 to-rose-600",
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
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

      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header with fade-in animation */}
        <section
          id="projects-header"
          className={`text-center mb-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-4xl md:text-6xl font-bold text-slate-100 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-4">
            My Projects
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6 origin-left scale-x-100 transition-transform duration-700"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                  : "bg-slate-800/70 text-slate-300 border border-slate-600/50 hover:bg-slate-700/80 hover:text-teal-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl rounded-3xl p-12 shadow-[0_30px_90px_rgba(0,0,0,0.5)] mb-20">
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
                  className={`absolute inset-0 bg-gradient-to-br ${hoverGlowColors[index % hoverGlowColors.length]} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl pointer-events-none blur-[15px]`}
                ></div>

                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-slate-800/80 rounded-full flex items-center justify-center shadow-md border border-slate-600/40">
                      <Code2 className="w-5 h-5 text-teal-300" />
                    </div>
                    <span className="text-xs bg-slate-800/85 text-slate-300 px-2 py-1 rounded-full border border-slate-600/30">
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

                  <h4 className="font-semibold text-slate-100 mb-2 text-sm leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-300 mb-3">{project.description}</p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-800/80 text-cyan-200 text-xs rounded-md border border-slate-600/40"
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

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

 "use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Code, Database, Globe, Smartphone, Award, Users, Target, ChevronDown, ChevronUp, Download } from "lucide-react"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [showAllCertificates, setShowAllCertificates] = useState(false)

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
      title: "10+ Projects",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 transition-all duration-1000 animate-fade-in-up">
  <h3 className="text-4xl md:text-6xl font-bold text-slate-800 gradient-text mb-4">About Me</h3>
  <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
    Passionate Computer Science student with a love for creating innovative solutions through code.
  </p>
</div>


          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Photo and Basic Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-56 mx-auto bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold mb-6 overflow-hidden">
                  <img
                    src="Profilepic.jpg"
                    alt="Professional portrait"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 text-center mb-2">Sashanka Rathnayaka</h2>
                <p className="text-slate-600 text-center mb-4">Computer Science Student</p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <strong>Location:</strong> Sri Lanka
                  </p>
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
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Achievements</h3>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-2">
                        {achievement.icon}
                      </div>
                      <h4 className="font-semibold text-slate-800 text-sm">{achievement.title}</h4>
                      <p className="text-xs text-slate-600 mt-1">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="space-y-8">
              {/* My Story */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">My Story</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Hello! I'm Sashanka Rathnayaka, a third-year Computer Science undergraduate at SLIIT with a passion
                    for building impactful digital solutions. My journey began with a curiosity about how software
                    works, which soon grew into hands-on experience in full-stack web development, distributed systems,
                    and human-computer interaction.
                  </p>
                  <p>
                    I specialize in technologies like React.js, Node.js, JavaScript, Python, Java, and SQL, and have
                    also explored lower-level programming using C, Fortran, and Lex/Yacc. My academic and project work
                    spans UI/UX design, compiler construction, IoT-based applications, and game development. I'm
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
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Code className="w-6 h-6 text-blue-600" />
                    Core Competencies
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                      <Code className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <h4 className="font-semibold text-slate-800 mb-1">Frontend</h4>
                      <p className="text-sm text-slate-600">React, TypeScript</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                      <Database className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <h4 className="font-semibold text-slate-800 mb-1">Backend</h4>
                      <p className="text-sm text-slate-600">Node.js, APIs</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                      <Globe className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <h4 className="font-semibold text-slate-800 mb-1">Database</h4>
                      <p className="text-sm text-slate-600">MySQL, PostgreSQL</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                      <Smartphone className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                      <h4 className="font-semibold text-slate-800 mb-1">Programming Languages</h4>
                      <p className="text-sm text-slate-600">Python, Java, C</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>

          {/* Certificates Section - Show 3 initially with expand option */}
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-20">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Licenses & Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedCertificates.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                       
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{cert.year}</span>
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm leading-tight">{cert.name}</h4>
                    <p className="text-xs text-slate-600 mb-3">{cert.organization}</p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md border border-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-600 text-xs font-medium hover:text-teal-800 transition-colors"
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
  className="bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-lg shadow-md transition duration-300 flex items-center justify-center mx-auto"
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
           

          {/* Interests */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Areas of Interest</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest, index) => (
                <Badge key={index} variant="secondary" className="bg-teal-100 text-teal-800 px-4 py-2">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

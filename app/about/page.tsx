"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Code, Database, Globe, Smartphone, Award, Users, Target } from "lucide-react"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

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

  const interests = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "AI/ML",
    "Open Source",
    "Database Design",
  ]

  const certificates = [
    {
    name: "Agile Project Management - IT Project Management",
    organization: "University of Moratuwa",
    link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
  {
    name: "Programming in Python - 1. Python for Beginners",
    organization: "University of Moratuwa",
     link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
  {
     name: "Programming in Python - 2. Python for Beginners",
    organization: "University of Moratuwa",
     link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
  {
    name: "Web Development - 1.Web Design for Beginners",
    organization: "University of Moratuwa",
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
  {
    name: "Web Development - 2.Front-End Web Development",
    organization: "University of Moratuwa",
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
  {
    name: "Web Development - 3.Server-side web programming",
    organization: "University of Moratuwa",
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
  {
    name: "SQL(Basic)",
    organization: "Hacker Rank",
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
  {
    name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    organization: "Microsoft",
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
  {
    name: "Introduction to C Programming Language",
    organization: "Sololearn",
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
  {
    name: "C Programming Language Intermediate",
    organization: "Sololearn",
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
  {
    name: "Introduction to Programming Using Java",
    organization: "Sololearn",
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
   {
    name: "Java Intermediate",
    organization: "Sololearn",
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
   {
    name: "Introduction to Python Programming Language",
    organization: "Sololearn",
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
   {
    name: "Python Programming LanguageIntermediate",
    organization: "Sololearn",
      link: "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/details/certifications/",
    year: "2025",
  },
  {
    name: "Professional Practice in Software Development - 3.Capstone Project",
    organization: "University of Moratuwa",
      link: "https://open.uom.lk/lms/course/view.php?id=20",
    year: "2025",
  },

   
]


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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">About Me</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate Computer Science student with a love for creating innovative solutions through code.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Photo and Basic Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-56  mx-auto bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold mb-6 overflow-hidden">
                 <img
                    src="Profilepic.jpg"
                    alt="Professional portrait"
                    className="w-full h-full object-cover rounded-full" />
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
                    for building impactful digital solutions. My journey began with a curiosity about how software works,
                     which soon grew into hands-on experience in full-stack web development, distributed systems, and human-computer interaction.
                  </p>
                  <p>
                   I specialize in technologies like React.js, Node.js, JavaScript, Python, Java, and SQL, and have also explored 
                   lower-level programming using C, Fortran, and Lex/Yacc. My academic and project work spans UI/UX design, compiler construction, 
                   IoT-based applications, and game development. I’m familiar with tools like Figma, Jira, and methodologies such as Agile and Scrum.
                  </p>
                  <p>
                    Whether I’m crafting responsive user interfaces, designing robust backends, or experimenting with emerging technologies,
                     I bring a collaborative mindset and a drive to keep learning. I’m currently seeking internship opportunities 
                     where I can grow further, contribute meaningfully, and work alongside passionate developers.
                     </p>


                  
                </div>
              </div>

              {/* Skills Overview */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Code className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold text-slate-800">Frontend</h4>
                    <p className="text-sm text-slate-600">React,TypeScript</p>
                  </div>
                  <div className="text-center">
                    <Database className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <h4 className="font-semibold text-slate-800">Backend</h4>
                    <p className="text-sm text-slate-600">Node.js,APIs</p>
                  </div>
                  <div className="text-center">
                    <Globe className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <h4 className="font-semibold text-slate-800">Database</h4>
                    <p className="text-sm text-slate-600">MySQL, PostgreSQL</p>
                  </div>
                  <div className="text-center">
                    <Smartphone className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                    <h4 className="font-semibold text-slate-800">Programming Languages</h4>
                    <p className="text-sm text-slate-600">Python, Java, C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         {/* Certificates Section */} 
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-20 max-w-4xl mx-auto">
  <h3 className="text-3xl font-bold text-slate-800 mb-8">Licenses & certifications</h3>
  <ul className="space-y-6">
    {certificates.map((cert, index) => (
      <li key={index} className="border border-slate-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
        <h4 className="text-lg font-semibold text-slate-800">{cert.name}</h4>
        <p className="text-sm text-slate-600">{cert.organization} — {cert.year}</p>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 text-sm underline hover:text-teal-800"
        >
          View Certificate
        </a>
      </li>
    ))}
  </ul>
</div>

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

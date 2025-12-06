 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Code, Zap, Globe, Cpu, Layers, Wrench, Sparkles } from "lucide-react"

const skillIcons: Record<string, string> = {
  
}

const categoryIcons = {
  "Programming Languages": Code,
  "Frameworks & Libraries": Layers,
  "Tools & Technologies": Wrench,
  "Web Technologies": Globe,
  "Programming Paradigms & Principles": Cpu,
  "Development Methodologies": Zap,
  "Networking & Security:": Sparkles,
  "Database:": Code,
  "Operating Systems:": Code,
}

export default function SkillsSection() {
  const [showAllSkills, setShowAllSkills] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("skills")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const skills = {
    "Programming Languages": [
      "Java",
      "C Language",
      "Python",
      "JavaScript",
      "TypeScript",
      "R Language",
      "C# (Learning)"
    ],
    " Web Development:": [
      "React",
      "Spring Boot",
      "ASP.NET Web API",
      "Node.js",
      "Next.js",
      "Flutter (Learning)",
      "HTML",
      "Tailwind CSS"

    ],

     "Programming Paradigms &  Development Concepts: ": [
      "Object-Oriented Programming (OOP)",
      "SOLID Design Principles",
      "SDLC",
      "ACID Properties",
      "Agile Development",
      "BNF / EBNF",
      "Lex and Yacc",
    ],

    "Operating Systems" : ["Linux (Ubuntu)"],

    "Dtabase": [
    "MySQL",
    "Firebase",
    "PostgreSQL",
    ],

    "Cloud Technologies: ": [
    "Vercel",
    "AWS (Learning)",
    "Azure (Learning)",
    ],

    "Project management Tools": [
    "Jira",
    "Clickup",
    ],


     "Design Tools and IDEs": [
      "Git",
      "draw.io",
      "Figma",
      "FlutterFlow",
      "VS Code",
      "Intellij",
    ],

    "Testing Frameworks and Tools": [
      "Playwright",
      "Swagger",
      "Postman",
    ],

     "Networking & Security": ["Wireshark (basic protocol analysis and network design)"],

    
  }


  // Show only first 3 categories initially, or all if showAllSkills is true
  const skillEntries = Object.entries(skills)
  const displayedSkills = showAllSkills ? skillEntries : skillEntries.slice(0, 3)

  const getCategoryColor = (index: number) => {
    const colors = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-teal-600",
      "from-orange-500 to-red-600",
      "from-purple-500 to-pink-600",
      "from-teal-500 to-cyan-600",
      "from-indigo-500 to-blue-600",
      "from-pink-500 to-rose-600",
    ]
    return colors[index % colors.length]
  }

  const getCategoryBg = (index: number) => {
    const backgrounds = [
      "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10",
      "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/10 dark:to-teal-900/10",
      "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10",
      "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10",
      "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/10 dark:to-cyan-900/10",
      "bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10",
      "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10",
    ]
    return backgrounds[index % backgrounds.length]
  }

  return (
    <section
      id="skills"
      className="py-20 px-6 sm:px-10 lg:px-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 gradient-text mb-4">
            Skills & Technologies
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive showcase of technologies and concepts I've mastered through hands-on experience and
            continuous learning.
          </p>
        </div>

        {/* Skills Grid - Enhanced Certificate Style */}
        <div
          className={`bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl mb-8 relative overflow-hidden transition-all duration-1000 ${isVisible ? "animate-slide-up animate-delay-200" : "opacity-0"}`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-400/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-2xl"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 relative">
            {displayedSkills.map(([category, skillList], categoryIndex) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Code
              const isHovered = hoveredCategory === category

              return (
                <Card
                  key={category}
                  className={`group hover:shadow-2xl transition-all duration-500 hover-lift card-hover dark:bg-slate-700 border-0 ${getCategoryBg(categoryIndex)} ${categoryIndex < 3 ? "animate-bounce-in" : ""} overflow-hidden relative`}
                  style={categoryIndex < 3 ? { animationDelay: `${0.3 + categoryIndex * 0.1}s` } : {}}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Card Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(categoryIndex)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="p-8 relative">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${getCategoryColor(categoryIndex)} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float`}
                        style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 dark:group-hover:from-slate-100 dark:group-hover:to-slate-300 transition-all duration-300">
                          {category}
                        </h4>
                        <div
                          className={`w-12 h-1 bg-gradient-to-r ${getCategoryColor(categoryIndex)} rounded-full mt-2 group-hover:w-20 transition-all duration-300`}
                        ></div>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={`group/skill px-3 py-2 bg-white/80 dark:bg-slate-600/50 text-slate-700 dark:text-slate-300 text-sm rounded-xl border border-slate-200/50 dark:border-slate-500/30 flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 ${categoryIndex < 3 ? "animate-fade-in-up" : ""} backdrop-blur-sm`}
                          style={categoryIndex < 3 ? { animationDelay: `${0.5 + skillIndex * 0.05}s` } : {}}
                        >
                          {skillIcons[skill] && (
                            <img
                              src={skillIcons[skill] || "/placeholder.svg"}
                              alt={skill}
                              className="w-4 h-4 object-contain group-hover/skill:scale-110 transition-transform duration-200"
                            />
                          )}
                          <span className="font-medium group-hover/skill:text-slate-900 dark:group-hover/skill:text-slate-100 transition-colors duration-200">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(categoryIndex)} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`}
                    ></div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Enhanced View All Button */}
          <div className="text-center relative">
            <Button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className={`bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift btn-ripple animate-glow group ${isVisible ? "animate-bounce-in animate-delay-600" : "opacity-0"}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                  {showAllSkills ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
                <span>
                  {showAllSkills ? (
                    <>Show Less Skills & Technologies</>
                  ) : (
                    <>Explore All Skills & Technologies ({skillEntries.length} Categories)</>
                  )}
                </span>
              </div>
            </Button>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

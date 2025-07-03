 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const skillIcons: Record<string, string> = {
  // Programming Languages
  Python: "https://skillicons.dev/icons?i=python",
  Java: "https://skillicons.dev/icons?i=java",
  "C Language": "https://skillicons.dev/icons?i=c",
  "R Language": "https://skillicons.dev/icons?i=r",
  JavaScript: "https://skillicons.dev/icons?i=javascript",
  TypeScript: "https://skillicons.dev/icons?i=ts",
  "C++ (Self study)": "https://skillicons.dev/icons?i=cpp",
  SQL: "https://skillicons.dev/icons?i=mysql",
  // Frameworks & Libraries
  "React.js": "https://skillicons.dev/icons?i=react",
  "Spring Boot": "https://skillicons.dev/icons?i=spring",
  "Angular (Self study)": "https://skillicons.dev/icons?i=angular",
  "AngularJS (Self study)": "https://skillicons.dev/icons?i=angularjs",
  "jQuery (Self study)": "https://skillicons.dev/icons?i=jquery",
  // Web Technologies
  HTML: "https://skillicons.dev/icons?i=html",
  CSS: "https://skillicons.dev/icons?i=css",
  // Tools & Technologies
  Git: "https://skillicons.dev/icons?i=git",
  Linux: "https://skillicons.dev/icons?i=linux",
  Figma: "https://skillicons.dev/icons?i=figma",
  MySQL: "https://skillicons.dev/icons?i=mysql",
  Arduino: "https://skillicons.dev/icons?i=arduino",
}

export default function SkillsSection() {
  const [showAllSkills, setShowAllSkills] = useState(false)

  const skills = {
    "💻 Programming Languages": [
      "Python",
      "Java",
      "C Language",
      "R Language",
      "Fortran",
      "Algol",
      "JavaScript",
      "TypeScript",
      "C++ (Self study)",
      "GNU Octave",
      "SQL",
    ],
    "⚙️ Frameworks & Libraries": [
      "React.js",
      "Spring Boot",
      "Angular (Self study)",
      "AngularJS (Self study)",
      "jQuery (Self study)",
    ],

    "⚡Tools & Technologies": [
      "Git",
      "Lex and Yacc",
      "Jira",
      "Linux",
      "Microsoft Office",
      "Figma",
      "MySQL",
      "Arduino",
      "Wireshark",
      "RStudio",
    ],

    "🌐 Web Technologies": ["HTML", "CSS"],

    "🧩 Programming Paradigms & Principles": [
      "Object-Oriented Programming (OOP)",
      "SOLID Design Principles",
      "BNF and EBNF",
    ],
    "🧮 Development Methodologies": ["Agile Methodologies"],
    "🤖 Emerging Technologies": ["Generative AI and Tools", "Search Engine Technology"],
  }

  // Show only first 3 categories initially, or all if showAllSkills is true
  const skillEntries = Object.entries(skills)
  const displayedSkills = showAllSkills ? skillEntries : skillEntries.slice(0, 3)

  return (
    <section id="skills" className="py-20 px-6 sm:px-10 lg:px-20 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A categorized view of technologies and concepts I've worked with or studied.
          </p>
        </div>

        {/* Skills Grid - Certificate Style */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedSkills.map(([category, skillList]) => {
              return (
                <Card key={category} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-slate-800 mb-3 text-sm leading-tight">{category}</h4>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1">
                      {skillList.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md border border-blue-100 flex items-center gap-1"
                        >
                          {skillIcons[skill] && (
                            <img
                              src={skillIcons[skill] || "/placeholder.svg"}
                              alt={skill}
                              className="w-3 h-3 object-contain"
                            />
                          )}
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* View All / Show Less Button */}
          <div className="text-center">
            <Button
              onClick={() => setShowAllSkills(!showAllSkills)}
              variant="outline"
              className="bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100 hover:border-teal-300 px-6 py-2"
            >
              {showAllSkills ? (
                <>
                  Show Less Skills & Technologies
                  <ChevronUp className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  View All Skills & Technologies ({skillEntries.length})
                  <ChevronDown className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

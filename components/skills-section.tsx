 "use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const categoryColors: Record<string, string> = {
  "💻 Programming Languages": "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
  "⚙️ Frameworks & Libraries": "bg-green-100 text-green-800 hover:bg-green-200",
  "🌐 Web Technologies": "bg-pink-100 text-pink-800 hover:bg-pink-200",
  "⚡Tools & Technologies": "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  "🧩 Programming Paradigms & Principles": "bg-purple-100 text-purple-800 hover:bg-purple-200",
  "🧮 Development Methodologies": "bg-cyan-100 text-cyan-800 hover:bg-cyan-200",
  "🤖 Emerging Technologies": "bg-red-100 text-red-800 hover:bg-red-200",
}

const skillIcons: Record<string, string> = {
  // Programming Languages
  "Python": "https://skillicons.dev/icons?i=python",
  "Java": "https://skillicons.dev/icons?i=java",
  "C Language": "https://skillicons.dev/icons?i=c",
  "R Language": "https://skillicons.dev/icons?i=r",
   "JavaScript": "https://skillicons.dev/icons?i=javascript",
  "TypeScript": "https://skillicons.dev/icons?i=ts",
  "C++ (Self study)": "https://skillicons.dev/icons?i=cpp",
   "SQL": "https://skillicons.dev/icons?i=mysql",

  // Frameworks & Libraries
  "React.js": "https://skillicons.dev/icons?i=react",
  "Spring Boot": "https://skillicons.dev/icons?i=spring",
  "Angular (Self study)": "https://skillicons.dev/icons?i=angular",
  "AngularJS (Self study)": "https://skillicons.dev/icons?i=angularjs",
  "jQuery (Self study)": "https://skillicons.dev/icons?i=jquery",

  // Web Technologies
  "HTML": "https://skillicons.dev/icons?i=html",
  "CSS": "https://skillicons.dev/icons?i=css",

  // Tools & Technologies
  "Git": "https://skillicons.dev/icons?i=git",
   "Jira": "https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white",
  "Linux": "https://skillicons.dev/icons?i=linux",
   "Figma": "https://skillicons.dev/icons?i=figma",
  "MySQL": "https://skillicons.dev/icons?i=mysql",
  "Arduino": "https://skillicons.dev/icons?i=arduino",
 
}

export default function SkillsSection() {
  const skills = {
    "💻 Programming Languages": [
      "Python", "Java", "C Language", "R Language",
      "Fortran", "Algol", "JavaScript", "TypeScript", "C++ (Self study)",
      "GNU Octave", "SQL"
    ],
    "⚙️ Frameworks & Libraries": [
      "React.js", "Spring Boot", "Angular (Self study)", "AngularJS (Self study)",
      "jQuery (Self study)"
    ],
    "🌐 Web Technologies": [
      "HTML", "CSS"
    ],
    "⚡Tools & Technologies": [
      "Git", "Lex and Yacc", "Jira", "Linux", "Microsoft Office", "Figma",
      "MySQL", "Arduino", "Wireshark", "RStudio"
    ],
    "🧩 Programming Paradigms & Principles": [
      "Object-Oriented Programming (OOP)", "SOLID Design Principles", "BNF and EBNF"
    ],
    "🧮 Development Methodologies": [
      "Agile Methodologies"
    ],
    "🤖 Emerging Technologies": [
      "Generative AI and Tools", "Search Engine Technology"
    ],
  }

  return (
    <section id="skills" className="py-20 px-6 sm:px-10 lg:px-20 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
          Skills & Technologies
        </h2>
        <p className="text-center text-slate-500 mb-12">
          A categorized view of technologies and concepts I’ve worked with or studied.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge
                    key={skill}
                    className={cn(
                      "text-sm font-medium px-3 py-1.5 flex items-center gap-2",
                      categoryColors[category]
                    )}
                  >
                    {skillIcons[skill] ? (
                      <img
                        src={skillIcons[skill]}
                        alt={skill}
                        className="w-5 h-5 object-contain"
                      />
                    ) : null}
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

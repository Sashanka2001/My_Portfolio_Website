 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { GraduationCap, School, BookOpen, ChevronDown, ChevronUp } from "lucide-react"

export default function EducationSection() {
  const [showAllEducation, setShowAllEducation] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("education")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "SLIIT - Sri Lanka Institute of Information Technology",
      status: "Currently Pursuing",
      expectedGraduation: "2027",
      description:
        "Comprehensive study of computer science fundamentals including programming, algorithms, data structures, software engineering, database systems, and computer networks.",
       
      
      year: "2023 - 2027",
      type: "University",
      icon: GraduationCap,
    },
    {
      id: 2,
      degree: "Advanced Level (A/L)",
      institution: "Holy Family Balika - Kurunegala",
      status: "Completed",
      stream: "Science Stream (Physical Science)",
      coreSubjects: ["Physics", "Chemistry", "Combined Mathematics"],
      year: "2018 - 2020",
      grade: "A/L",
      type: "School",
      icon: School,
    },
    {
      id: 3,
      degree: "Primary & Secondary Education",
      institution: "Wayamba Royal College - Kurunegala",
      status: "Completed",
      coreSubjects: ["Mathematics", "Science", "Buddhism", "English", "History","Sinhala", "Tamil","Eastern Music", "ICT"],
      year: "2006 - 2018",
      grade: "Grade 1 to 11",
      type: "School",
      icon: BookOpen,
    },
  ]

  // Show only first 1 education entry initially, or all if showAllEducation is true
  const displayedEducation = showAllEducation ? education : education.slice(0, 1)

  return (
    <section
      id="education"
      className="py-20 px-6 sm:px-10 lg:px-20 bg-white dark:bg-slate-800 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <div
        className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 gradient-text mb-4">Education</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          My academic background and educational qualifications from university to school level.
        </p>
      </div>

      {/* Education Grid - Certificate Style */}
      <div
        className={`bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl mb-8 relative overflow-hidden transition-all duration-1000 ${isVisible ? "animate-slide-up animate-delay-200" : "opacity-0"}`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-400/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
        <div className="grid gap-6 mb-8">
          {displayedEducation.map((edu, index) => {
            const IconComponent = edu.icon
            return (
              <Card
                key={edu.id}
                className={`group hover:shadow-2xl transition-all duration-500 hover-lift card-hover dark:bg-slate-700 border-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 ${index < 1 ? "animate-bounce-in" : ""} overflow-hidden relative`}
                style={index < 1 ? { animationDelay: `${0.3 + index * 0.1}s` } : {}}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-300 px-3 py-2 rounded-full font-medium">
                      {edu.year}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-3 text-xl leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 dark:group-hover:from-slate-100 dark:group-hover:to-slate-300 transition-all duration-300">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 font-semibold">{edu.institution}</p>

                  {edu.expectedGraduation ? (
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                      {edu.status} • Expected Graduation: {edu.expectedGraduation}
                    </p>
                  ) : (
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                      {edu.status} {edu.grade && `• Grade: ${edu.grade}`}
                    </p>
                  )}

                  {edu.stream && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 font-medium">{edu.stream}</p>
                  )}

                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">{edu.description}</p>

                  {edu.coreSubjects && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-slate-800 dark:text-slate-100 mb-3 text-sm">
                        {edu.type === "University" ? "Core Subjects" : "Subjects"}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coreSubjects.map((subject, subjectIndex) => (
                          <span
                            key={subjectIndex}
                            className={`px-3 py-2 bg-white/80 dark:bg-slate-600/50 text-slate-700 dark:text-slate-300 text-sm rounded-xl border border-slate-200/50 dark:border-slate-500/30 font-medium hover:scale-105 transition-transform duration-200 ${index < 1 ? "animate-fade-in-up" : ""} backdrop-blur-sm`}
                            style={index < 1 ? { animationDelay: `${0.5 + subjectIndex * 0.05}s` } : {}}
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View All / Show Less Button */}
        {education.length > 1 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAllEducation(!showAllEducation)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift btn-ripple animate-glow group"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                  {showAllEducation ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
                <span>
                  {showAllEducation ? <>Show Less Education</> : <>View All Education ({education.length})</>}
                </span>
              </div>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

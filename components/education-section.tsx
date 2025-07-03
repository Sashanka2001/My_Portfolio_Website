 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { GraduationCap, School, BookOpen, ChevronDown, ChevronUp } from "lucide-react"

export default function EducationSection() {
  const [showAllEducation, setShowAllEducation] = useState(false)

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "SLIIT - Sri Lanka Institute of Information Technology",
      status: "Currently Pursuing",
      expectedGraduation: "2027",
      description:
        "Comprehensive study of computer science fundamentals including programming, algorithms, data structures, software engineering, database systems, and computer networks.",
      coreSubjects: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
        
      ],
      year: "2022 - 2027",
      type: "University",
      icon: GraduationCap,
    },
    {
      id: 2,
      degree: "Advanced Level (A/L)",
      institution: "Holy Family Balika",
      status: "Completed",
      stream: "Science Stream (Physical Science)",
      description: "Completed Advanced Level education focusing on Physical Science subjects.",
      coreSubjects: ["Physics", "Chemistry", "Combined Mathematics"],
      year: "2018 - 2020",
      grade: "A/L",
      type: "School",
      icon: School,
    },
    {
      id: 3,
      degree: "Primary & Secondary Education",
      institution: "Wayamba Royal College",
      status: "Completed",
      description: "Completed primary and secondary education from Grade 1 to Grade 11.",
      year: "2006 - 2018",
      grade: "Grade 1 to 11",
      type: "School",
      icon: BookOpen,
    },
  ]

  // Show only first 1 education entry initially, or all if showAllEducation is true
  const displayedEducation = showAllEducation ? education : education.slice(0, 1)

  return (
    <section id="education" className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My academic background and educational qualifications from university to school level.
          </p>
        </div>

        {/* Education Grid - Certificate Style */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-8">
          <div className="grid gap-6 mb-8">
            {displayedEducation.map((edu) => {
              const IconComponent = edu.icon
              return (
                <Card key={edu.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{edu.year}</span>
                    </div>

                    <h4 className="font-semibold text-slate-800 mb-2 text-lg leading-tight">{edu.degree}</h4>
                    <p className="text-sm text-slate-600 mb-2 font-medium">{edu.institution}</p>

                    {edu.expectedGraduation ? (
                      <p className="text-xs text-slate-600 mb-3">
                        {edu.status} • Expected Graduation: {edu.expectedGraduation}
                      </p>
                    ) : (
                      <p className="text-xs text-slate-600 mb-3">
                        {edu.status} {edu.grade && `• Grade: ${edu.grade}`}
                      </p>
                    )}

                    {edu.stream && <p className="text-xs text-slate-600 mb-3 font-medium">{edu.stream}</p>}

                    <p className="text-xs text-slate-600 mb-4">{edu.description}</p>

                    {/* Core Subjects */}
                    {edu.coreSubjects && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-slate-800 mb-2 text-sm">
                          {edu.type === "University" ? "Core Subjects" : "Subjects"}
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {edu.coreSubjects.map((subject, subjectIndex) => (
                            <span
                              key={subjectIndex}
                              className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-md border border-purple-100"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
                variant="outline"
                className="bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100 hover:border-teal-300 px-6 py-2"
              >
                {showAllEducation ? (
                  <>
                    Show Less Education
                    <ChevronUp className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    View All Education ({education.length})
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

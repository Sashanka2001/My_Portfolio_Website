 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Computer Science Student",
      organization: "SLIIT - Sri Lanka Institute of Information Technology",
      description: "Currently pursuing Bachelor's degree in Computer Science",
      details:
        "Actively learning and applying computer science principles through coursework and personal projects. Focus areas include software development, algorithms, data structures, and web technologies.",
      skills: ["Academic Projects", "Team Collaboration", "Problem Solving", "Research"],
      year: "2025 - Present",
      type: "Education",
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 sm:px-10 lg:px-20 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My educational journey and learning experiences in computer science.
          </p>
        </div>

        {/* Experience Grid - Certificate Style */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="grid gap-6">
            {experiences.map((experience) => (
              <Card key={experience.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                      {experience.year}
                    </span>
                  </div>

                  <h4 className="font-semibold text-slate-800 mb-2 text-lg leading-tight">{experience.title}</h4>
                  <p className="text-sm text-slate-600 mb-2 font-medium">{experience.organization}</p>
                  <p className="text-xs text-slate-600 mb-3">{experience.description}</p>
                  <p className="text-xs text-slate-600 mb-4">{experience.details}</p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-md border border-green-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

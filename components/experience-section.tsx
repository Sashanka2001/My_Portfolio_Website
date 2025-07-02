"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">Computer Science Student</CardTitle>
              <CardDescription className="text-slate-600">
                Currently pursuing Bachelor's degree in Computer Science
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Actively learning and applying computer science principles through coursework and personal projects.
                Focus areas include software development, algorithms, data structures, and web technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Academic Projects</Badge>
                <Badge variant="secondary">Team Collaboration</Badge>
                <Badge variant="secondary">Problem Solving</Badge>
                <Badge variant="secondary">Research</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

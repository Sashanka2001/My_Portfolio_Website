"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EducationSection() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">Bachelor of Science in Computer Science</CardTitle>
              <CardDescription className="text-slate-600">
                Currently Pursuing • Expected Graduation: 2027
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Comprehensive study of computer science fundamentals including programming, algorithms, data structures,
                software engineering, database systems, and computer networks.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Core Subjects</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Data Structures & Algorithms</li>
                    <li>• Object-Oriented Programming</li>
                    <li>• Database Management Systems</li>
                    <li>• Software Engineering</li>
                  </ul>
                </div>
                 
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

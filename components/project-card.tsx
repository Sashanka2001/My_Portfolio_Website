 "use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Eye } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  github: string
  demo: string
  image: string
  category: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowDetails(!showDetails)}
            className="bg-white/90 text-slate-800 hover:bg-white"
          >
            <Eye className="w-4 h-4 mr-2" />
            {showDetails ? "Hide Details" : "View Details"}
          </Button>
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
          <Badge variant="outline" className="text-xs">
            {project.category}
          </Badge>
        </div>
        <CardDescription>{showDetails ? project.longDescription : project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          {/* GitHub Link */}
          {project.github && project.github !== "#" ? (
            <Button size="sm" variant="outline" className="flex items-center gap-2 flex-1 bg-transparent" asChild>
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                Code
              </Link>
            </Button>
          ) : (
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2 flex-1 bg-transparent opacity-50"
              disabled
            >
              <Github size={16} />
              Code
            </Button>
          )}

          {/* Demo Link */}
          {project.demo && project.demo !== "#" ? (
            <Button size="sm" className="flex items-center gap-2 flex-1 bg-teal-600 hover:bg-teal-700" asChild>
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                Demo
              </Link>
            </Button>
          ) : (
            <Button
              size="sm"
              className="flex items-center gap-2 flex-1 bg-teal-600 hover:bg-teal-700 opacity-50"
              disabled
            >
              <ExternalLink size={16} />
              Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectAccordions } from "@/components/project-accordions"
import { Project } from "@/lib/data-fetch"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const createdDate = new Date(project.created_at)
  
  const getDemoUrl = (title: string) => {
    if (title === 'PrettyPlaylister') {
      return 'https://www.prettyplaylister.com'
    }
    return `https://TonyMakis.github.io/${title}`
  }

  return (
    <Card className="neobrutalism-card h-full flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="neobrutalism-text text-xl">
          {project.name || 'Title TBA . . .'}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <div className="neobrutalism-accent p-4 mb-4">
          <p className="text-sm mb-3 font-medium">
            {project.description || 'Description TBD . . .'}
          </p>
          
          <p className="text-sm font-bold">
            📅{' '}
            <em>
              {createdDate.toLocaleString('default', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </em>
          </p>
        </div>

        <div className="flex gap-2 mb-4">
          <Button
            variant="neobrutalism"
            size="sm"
            asChild
            className="flex-1"
          >
            <a
              href={`${project.html_url}/tree/master`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              SOURCE
            </a>
          </Button>
          
          <Button
            variant="neobrutalism"
            size="sm"
            asChild
            className="flex-1"
          >
            <a
              href={getDemoUrl(project.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              DEMO
            </a>
          </Button>
        </div>

        <div className="mt-auto">
          <ProjectAccordions
            contributors={project.contribs}
            commits={project.commits}
            languagesUsed={project.langs}
          />
        </div>
      </CardContent>
    </Card>
  )
}

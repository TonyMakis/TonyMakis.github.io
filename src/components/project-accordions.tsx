"use client"

import { useState } from "react"
import { Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Users, GitCommit, Code } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LanguageIcon } from "@/components/ui/language-icon"
import { formatCommitsToPieData, formatLangsImgData } from "@/lib/data-formatting"
import { Project } from "@/lib/data-fetch"

ChartJS.register(ArcElement, Tooltip, Legend)

interface ProjectAccordionsProps {
  contributors: Array<{ id: number; user: string }>
  commits: Array<{ id: string; user: string }>
  languagesUsed: Record<string, number>
}

export function ProjectAccordions({ contributors, commits, languagesUsed }: ProjectAccordionsProps) {
  const commitData = formatCommitsToPieData(commits)
  const languageNames = formatLangsImgData(languagesUsed)

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="contributors" className="neobrutalism-accent mb-2">
        <AccordionTrigger className="neobrutalism-text hover:no-underline px-4 py-3">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="font-bold">Contributors</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <ul className="space-y-2">
            {contributors.length > 0 ? (
              contributors.map((contrib) => (
                <li key={contrib.id}>
                  <a
                    href={`https://github.com/${contrib.user}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    {contrib.user}
                  </a>
                </li>
              ))
            ) : (
              <li className="text-muted-foreground">No contributors found!</li>
            )}
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="commits" className="neobrutalism-accent mb-2">
        <AccordionTrigger className="neobrutalism-text hover:no-underline px-4 py-3">
          <div className="flex items-center gap-2">
            <GitCommit className="h-4 w-4" />
            <span className="font-bold">Commit Info</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4 flex justify-center">
          <div className="w-64 h-64">
            <Doughnut
              data={commitData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="languages" className="neobrutalism-accent">
        <AccordionTrigger className="neobrutalism-text hover:no-underline px-4 py-3">
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span className="font-bold">Dev. Languages</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="flex flex-wrap gap-2">
            {languageNames.map((lang) => (
              <LanguageIcon key={lang} lang={lang} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

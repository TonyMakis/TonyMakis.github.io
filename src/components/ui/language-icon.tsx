"use client"

import { cn } from "@/lib/utils"

interface LanguageIconProps {
  lang: string
  className?: string
}

export function LanguageIcon({ lang, className }: LanguageIconProps) {
  const getLanguageIcon = (language: string) => {
    const iconClass = "text-4xl mr-2"
    
    switch (language) {
      case 'C':
        return <i className={cn("devicon-c-plain", iconClass)} />
      case 'C++':
        return <i className={cn("devicon-cplusplus-plain", iconClass)} />
      case 'Java':
        return <i className={cn("devicon-java-plain-wordmark", iconClass)} />
      case 'JavaScript':
        return <i className={cn("devicon-javascript-plain", iconClass)} />
      case 'HTML':
        return <i className={cn("devicon-html5-plain-wordmark", iconClass)} />
      case 'CSS':
        return <i className={cn("devicon-css3-plain-wordmark", iconClass)} />
      case 'TypeScript':
        return <i className={cn("devicon-typescript-plain", iconClass)} />
      case 'Python':
        return <i className={cn("devicon-python-plain-wordmark", iconClass)} />
      case 'React':
        return <i className={cn("devicon-react-original-wordmark", iconClass)} />
      case 'Node.js':
        return <i className={cn("devicon-nodejs-plain-wordmark", iconClass)} />
      case 'Empty':
        return <span className="text-sm text-muted-foreground">No languages detected</span>
      default:
        return <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{language}</span>
    }
  }

  return (
    <div className={cn("inline-flex items-center", className)}>
      {getLanguageIcon(lang)}
    </div>
  )
}

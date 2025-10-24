import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tony Makis | Full-Stack Software Engineer',
  description: 'Chicago-based software engineer specializing in backend development, cloud architecture, and modern web applications. Experience with .NET, Node.js, Azure, and AWS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

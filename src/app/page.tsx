import { fetchProjects, Project } from "@/lib/data-fetch"
import { LoadSpinner } from "@/components/ui/load-spinner"
import { ProjectCard } from "@/components/project-card"

export default async function HomePage() {
  let projects: Project[] = [];
  let error: string | null = null;

  try {
    projects = await fetchProjects();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to fetch projects';
    console.error('Error fetching projects:', err);
    projects = [];
  }

  return (
    <div className="neobrutalism-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-4 border-black">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="neobrutalism-text text-xl font-bold">Tony Makis</div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="neobrutalism-text hover:underline">About</a>
              <a href="#skills" className="neobrutalism-text hover:underline">Skills</a>
              <a href="#experience" className="neobrutalism-text hover:underline">Experience</a>
              <a href="#projects" className="neobrutalism-text hover:underline">Projects</a>
              <a href="#freelance" className="neobrutalism-text hover:underline">Freelance</a>
              <a href="#values" className="neobrutalism-text hover:underline">Values</a>
              <a href="#contact" className="neobrutalism-text hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="neobrutalism-title text-5xl md:text-7xl mb-6">
            Full-Stack Software Engineer
          </h1>
          <h2 className="neobrutalism-text text-xl md:text-2xl mb-8">
            Cloud Architecture • .NET & Node.js
          </h2>
          <p className="neobrutalism-text text-lg mb-8 max-w-3xl mx-auto">
            Building scalable backend systems and cloud infrastructure that power real-world applications. 
            Based in Chicago, IL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="neobrutalism-button">
              View My Work
            </a>
            <a href="#contact" className="neobrutalism-button">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="neobrutalism-text text-4xl text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="neobrutalism-card p-8 mb-8">
              <p className="neobrutalism-text text-lg mb-6">
                I&apos;m a software engineer based in Chicago with a passion for building robust, scalable systems. 
                I graduated from the University of Illinois at Chicago with a degree in Computer Science and a minor 
                in Mathematics, and even spent a semester studying entrepreneurship in Berlin, Germany.
              </p>
              <p className="neobrutalism-text text-lg mb-6">
                Over the past four years, I&apos;ve worked across the full stack—from designing database schemas and 
                implementing secure authentication systems to orchestrating cloud infrastructure and building CI/CD 
                pipelines. I&apos;ve had the opportunity to work with both Azure and AWS, manage high-volume production 
                environments, and collaborate with cross-functional teams to deliver solutions that directly impact 
                users and businesses.
              </p>
              <p className="neobrutalism-text text-lg mb-6">
                What drives me is the challenge of solving complex problems and the satisfaction of seeing systems 
                work reliably at scale. Whether it&apos;s reducing deployment times from 4 minutes to 25 seconds, 
                processing 15,000 applications in under a week with Python automation, or building serverless ETL 
                solutions that handle large data volumes—I&apos;m always looking for ways to make things better, faster, 
                and more efficient.
              </p>
              <p className="neobrutalism-text text-lg">
                These days, I&apos;m working with .NET and Azure at PMCS while exploring modern web technologies like 
                Next.js, TypeScript, and TanStack Query through freelance projects. I believe the best engineers 
                stay curious and adaptable, always learning and evolving with the technology landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section id="skills" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="neobrutalism-text text-4xl text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neobrutalism-card p-6">
              <h3 className="neobrutalism-text text-xl mb-4">Backend Development</h3>
              <p className="neobrutalism-text mb-4">
                Building robust APIs, microservices, and server-side applications that power modern web and mobile experiences.
              </p>
              <div className="neobrutalism-accent p-3">
                <p className="neobrutalism-text text-sm font-bold">Technologies:</p>
                <p className="neobrutalism-text text-sm">.NET Core • Node.js • Express.js • ASP.NET • Entity Framework • REST APIs</p>
              </div>
            </div>
            
            <div className="neobrutalism-card p-6">
              <h3 className="neobrutalism-text text-xl mb-4">Cloud Architecture & DevOps</h3>
              <p className="neobrutalism-text mb-4">
                Designing and managing cloud infrastructure across Azure and AWS. From serverless solutions to container orchestration.
              </p>
              <div className="neobrutalism-accent p-3">
                <p className="neobrutalism-text text-sm font-bold">Technologies:</p>
                <p className="neobrutalism-text text-sm">Azure • AWS • Docker • CI/CD • Infrastructure as Code</p>
              </div>
            </div>
            
            <div className="neobrutalism-card p-6">
              <h3 className="neobrutalism-text text-xl mb-4">Frontend Development</h3>
              <p className="neobrutalism-text mb-4">
                Creating responsive, user-friendly interfaces with modern frameworks and tools. Focused on component-driven development.
              </p>
              <div className="neobrutalism-accent p-3">
                <p className="neobrutalism-text text-sm font-bold">Technologies:</p>
                <p className="neobrutalism-text text-sm">React • Next.js • TypeScript • Tailwind CSS • Shadcn/ui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="neobrutalism-text text-4xl text-center mb-12">Professional Experience Highlights</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="neobrutalism-card p-6">
              <h3 className="neobrutalism-text text-xl mb-3">Engineering at Scale</h3>
              <p className="neobrutalism-text">
                At Shoppinggives, I managed a fleet of 80+ production servers supporting a high-uptime, high-volume environment. 
                This included building CI/CD pipelines, implementing secrets management, and maintaining on-call status for rapid incident response.
              </p>
            </div>
            
            <div className="neobrutalism-card p-6">
              <h3 className="neobrutalism-text text-xl mb-3">Performance Optimization</h3>
              <p className="neobrutalism-text">
                Reduced Next.js deployment times by 94%—from 4 minutes to 25 seconds—through strategic NPM module optimization. 
                These kinds of improvements compound over time, saving development hours and enabling faster iteration.
              </p>
            </div>
            
            <div className="neobrutalism-card p-6">
              <h3 className="neobrutalism-text text-xl mb-3">Rapid Automation</h3>
              <p className="neobrutalism-text">
                Wrote Python scripts that processed and verified 15,000 GRFP applications in under a week—a task that would have 
                taken the team significantly longer manually. Automation that delivers real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="neobrutalism-text text-4xl text-center mb-12">Learning Projects</h2>
          <div className="text-center mb-8">
            <div className="neobrutalism-subtitle">
              <p className="neobrutalism-text">
                Exploring the digital universe, one commit at a time 🚀
              </p>
            </div>
          </div>

          {error ? (
            <div className="text-center">
              <div className="neobrutalism-card p-8 max-w-md mx-auto">
                <h3 className="neobrutalism-text text-xl mb-4">Unable to Load Projects</h3>
                <p className="text-red-600 font-bold mb-4">{error}</p>
                <p className="text-sm text-gray-600">
                  This might be due to GitHub API rate limits or network issues.
                  Please try refreshing the page or check back later.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {projects.length === 0 && !error && (
            <div className="text-center mt-12">
              <div className="neobrutalism-card p-8 max-w-md mx-auto">
                <h3 className="neobrutalism-text text-xl mb-4">No Projects Found</h3>
                <p className="text-gray-600 font-medium">
                  It looks like there are no public repositories to display.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Freelance Work Section */}
      <section id="freelance" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="neobrutalism-text text-4xl text-center mb-12">Freelance Work</h2>
          
          {/* Recent Client Projects */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="neobrutalism-text text-2xl text-center mb-8">Recent Client Projects</h3>
            
            <div className="space-y-8">
              {/* GDL Cleaning Services */}
              <div className="neobrutalism-card p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h4 className="neobrutalism-text text-xl font-bold">GDL Cleaning Services</h4>
                  <span className="neobrutalism-accent px-3 py-1 text-sm font-bold">August 2025</span>
                </div>
                <p className="neobrutalism-text mb-4">
                  Built a modern Progressive Web App (PWA) on Jamstack architecture, creating a lightweight and maintainable codebase from scratch. 
                  The project achieved a 100% cost reduction by migrating from self-hosting at $115/month to Netlify, while simultaneously improving site performance and reliability.
                </p>
                <div className="neobrutalism-accent p-4 mb-4">
                  <p className="neobrutalism-text text-sm font-bold mb-2">Tech Stack:</p>
                  <p className="neobrutalism-text text-sm">Next.js • TypeScript • JavaScript • Tailwind CSS • Netlify</p>
                </div>
                <div>
                  <p className="neobrutalism-text font-bold mb-2">Key Achievements:</p>
                  <ul className="neobrutalism-text text-sm space-y-1 mb-4">
                    <li>• Eliminated monthly hosting costs entirely while improving performance</li>
                    <li>• Built responsive, mobile-first design for service business</li>
                    <li>• Implemented PWA features for better user experience</li>
                    <li>• Delivered maintainable codebase for future updates</li>
                  </ul>
                  <a 
                    href="https://gdlcleaning.net" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="neobrutalism-button text-sm"
                  >
                    View Live Site
                  </a>
                </div>
              </div>

              {/* MyVista Real Estate */}
              <div className="neobrutalism-card p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h4 className="neobrutalism-text text-xl font-bold">MyVista Real Estate</h4>
                  <span className="neobrutalism-accent px-3 py-1 text-sm font-bold">July 2025</span>
                </div>
                <p className="neobrutalism-text mb-4">
                  Created a custom, branded website with integrated real estate data and a custom search tool. 
                  Worked directly with the client through consultations to design logos, color palette, and complete theme resources that aligned with their brand vision.
                </p>
                <div className="neobrutalism-accent p-4 mb-4">
                  <p className="neobrutalism-text text-sm font-bold mb-2">Tech Stack:</p>
                  <p className="neobrutalism-text text-sm">Next.js • TypeScript • React • Shadcn/ui • Zod • Tailwind CSS • Google API • Node.js</p>
                </div>
                <div>
                  <p className="neobrutalism-text font-bold mb-2">Key Achievements:</p>
                  <ul className="neobrutalism-text text-sm space-y-1 mb-4">
                    <li>• Designed complete brand identity from scratch based on client needs</li>
                    <li>• Integrated real estate data APIs for live property search functionality</li>
                    <li>• Built custom search tool for enhanced user experience</li>
                    <li>• Delivered modern, performant website with strong visual identity</li>
                  </ul>
                  <a 
                    href="https://myvistarealestate.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="neobrutalism-button text-sm"
                  >
                    View Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Why I Freelance */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="neobrutalism-text text-2xl text-center mb-8">Why I Freelance</h3>
            <div className="neobrutalism-card p-8">
              <p className="neobrutalism-text mb-6">
                Freelance work allows me to:
              </p>
              <ul className="neobrutalism-text space-y-2">
                <li>• Stay current with the latest web technologies and frameworks</li>
                <li>• Wear multiple hats as engineer, designer, and consultant</li>
                <li>• Solve diverse problems across different industries and use cases</li>
                <li>• Help local businesses establish their digital presence</li>
                <li>• Experiment freely with new tools and approaches</li>
              </ul>
            </div>
          </div>

          {/* Modern Web Stack Exploration */}
          <div className="max-w-4xl mx-auto">
            <h3 className="neobrutalism-text text-2xl text-center mb-8">Modern Web Stack Exploration</h3>
            <div className="neobrutalism-card p-8">
              <p className="neobrutalism-text mb-4">
                Through freelance projects, I&apos;ve been diving deep into the modern web development ecosystem—Next.js with TypeScript, 
                modern state management patterns with Zustand and TanStack Query, component libraries like Shadcn/ui, and schema validation with Zod. 
                This exploration keeps me sharp and brings fresh perspectives to my professional work.
              </p>
              <p className="neobrutalism-text">
                Check out my GitHub for various projects and experiments. I believe in learning in public and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Values Section */}
      <section id="values" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="neobrutalism-text text-4xl text-center mb-12">Professional Values</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="neobrutalism-card p-6">
              <h3 className="neobrutalism-text text-xl mb-3">Better Than Yesterday</h3>
              <p className="neobrutalism-text">
                I&apos;m committed to continuous improvement—whether that&apos;s refactoring legacy code, learning new technologies, 
                or finding more efficient solutions to old problems.
              </p>
            </div>
            
            <div className="neobrutalism-card p-6">
              <h3 className="neobrutalism-text text-xl mb-3">An Eye for Saving Money</h3>
              <p className="neobrutalism-text">
                I&apos;m always looking for ways to reduce costs and improve efficiency. Whether it&apos;s eliminating $115/month hosting fees, 
                reducing deployment times by 94%, or automating manual processes—I believe good engineering should deliver both 
                technical excellence and business value.
              </p>
            </div>
            
            <div className="neobrutalism-card p-6">
              <h3 className="neobrutalism-text text-xl mb-3">Measure Twice, Cut Once</h3>
              <p className="neobrutalism-text">
                I believe in planning and architecture upfront, but I&apos;m also pragmatic enough to know when to start building and iterate. 
                Good engineering is about judgment as much as skill.
              </p>
            </div>
            
            <div className="neobrutalism-card p-6">
              <h3 className="neobrutalism-text text-xl mb-3">Ship It</h3>
              <p className="neobrutalism-text">
                At the end of the day, code needs to run in production and deliver value. I focus on building things that actually work 
                and solving real problems for real users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="neobrutalism-text text-4xl mb-12">Let&apos;s Work Together</h2>
          <div className="max-w-2xl mx-auto">
            <p className="neobrutalism-text text-lg mb-8">
              I&apos;m always interested in challenging projects, whether that&apos;s building scalable cloud infrastructure, 
              developing modern web applications, or solving complex technical problems.
            </p>
            <div className="neobrutalism-card p-8 mb-8">
              <h3 className="neobrutalism-text text-xl mb-4">Currently open to:</h3>
              <ul className="neobrutalism-text text-left space-y-2">
                <li>• Full-time software engineering opportunities in Chicago</li>
                <li>• Freelance web development projects</li>
                <li>• Technical consulting</li>
                <li>• Interesting side projects and collaborations</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:tonymakis@protonmail.com" className="neobrutalism-button">
                Send Email
              </a>
              <a href="#projects" className="neobrutalism-button">
                View Projects
              </a>
            </div>
            <p className="neobrutalism-text mt-6">
              Chicago, IL | Open to hybrid/remote opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t-4 border-black bg-white/90">
        <div className="container mx-auto px-4 text-center">
          <p className="neobrutalism-text">
            © 2025 Tony Makis. Built with Next.js and deployed on GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  )
}

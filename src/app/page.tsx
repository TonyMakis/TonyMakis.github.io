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
    
    // Fallback: show a message instead of crashing
    projects = [];
  }

  if (error) {
    return (
      <div className="neobrutalism-background flex items-center justify-center">
        <div className="neobrutalism-card p-8 max-w-md mx-4">
          <h1 className="neobrutalism-text text-2xl mb-4">Unable to Load Projects</h1>
          <p className="text-red-600 font-bold mb-4">{error}</p>
          <p className="text-sm text-gray-600">
            This might be due to GitHub API rate limits or network issues. 
            Please try refreshing the page or check back later.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="neobrutalism-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="neobrutalism-title">
            MY PUBLIC PROJECTS
          </h1>
          <div className="neobrutalism-subtitle">
            <p className="neobrutalism-text">
              Exploring the digital universe, one commit at a time 🚀
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center mt-12">
            <div className="neobrutalism-card p-8 max-w-md mx-auto">
              <h2 className="neobrutalism-text text-xl mb-4">No Projects Found</h2>
              <p className="text-gray-600 font-medium">
                It looks like there are no public repositories to display.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'WineDB',
    description: 'A full-stack wine cellar CRUD app with AI search and recommendations.',
    image: '/wine.jpg',
    tags: ['Next.js', 'PostgreSQL', 'OpenAI', 'Tailwind', 'TypeScript'],
    link: 'https://wine-db-demo.vercel.app/',
  },
  {
    title: 'A* Pathfinding Visualizer',
    description: 'Interactive pathfinding demo for a strategy game.',
    image: '/game-dev.jpg',
    tags: ['Java', 'Game Dev', 'AI', 'Pathfinding', 'Algorithms'],
    link: '',
  },
  // Add more projects here
  {
    title: 'WebGL 3D World Project',
    description: 'A WebGL project showcasing 3D techniques like reflection, animation, flocking AI, lighting and more.',
    image: '/balloon.jpg',
    tags: ['JavaScript', 'WebGL', '3D', 'Animation', 'AI'],
    link: 'https://github.com/thiagoviegas06/CS432-final-proj',
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#121212] text-black dark:text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </main>
  )
}

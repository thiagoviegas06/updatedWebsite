type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export default function ProjectCard({ title, description, image, tags, link }: Project) {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333] rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-[#333] text-gray-800 dark:text-gray-200 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:underline"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  )
}

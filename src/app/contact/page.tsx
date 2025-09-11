export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold tracking-tight mb-6">
        Get in Touch
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-10">
        I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:thiagojoseviegas@gmail.com"
          className="min-w-[180px] bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow text-center"
        >
          📩 Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/thiagoviegasnyu/"
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-[180px] bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition shadow text-center"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/thiagoviegas06"
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-[180px] bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition shadow text-center"
        >
          🐙 GitHub
        </a>
      </div>
    </main>
  )
}

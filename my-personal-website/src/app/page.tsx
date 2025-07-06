// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        Hi, I’m Thiago Viegas
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
       I am a Computer Science graduate from Drexel University, I am passionate about software development, game development and computer networks. 
       I am currently looking for a full-time software engineering position. 
      </p>

      <div className="flex gap-4">
        <a
          href="/portfolio"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          View My Work
        </a>
        <a
          href="/contact"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 dark:hover:bg-[#1a1a1a] transition"
        >
          Get in Touch
        </a>
      </div>
    </main>
  )
}

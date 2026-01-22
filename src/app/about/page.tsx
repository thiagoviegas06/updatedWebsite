'use client'

import { motion } from 'framer-motion'
import VerticalTimeline from '@/components/VerticalTimeline'

const timelineItems = [
  {
    date: '2020 – 2025',
    title: 'B.S. Computer Science',
    subtitle: 'Drexel University',
    description:
      'Concentrations in Computer Systems & Graphics; Mathematics minor; Graduated Magna Cum Laude (GPA 3.82).',
  },
  {
    date: '2023 & 2024',
    title: 'Cybersecurity Analyst Co-Op',
    subtitle: 'Bristol Myers Squibb',
    description:
      'Automated firewall policy checks, drove compliance reporting, and improved vulnerability management.',
  },
  {
    date: '2023 – 2025',
    title: 'Teaching Assistant',
    subtitle: 'Drexel University',
    description:
      'Guided students through Computer Architecture & Systems; ran recitations, office hours, and grading.',
  },
  {
    date: '2025 – 2027',
    title: 'M.S. Computer Science',
    subtitle: 'New York University',
    description:
      'Currently pursuing a Master of Science in Computer Science at New York University with a focus on Artificial Intelligence and Machine Learning.',
  },
  {
    date: '2026 – Present',
    title: 'Research Assistant',
    subtitle: 'NYU Neuroinformatics Lab, Professor Erdem Varol',
    description:
      'Researching neuroinformatics applications.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto space-y-12">
      {/* Section: About */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Recently graduated from <span className="font-bold text-blue-600 dark:text-blue-400">Drexel University</span> with a <span className="font-bold text-blue-600 dark:text-blue-400">B.S. in Computer Science</span> and currently pursuing a <span className="font-bold text-blue-600 dark:text-blue-400">M.S. in Computer Science at New York University</span> with a focus on <span className="font-bold text-blue-600 dark:text-blue-400">Artificial Intelligence and Machine Learning</span>.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          My goal is to use my knowledge in Computer Science to develop tools that help people be more efficient and productive in their daily lives.
        </p>
      </motion.section>

      {/* Section: Education */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li><span className="font-bold text-blue-600 dark:text-blue-400">M.S. Computer Science</span> — New York University (2025–2027, In Progress)</li>
          <li><span className="font-bold text-blue-600 dark:text-blue-400">B.S. Computer Science</span> — Drexel University (2020–2025), Magna Cum Laude (GPA 3.82)</li>
          <li>Mathematics minor; Concentrations in Computer Systems & Graphics</li>
        </ul>
      </motion.section>

      {/* Section: Experience */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li><span className="font-bold text-blue-600 dark:text-blue-400">Cybersecurity Analyst Co-Op</span> — Bristol Myers Squibb (2023 & 2024)</li>
          <li><span className="font-bold text-blue-600 dark:text-blue-400">Teaching Assistant</span> — Drexel University (2023–2025), Computer Architecture & Systems</li>
        </ul>
      </motion.section>

      {/* Section: Research */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Research</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          Starting as a <span className="font-bold text-blue-600 dark:text-blue-400">Research Assistant</span> in the neuroinformatics lab under <span className="font-bold text-blue-600 dark:text-blue-400">Professor Erdem Varol</span>.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Focus area: <span className="font-bold text-blue-600 dark:text-blue-400">Neuroinformatics</span></li>
        </ul>
      </motion.section>

      {/* Section: Coursework */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Coursework</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Completed</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li><span className="font-bold text-blue-600 dark:text-blue-400">Machine Learning</span></li>
              <li><span className="font-bold text-blue-600 dark:text-blue-400">Computer Vision</span></li>
              <li><span className="font-bold text-blue-600 dark:text-blue-400">Big Data</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Upcoming</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li><span className="font-bold text-blue-600 dark:text-blue-400">Neuroinformatics</span></li>
              <li><span className="font-bold text-blue-600 dark:text-blue-400">Data Structures</span></li>
              <li><span className="font-bold text-blue-600 dark:text-blue-400">Information Visualization</span></li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Section: Internship Search / Interests */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Interests & Opportunities</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I am currently seeking <span className="font-bold text-blue-600 dark:text-blue-400">Summer 2026 internships</span>, with a strong interest in <span className="font-bold text-blue-600 dark:text-blue-400">machine learning</span> and <span className="font-bold text-blue-600 dark:text-blue-400">computer vision</span>, as well as <span className="font-bold text-blue-600 dark:text-blue-400">software development</span>. I am particularly interested in roles where I can apply <span className="font-bold text-blue-600 dark:text-blue-400">ML techniques</span> to real-world systems and data-driven products.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions or would like to connect, please feel free to <a href="/contact" className="font-bold text-blue-600 dark:text-blue-400 hover:underline">reach out</a>.
        </p>
      </motion.section>

      {/* Section: Timeline */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Experience Timeline</h2>
        <VerticalTimeline items={timelineItems} />
      </motion.section>

      {/* Section: Coursework */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Undergraduate Coursework</h2>
        <div className="space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 text-sm text-gray-800 dark:text-gray-200">
              {[
                'Data Structures & Algorithms I',
                'Computer Networks',
                'Concurrent Programming',
                'Database Systems',
                'Game Programming',
                'Game AI',
                'Artificial Intelligence',
                'Interactive Computer Graphics',
                'Web Development',
                'Software Engineering',
                'Computer Architecture',
                'Systems Programming',
                'Linear Algebra',
                'Discrete Mathematics',
                'Calculus I-III',
              ].map((course) => (
                <span
                  key={course}
                  className="bg-gray-200 dark:bg-[#2a2a2a] px-3 py-1 rounded-full"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

        </div>
      </motion.section>

      {/* Section: Fun Facts */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-3">Fun Facts</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Favorite languages: C++, TypeScript, Java, Python, and C</li>
          <li>Hobbies: Gaming 🎮, Soccer ⚽, and spending time with friends</li>
        </ul>
      </motion.section>
    </main>
  )
}

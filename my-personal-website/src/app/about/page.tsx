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
  
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto space-y-12">
      {/* Section: Intro */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
         Recently graduated from <span className="font-bold text-blue-600 dark:text-blue-400">Drexel University</span> with a <span className="font-bold text-blue-600 dark:text-blue-400">B.S. in Computer Science</span> and a <span className="font-bold text-blue-600 dark:text-blue-400">Mathematics minor</span>. Currently pursuing a <span className="font-bold text-blue-600 dark:text-blue-400">M.S. in Computer Science at New York University</span> with a focus on <span className="font-bold text-blue-600 dark:text-blue-400">Artificial Intelligence and Machine Learning</span>.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          During my time at Drexel, I completed <span className="font-bold text-blue-600 dark:text-blue-400">two co-ops at Bristol Myers Squibb</span> as a <span className="font-bold text-blue-600 dark:text-blue-400">Cybersecurity Analyst</span>, and I also worked as a <span className="font-bold text-blue-600 dark:text-blue-400">Teaching Assistant</span> for Computer Architecture and Systems courses.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Currently I am taking courses in <span className="font-bold text-blue-600 dark:text-blue-400">Machine Learning</span>, <span className="font-bold text-blue-600 dark:text-blue-400">Computer Vision</span> and <span className="font-bold text-blue-600 dark:text-blue-400">Big Data</span>. I plan to use my masters to strengthen my skills in areas related to <span className="font-bold text-blue-600 dark:text-blue-400">Artificial Intelligence and its applications</span>.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          I am currently looking for <span className="font-bold text-blue-600 dark:text-blue-400">internships in the summer of 2026</span>. I have a strong interest in <span className="font-bold text-blue-600 dark:text-blue-400">software development</span> and <span className="font-bold text-blue-600 dark:text-blue-400">artificial intelligence</span>. My goal is to use my knowledge in Computer Science to develop tools that help people be more efficient and productive in their daily lives. If you have any questions or would like to connect, please feel free to reach out.
        </p>
      </motion.section>

      {/* Section: Academic */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-3">Academic Summary</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Undergraduate</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li><strong>Drexel University</strong> — B.S. in Computer Science</li>
              <li>Minor in Mathematics</li>
              <li>Concentrations: Computer Systems, Computer Graphics</li>
              <li><strong>GPA:</strong> 3.82 (Magna Cum Laude)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Graduate</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li><strong>New York University</strong> — M.S. in Computer Science (In Progress)</li>
              <li>Focus: Artificial Intelligence and Machine Learning</li>
            </ul>
          </div>
        </div>
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
        <h2 className="text-2xl font-semibold mb-4">Relevant Coursework</h2>
        <div className="space-y-6">
          {/* Undergraduate Coursework */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Undergraduate (Drexel University)</h3>
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

          {/* Master's Coursework */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Graduate (New York University)</h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-800 dark:text-gray-200">
              {[
                'Machine Learning',
                'Computer Vision',
                'Big Data',
              ].map((course) => (
                <span
                  key={course}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-700"
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

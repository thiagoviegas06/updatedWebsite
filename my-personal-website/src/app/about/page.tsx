'use client'

import { motion } from 'framer-motion'
import HorizontalTimeline from '@/components/HorizontalTimeline'

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
          I’m a Computer Science graduate from Drexel University, currently seeking full-time opportunities.
          During my time at Drexel, I completed two co-ops at <strong>Bristol Myers Squibb</strong> as a
          Cybersecurity Analyst, and I also worked as a Teaching Assistant for Computer Architecture and Systems courses.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          I pursued a <strong>Mathematics minor</strong> alongside concentrations in <strong>Computer Systems</strong> and
          <strong> Computer Graphics</strong>. My academic experience balanced both technical and creative challenges.
        </p>
      </motion.section>

      {/* Section: Academic */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-3">Academic Summary</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li><strong>Drexel University</strong> — B.S. in Computer Science</li>
          <li>Minor in Mathematics</li>
          <li>Concentrations: Computer Systems, Computer Graphics</li>
          <li><strong>GPA:</strong> 3.82 (Magna Cum Laude)</li>
        </ul>
      </motion.section>

      {/* Section: Timeline */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Experience Timeline</h2>
        <HorizontalTimeline items={timelineItems} />
      </motion.section>

      {/* Section: Coursework */}
      <motion.section
        {...fadeUp}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#1b1b1b] shadow-lg border border-gray-200 dark:border-[#333] rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-3">Relevant Coursework</h2>
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
          ].map((course) => (
            <span
              key={course}
              className="bg-gray-200 dark:bg-[#2a2a2a] px-3 py-1 rounded-full"
            >
              {course}
            </span>
          ))}
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

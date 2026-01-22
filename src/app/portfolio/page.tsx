'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { Globe, Gamepad2, Brain, Box, Eye, Database } from 'lucide-react'

const projectSections = [
  {
    id: 'web-apps',
    title: 'Web Applications',
    icon: Globe,
    description: 'Full-stack web applications built with modern technologies',
    color: 'from-blue-500 to-cyan-500',
    projects: [
      {
        title: 'WineDB',
        description: 'A full-stack wine cellar CRUD app with AI search and recommendations.',
        image: '/wine.jpg',
        tags: ['Next.js', 'PostgreSQL', 'OpenAI', 'Tailwind', 'TypeScript'],
        link: 'https://wine-db-demo.vercel.app/',
      },
      {
        title: 'Restaurant Picker',
        description: 'A web application that allows users to pick a restaurant based on their location and preferences.',
        image: '/restaurant.jpg',
        tags: ['JavaScript', 'Node.js', 'HTML', 'CSS'],
        link: 'https://github.com/thiagoviegas06/CS375Group1',
      },
      
      // Add more web app projects here
    ]
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    icon: Eye,
    description: 'Image processing, object detection, classification, deep learning, and computer vision projects',
    color: 'from-indigo-500 to-violet-500',
    projects: [
      // Add computer vision projects here
      {
        title: "Baseball pitch tracking and prediction",
        description: "Tracks baseball pitches and predicts wether its a strike or ball and the zone it lands in.",
        image: '/baseball.jpg',
        tags: ['Computer Vision', 'Python', 'OpenCV', 'TorchVision', 'Deep Learning'],
        link: 'https://github.com/thiagoviegas06/CS432-final-proj', //update link
      },
      {
        title: "Cell Segmentation and Detection",
        description: "Segments and detects cells in a microscopy image.",
        image: '/cells.jpg',
        tags: ['Computer Vision', 'Python', 'OpenCV', 'TorchVision', 'RESNET'],
        link: 'https://github.com/thiagoviegas06/cell_identification', ///update link
      },
      {
        title: "Constelation Detection and Classification",
        description: "Detects start patches that compose a constellation and classifies the constellation it belongs to, this project uses traditional computer vision techniques.",
        image: '/constelation.webp',
        tags: ['Computer Vision', 'Python', 'OpenCV', 'Edge Detection', 'Hough Transform'],
        link: 'https://github.com/thiagoviegas06/computerVision-Project', ///update link
      },
      {
        title: "Geoguesser Predictor",
        description: "Predicts the state in the United States of a given image using CLIP and a fine-tuned model trained over thousands of images.",
        image: '/us-map.gif',
        tags: ['Computer Vision', 'Python', 'OpenCV', 'TorchVision', "CLIP"],
        link: 'https://github.com/thiagoviegas06/GeoGuesser', //update link
      }
    ]
  },
  {
    id: 'big-data',
    title: 'Big Data',
    icon: Database,
    description: 'Distributed computing, data processing, and large-scale analytics projects',
    color: 'from-teal-500 to-cyan-500',
    projects: [
      {
        title: "Semantic Value Joins",
        description: "Created a RL model that learns the approptiate method to do value joins over given datasets.",
        image: '/big-data.jpg',
        tags: ['Big Data', 'Reinforcement Learning', 'Semantic Value Joins', 'Torch'],
        link: 'https://github.com/cucumberpeel/thematchmakers', //update link
        paper: '/Big_Data_Class_Final_Project__MatchMakers%20(1).pdf',
      },
      // Add big data projects here
    ]
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    icon: Gamepad2,
    description: 'Interactive games and game development projects',
    color: 'from-purple-500 to-pink-500',
    projects: [
      {
        title: 'Table Tilt Game',
        description: '3D game where player can tilt table to collect coins and avoid obstacles in order to get to goal.',
        image: '/game-dev.jpg',
        tags: ['Unity', 'Game Dev', 'C#', '3D'],
        link: 'https://www.youtube.com/watch?v=lDcFrKgOTEE&t=1s',
      },
      {
        title: 'Platformer Game',
        description: '2d platformer game where player can jump and collect coins to get to goal.',
        image: '/mario.jpg',
        tags: ['Unity', 'Game Dev', 'C#', '2D'],
        link: 'https://www.youtube.com/watch?v=lDcFrKgOTEE&t=1shttps://youtu.be/UXibiqWknro',
      },
      {
        title: 'Pacman Clone',
        description: 'Recriated Pacman and enemy AI using Unity and C#.',
        image: '/pacman.jpg',
        tags: ['Unity', 'Game Dev', 'C#', '2D'],
        link: 'https://youtu.be/RjN7EW3lmRg',
      },
      // Add more game dev projects here
    ]
  },
  {
    id: 'ai-projects',
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Artificial intelligence and machine learning projects',
    color: 'from-green-500 to-emerald-500',
    projects: [
      // Add AI projects here
      {
        title: 'Steering Behaviors',
        description: 'Simulates 3 different forms of steering techniques: follow, avoid, and path following.',
        image: '/kart.jpg',
        tags: [ 'Game AI', 'Java', 'Pathfinding', 'Steering Behaviors'],
        link: 'https://youtu.be/MWy95tscqwg',
      },
      {
        title: 'Pathfinding and Avoidance',
        description: 'Boid follows path while avoiding obstacles in the way.',
        image: '/path.jpg',
        tags: [ 'Game AI', 'Java', 'Pathfinding', 'Object Avoidance'],
        link: 'https://youtu.be/F5ACHHs7L38',
      },
      {
        title: 'A* Pathfinding',
        description: 'A* simulation on top of RTS game, the game is sped up to demonstrate how soldiers find their shortest path to their goal.',
        image: '/astar.jpg',
        tags: [ 'Game AI', 'Java', 'Pathfinding', 'Object Avoidance', 'A*'],
        link: 'https://youtu.be/xauQ2mppyN8',
      },
      {
        title: 'Decision Tree',
        description: 'AI that controls the blue troops using a behavior tree. The tree is structured on a XML file that is parsed and executed on the RTS game.',
        image: '/tree.jpg',
        tags: [ 'Game AI', 'Java', 'Decision Tree'],
        link: 'https://youtu.be/ev2J3_JdgWI',
      },
      {
        title: 'PCG Map Generation',
        description: 'Generates map through game of life logic while also making the game fun to play.',
        image: '/map.jpg',
        tags: [ 'Game AI', 'Java', 'PCG', 'Map Generation', 'Game of Life'],
        link: 'https://youtu.be/IHi1hZBu_X0',
      },
    ]
  },
  {
    id: 'webgl',
    title: 'WebGL & 3D Graphics',
    icon: Box,
    description: '3D graphics and WebGL visualization projects',
    color: 'from-orange-500 to-red-500',
    projects: [
      {
        title: 'WebGL 3D World Project',
        description: 'A WebGL project showcasing 3D techniques like reflection, animation, flocking AI, lighting and more.',
        image: '/balloon.jpg',
        tags: ['JavaScript', 'WebGL', '3D', 'Animation', 'Rendering', 'Flocking AI'],
        link: 'https://github.com/thiagoviegas06/CS432-final-proj',
      },
      // Add more WebGL projects here
    ]
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        {...fadeUp}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
          My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A collection of my projects spanning web development, game design, artificial intelligence, and 3D graphics
        </p>
      </motion.div>

      {/* Project Sections */}
      <div className="space-y-20">
        {projectSections.map((section) => {
          const IconComponent = section.icon
          return (
            <motion.section
              key={section.id}
              {...fadeUp}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${section.color} shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Projects Grid */}
              {section.projects.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {section.projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: projectIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <ProjectCard {...project} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
                  <IconComponent className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    More {section.title.toLowerCase()} projects coming soon...
                  </p>
                </div>
              )}
            </motion.section>
          )
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        {...fadeUp}
        viewport={{ once: true }}
        className="text-center mt-20 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Interested in collaborating?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          I&apos;m always excited to work on new projects and explore innovative technologies.
        </p>
        <motion.a
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </main>
  )
}

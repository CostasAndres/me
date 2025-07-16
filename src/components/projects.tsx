"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Code, Globe, Database } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Portfolio Personal",
      description: "Portfolio web moderno y responsive desarrollado con Next.js 15, TypeScript y Tailwind CSS. Incluye modo oscuro/claro y animaciones suaves.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/portfolio-preview.jpg",
      github: "https://github.com/CostasAndres/portfolio",
      live: "#",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/ecommerce-preview.jpg",
      github: "https://github.com/CostasAndres/ecommerce",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con drag & drop, filtros y persistencia de datos local.",
      technologies: ["React", "TypeScript", "LocalStorage", "CSS Modules"],
      image: "/task-app-preview.jpg",
      github: "https://github.com/CostasAndres/task-manager",
      live: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard del clima con API de OpenWeatherMap, gráficos interactivos y geolocalización.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
      image: "/weather-preview.jpg",
      github: "https://github.com/CostasAndres/weather-app",
      live: "#",
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Mis Proyectos
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-600/10 to-blue-400/5 flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{project.title}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">
                      Destacado
                    </span>
                  )}
                </div>

                <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            ¿Te gusta lo que ves? ¡Echa un vistazo a más de mis proyectos!
          </p>
          <a
            href="https://github.com/CostasAndres"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <Github className="w-5 h-5" />
            Ver más en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
} 
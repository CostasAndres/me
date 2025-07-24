"use client"

import { motion } from "framer-motion"
import { BookOpen, ExternalLink, FileText, Globe } from "lucide-react"

export function Documentation() {
  const documentation = [
    {
      title: "Guía de Instalación",
      description: "Instrucciones paso a paso para instalar y configurar el portfolio. Incluye solución de problemas comunes y personalización.",
      technologies: ["Node.js", "npm", "Next.js", "Guía"],
      link: "/documentacion/instalacion",
      icon: BookOpen,
      featured: false,
      date: "2025-07-23T18:02:05"
    },
    {
      title: "README del Portfolio",
      description: "Documentación completa del portfolio personal. Incluye características, tecnologías utilizadas, instalación y personalización.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Documentación"],
      link: "/documentacion/readme",
      icon: FileText,
      featured: false,
      date: "2025-07-23T18:01:26"
    },
    {
      title: "Documentación Cloudflare",
      description: "Guía completa para desplegar aplicaciones Next.js en Cloudflare Pages. Incluye configuración, optimización y solución de problemas.",
      technologies: ["Cloudflare Pages", "Next.js", "Wrangler CLI", "Documentación"],
      link: "/documentacion/cloudflare",
      icon: Globe,
      featured: false,
      date: "2025-07-23T13:49:46"
    },
  ]

  // Ordenar documentos por fecha (más reciente primero)
  const sortedDocumentation = documentation.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

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
    <section id="documentacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-secondary dark:text-white mb-4">
            Documentación
          </h2>
          <p className="text-lg text-theme-secondary dark:text-neutral-300 max-w-3xl mx-auto">
            Guías y documentación técnica que he creado para compartir conocimiento
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedDocumentation.map((doc, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-theme-card dark:bg-neutral-900 border border-theme-medium dark:border-neutral-700 rounded-lg overflow-hidden hover:shadow-theme-md transition-all duration-300 cursor-pointer shadow-theme-sm"
            >
              {/* Clickable overlay for entire card */}
              <a
                href={doc.link}
                target="_self"
                rel=""
                className="absolute inset-0 z-10"
                aria-label={`Ver documentación ${doc.title}`}
              />
              
              {/* Documentation Icon */}
              <div className="h-48 bg-gradient-to-br from-green-600/10 to-green-400/5 flex items-center justify-center">
                <div className="text-center">
                  <doc.icon className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-theme-muted dark:text-neutral-400">{doc.title}</p>
                </div>
              </div>

              {/* Documentation Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {doc.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium whitespace-nowrap">
                      {new Date(doc.date).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>

                <p className="text-theme-secondary dark:text-neutral-300 mb-4 leading-relaxed">
                  {doc.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {doc.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-theme-muted dark:bg-neutral-800 text-theme-primary dark:text-white text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Documentation Link */}
                <div className="flex gap-3 relative z-20">
                  <a
                    href={doc.link}
                    target="_self"
                    rel=""
                    className="flex items-center gap-2 text-theme-muted dark:text-neutral-400 hover:text-theme-primary dark:hover:text-white transition-colors text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <BookOpen className="w-4 h-4" />
                    Ver Documentación
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-green-600/5 dark:bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <p className="text-theme-secondary dark:text-neutral-300 mb-6">
            ¿Te interesa la documentación técnica? ¡Explora más recursos!
          </p>
          <a
            href="/documentacion/todas"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            <FileText className="w-5 h-5" />
            Ver Todas las Documentaciones
          </a>
        </motion.div>
      </div>
    </section>
  )
} 
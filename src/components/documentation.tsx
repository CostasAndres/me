"use client"

import { motion } from "framer-motion"
import { BookOpen, Download, ExternalLink, Code, Cloud } from "lucide-react"

export function Documentation() {
  return (
    <section id="documentacion" className="py-20 px-4 sm:px-6 lg:px-8">
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
          <p className="text-lg text-theme-primary dark:text-neutral-300 max-w-3xl mx-auto">
            Guías y recursos técnicos para desarrolladores
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Documentación Cloudflare Workers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-theme-card dark:bg-neutral-900 border border-theme-light dark:border-neutral-700 rounded-lg p-6 hover:shadow-theme-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-600/10 dark:bg-blue-400/10 rounded-lg">
                <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-theme-secondary dark:text-white">
                Cloudflare Pages
              </h3>
            </div>
            
            <p className="text-theme-primary dark:text-neutral-300 mb-4 leading-relaxed">
              Guía completa para desplegar aplicaciones Next.js en Cloudflare Pages. 
              Incluye configuración, optimización y solución de problemas comunes.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-1 bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs rounded-md font-medium">
                Next.js
              </span>
              <span className="px-2 py-1 bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs rounded-md font-medium">
                Cloudflare
              </span>
              <span className="px-2 py-1 bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs rounded-md font-medium">
                Wrangler CLI
              </span>
            </div>

                         <div className="flex gap-3">
               <a
                 href="/documentacion"
                 className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
               >
                 <BookOpen className="w-4 h-4" />
                 Ver Documentación
               </a>
               <a
                 href="/documentacion/cloudflare_workers.md"
                 download
                 className="flex items-center gap-2 text-theme-muted dark:text-neutral-400 hover:text-theme-primary dark:hover:text-white transition-colors text-sm font-medium"
               >
                 <Download className="w-4 h-4" />
                 Descargar
               </a>
             </div>
          </motion.div>

          {/* Documentación Docker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-theme-card dark:bg-neutral-900 border border-theme-light dark:border-neutral-700 rounded-lg p-6 hover:shadow-theme-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-600/10 dark:bg-green-400/10 rounded-lg">
                <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-theme-secondary dark:text-white">
                Docker & DevOps
              </h3>
            </div>
            
            <p className="text-theme-primary dark:text-neutral-300 mb-4 leading-relaxed">
              Configuración de contenedores Docker y despliegue en diferentes plataformas. 
              Incluye docker-compose y scripts de automatización.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-1 bg-green-600/10 dark:bg-green-400/10 text-green-600 dark:text-green-400 text-xs rounded-md font-medium">
                Docker
              </span>
              <span className="px-2 py-1 bg-green-600/10 dark:bg-green-400/10 text-green-600 dark:text-green-400 text-xs rounded-md font-medium">
                DevOps
              </span>
              <span className="px-2 py-1 bg-green-600/10 dark:bg-green-400/10 text-green-600 dark:text-green-400 text-xs rounded-md font-medium">
                CI/CD
              </span>
            </div>

            <div className="flex gap-3">
              <a
                href="/documentacion/docker.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors text-sm font-medium"
              >
                <BookOpen className="w-4 h-4" />
                Ver Documentación
              </a>
              <a
                href="/documentacion/docker.md"
                download
                className="flex items-center gap-2 text-theme-muted dark:text-neutral-400 hover:text-theme-primary dark:hover:text-white transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Descargar
              </a>
            </div>
          </motion.div>

          {/* Documentación Next.js */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-theme-card dark:bg-neutral-900 border border-theme-light dark:border-neutral-700 rounded-lg p-6 hover:shadow-theme-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-600/10 dark:bg-purple-400/10 rounded-lg">
                <ExternalLink className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-theme-secondary dark:text-white">
                Next.js 15
              </h3>
            </div>
            
            <p className="text-theme-primary dark:text-neutral-300 mb-4 leading-relaxed">
              Guía de desarrollo con Next.js 15, App Router y mejores prácticas. 
              Configuración de TypeScript, Tailwind CSS y optimización.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-1 bg-purple-600/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 text-xs rounded-md font-medium">
                Next.js 15
              </span>
              <span className="px-2 py-1 bg-purple-600/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 text-xs rounded-md font-medium">
                App Router
              </span>
              <span className="px-2 py-1 bg-purple-600/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 text-xs rounded-md font-medium">
                TypeScript
              </span>
            </div>

            <div className="flex gap-3">
              <a
                href="/documentacion/nextjs.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-sm font-medium"
              >
                <BookOpen className="w-4 h-4" />
                Ver Documentación
              </a>
              <a
                href="/documentacion/nextjs.md"
                download
                className="flex items-center gap-2 text-theme-muted dark:text-neutral-400 hover:text-theme-primary dark:hover:text-white transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Descargar
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-theme-primary dark:text-neutral-300 mb-6">
            ¿Necesitas ayuda con algún aspecto específico? ¡No dudes en contactarme!
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Contactar
          </a>
        </motion.div>
      </div>
    </section>
  )
} 
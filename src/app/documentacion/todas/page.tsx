"use client"

import { useState } from 'react'
import { BookOpen, FileText, Globe, Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TodasDocumentacionesPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const documentations = [
    {
      title: "Guía de Instalación",
      description: "Instrucciones paso a paso para instalar y configurar el portfolio. Incluye solución de problemas comunes y personalización.",
      technologies: ["Node.js", "npm", "Next.js", "Guía"],
      link: "/documentacion/instalacion",
      icon: BookOpen,
      featured: false,
      date: "2025-07-23T18:02:05",
      category: "Guía"
    },
    {
      title: "README del Portfolio",
      description: "Documentación completa del portfolio personal. Incluye características, tecnologías utilizadas, instalación y personalización.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Documentación"],
      link: "/documentacion/readme",
      icon: FileText,
      featured: false,
      date: "2025-07-23T18:01:26",
      category: "Documentación"
    },
    {
      title: "Documentación Cloudflare",
      description: "Guía completa para desplegar aplicaciones Next.js en Cloudflare Pages. Incluye configuración, optimización y solución de problemas.",
      technologies: ["Cloudflare Pages", "Next.js", "Wrangler CLI", "Documentación", "Despliegue"],
      link: "/documentacion/cloudflare",
      icon: Globe,
      featured: false,
      date: "2025-07-23T13:49:46",
      category: "Despliegue"
    },
  ]

  // Categorías disponibles
  const categories = [
    { name: "Guía", count: documentations.filter(doc => doc.technologies.includes("Guía")).length },
    { name: "Documentación", count: documentations.filter(doc => doc.technologies.includes("Documentación")).length },
    { name: "Despliegue", count: documentations.filter(doc => doc.technologies.includes("Despliegue")).length }
  ]

  // Función para alternar filtros
  const toggleFilter = (category: string) => {
    setActiveFilters(prev => 
      prev.includes(category) 
        ? prev.filter(f => f !== category)
        : [...prev, category]
    )
  }

  // Filtrar documentación basada en filtros activos (función AND)
  const filteredDocumentations = activeFilters.length === 0 
    ? documentations 
    : documentations.filter(doc => {
        // Si hay múltiples filtros activos, la documentación debe pertenecer a TODAS las categorías
        return activeFilters.every(filter => doc.technologies.includes(filter))
      })

  // Ordenar documentos por fecha (más reciente primero)
  const sortedDocumentations = filteredDocumentations.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-theme-secondary dark:text-neutral-300 hover:text-theme-primary dark:hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Portfolio
          </Link>
          
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            📚 Todas las Documentaciones
          </h1>
          <p className="text-center text-theme-secondary dark:text-neutral-300 text-lg max-w-2xl mx-auto">
            Colección completa de guías técnicas, documentaciones y recursos que he creado para compartir conocimiento
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-theme-card dark:bg-neutral-900 border border-theme-medium dark:border-neutral-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-theme-primary dark:text-white mb-2">{documentations.length}</div>
            <div className="text-theme-secondary dark:text-neutral-300">Documentaciones</div>
          </div>
          <div className="bg-theme-card dark:bg-neutral-900 border border-theme-medium dark:border-neutral-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {new Set(documentations.map(doc => doc.category)).size}
            </div>
            <div className="text-theme-secondary dark:text-neutral-300">Categorías</div>
          </div>
        </div>

        {/* Filtros de categorías */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center text-neutral-900 dark:text-white">Filtrar por Categoría</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => toggleFilter(category.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                  activeFilters.includes(category.name)
                    ? 'bg-green-600 border-green-600 text-white shadow-lg scale-105'
                    : 'bg-theme-card dark:bg-neutral-900 border-theme-medium dark:border-neutral-700 text-theme-secondary dark:text-neutral-300 hover:border-green-600 dark:hover:border-green-400 hover:text-green-600 dark:hover:text-green-400'
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-xs opacity-75">{category.count} documentación</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Documentations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedDocumentations.map((doc, index) => (
            <div
              key={index}
              className="group bg-theme-card dark:bg-neutral-900 border border-theme-medium dark:border-neutral-700 rounded-lg overflow-hidden hover:shadow-theme-md transition-all duration-300"
            >
              {/* Header with icon */}
              <div className="h-32 bg-gradient-to-br from-green-600/10 to-green-400/5 flex items-center justify-center">
                <div className="text-center">
                  <doc.icon className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <span className="text-xs text-theme-secondary dark:text-neutral-300 font-medium">{doc.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
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

                <p className="text-theme-secondary dark:text-neutral-300 mb-4 text-sm leading-relaxed">
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

                {/* Link */}
                <Link
                  href={doc.link}
                  className="inline-flex items-center gap-2 text-theme-primary dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm font-medium"
                >
                  <BookOpen className="w-4 h-4" />
                  Ver Documentación
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje cuando no hay resultados */}
        {sortedDocumentations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-theme-secondary dark:text-neutral-300 text-lg mb-4">
              No se encontraron documentaciones con los filtros seleccionados.
            </p>
            <button
              onClick={() => setActiveFilters([])}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
            >
              Limpiar Filtros
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-theme-card dark:bg-neutral-900 border border-theme-medium dark:border-neutral-700 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white">¿Te gustó la documentación?</h2>
            <p className="text-theme-secondary dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
              Si encuentras útil esta documentación, considera darle una estrella en GitHub o compartirla con otros desarrolladores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/CostasAndres"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                <FileText className="w-5 h-5" />
                Ver en GitHub
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-theme-muted dark:bg-neutral-800 hover:bg-theme-medium dark:hover:bg-neutral-700 text-theme-primary dark:text-white rounded-lg font-medium transition-colors"
              >
                Volver al Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
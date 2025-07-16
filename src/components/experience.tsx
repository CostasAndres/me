"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Desarrollador Full Stack Junior",
      company: "Freelance",
      location: "Remoto",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web completas utilizando React, Node.js y bases de datos modernas. Especializado en crear experiencias de usuario intuitivas y escalables.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Proyectos Personales",
      company: "Portfolio",
      location: "España",
      period: "2022 - Presente",
      description: "Desarrollo de proyectos personales para mejorar habilidades técnicas y crear un portfolio sólido. Enfoque en tecnologías modernas y mejores prácticas.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Git", "Docker"],
      link: "https://github.com/CostasAndres"
    }
  ]

  const education = [
    {
      title: "Desarrollo Web Full Stack",
      institution: "Bootcamp / Cursos Online",
      period: "2022 - 2023",
      description: "Formación intensiva en desarrollo web moderno, incluyendo frontend, backend y bases de datos."
    }
  ]

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Experiencia
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Mi trayectoria profesional y formación académica
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 flex items-center gap-2">
              <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Experiencia Laboral
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-blue-600/20 dark:border-blue-400/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                          <span className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {exp.link && exp.link !== "#" && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                      >
                        Ver más <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Formación
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-blue-600/20 dark:border-blue-400/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                          {edu.title}
                        </h4>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                Habilidades Adicionales
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <h5 className="font-medium text-neutral-900 dark:text-white">Frontend</h5>
                  <div className="space-y-1">
                    <div className="text-sm text-neutral-600 dark:text-neutral-300">• React & Next.js</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-300">• TypeScript</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-300">• Tailwind CSS</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-300">• Framer Motion</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-neutral-900 dark:text-white">Backend</h5>
                  <div className="space-y-1">
                    <div className="text-sm text-neutral-600 dark:text-neutral-300">• Node.js & Express</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-300">• MongoDB & PostgreSQL</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-300">• REST APIs</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-300">• Git & GitHub</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
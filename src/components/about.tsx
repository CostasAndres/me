"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone, Zap, Shield } from "lucide-react"

export function About() {
  const skills = [
    { name: "React", icon: Code, level: 85 },
    { name: "JavaScript", icon: Code, level: 90 },
    { name: "Node.js", icon: Database, level: 80 },
    { name: "TypeScript", icon: Code, level: 75 },
    { name: "HTML/CSS", icon: Globe, level: 95 },
    { name: "Responsive Design", icon: Smartphone, level: 85 },
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
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Sobre mí
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Soy un desarrollador junior apasionado por la tecnología y la innovación
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Mi Historia
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Como desarrollador Full Stack Junior, me apasiona crear soluciones web que no solo 
              funcionen perfectamente, sino que también proporcionen una experiencia de usuario excepcional. 
              Mi enfoque se centra en escribir código limpio, mantenible y escalable.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Estoy constantemente aprendiendo nuevas tecnologías y mejores prácticas para 
              mantenerme al día con las últimas tendencias del desarrollo web. Mi objetivo es 
              contribuir a proyectos innovadores y crecer profesionalmente en un entorno colaborativo.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-neutral-900 dark:text-white">Desarrollo Rápido</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-neutral-900 dark:text-white">Código Seguro</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-neutral-900 dark:text-white">Responsive Design</span>
              </div>
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-neutral-900 dark:text-white">Full Stack</span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
              Mis Habilidades
            </h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-neutral-900 dark:text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-8"
          >
            <Image
              src="https://avatars.githubusercontent.com/u/93986301?v=4"
              alt="Andrés Costas"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
          >
            Hola, soy{" "}
            <span className="text-primary">Andrés Costas</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-neutral-700 dark:text-muted-foreground max-w-3xl mx-auto"
          >
            Desarrollador Full Stack Junior apasionado por crear experiencias web innovadoras
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-neutral-600 dark:text-muted-foreground/80 max-w-2xl mx-auto"
          >
            Especializado en Next.js, React, Tailwind CSS, Kotlin, Java, Spring Boot y tecnologías modernas. 
            Buscando oportunidades para crecer y contribuir en proyectos desafiantes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contactar
            </a>
            <a
              href="/Andrés_CostasMoreno_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 border border-border bg-background text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
            >
              <Download className="w-5 h-5" />
              Descargar CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex justify-center gap-4 pt-8"
          >
            <a
              href="https://github.com/CostasAndres"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/andres-costas-moreno/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
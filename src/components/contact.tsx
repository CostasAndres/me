"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MessageSquare, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error enviando mensaje:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "costasandres01@gmail.com",
      href: "mailto:costasandres01@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "andres-costas-moreno",
      href: "https://www.linkedin.com/in/andres-costas-moreno/"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "CostasAndres",
      href: "https://github.com/CostasAndres"
    }
  ]

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-secondary dark:text-white mb-4">
            Contacto
          </h2>
          <p className="text-lg text-theme-primary dark:text-neutral-300 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Me encantaría escucharlo!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-theme-secondary dark:text-white mb-6">
                ¡Hablemos!
              </h3>
              <p className="text-theme-primary dark:text-neutral-300 leading-relaxed mb-8">
                Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
                Si tienes una idea o quieres colaborar, no dudes en contactarme.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.title !== "Email" ? "_blank" : undefined}
                  rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-theme-secondary dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors group border border-theme-light dark:border-neutral-700"
                >
                  <div className="p-2 rounded-lg bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">{method.title}</h4>
                    <p className="text-sm text-theme-muted dark:text-neutral-400">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-theme-secondary dark:bg-blue-400/5 rounded-lg border border-blue-600/10 dark:border-blue-400/10"
            >
              <h4 className="font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Disponibilidad
              </h4>
              <p className="text-sm text-theme-secondary dark:text-neutral-300">
                Actualmente disponible para proyectos freelance y oportunidades laborales. 
                Respuesta rápida garantizada.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-theme-card border border-theme-light rounded-lg p-8 shadow-theme-sm"
          >
                          <h3 className="text-2xl font-semibold text-theme-primary mb-6">
                Envíame un mensaje
              </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-theme-primary mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-theme-light rounded-lg bg-theme-card 
                  text-theme-primary placeholder-theme-light 
                  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-theme-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-theme-light rounded-lg bg-theme-card text-theme-primary placeholder-theme-light focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-theme-primary mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-theme-light rounded-lg bg-theme-card text-theme-primary placeholder-theme-light focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>

                {/* Mensajes de estado */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-center"
                  >
                    ¡Mensaje enviado correctamente! Te responderé pronto.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-center"
                  >
                    Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                  </motion.div>
                )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
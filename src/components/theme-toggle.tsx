"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Función para obtener el tema actual efectivo
  const getCurrentTheme = () => {
    if (!mounted) return "light"
    if (theme === "system") {
      return systemTheme || "light"
    }
    return theme || "light"
  }

  // Función para cambiar el tema
  const toggleTheme = () => {
    const currentTheme = getCurrentTheme()
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors">
        <div className="w-5 h-5" />
      </button>
    )
  }

  const currentTheme = getCurrentTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
      aria-label="Cambiar tema"
    >
      {currentTheme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
} 
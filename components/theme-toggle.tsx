 "use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"


export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    const isDark = localStorage.getItem("theme") === "dark"
    html.classList.toggle("dark", isDark)
    setDark(isDark)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const isDark = html.classList.contains("dark")
    html.classList.toggle("dark", !isDark)
    localStorage.setItem("theme", isDark ? "light" : "dark")
    setDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-muted hover:bg-accent transition-colors"
    >
      {dark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-500" />}
    </button>
  )
}

"use client"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative w-8 h-8 flex items-center justify-center text-ink-3 hover:text-ink transition-colors",
        className
      )}
    >
      <Sun size={15} className={cn("absolute transition-all duration-200", theme === "dark" ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100")} />
      <Moon size={15} className={cn("absolute transition-all duration-200", theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50")} />
    </button>
  )
}

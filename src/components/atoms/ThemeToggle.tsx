import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  theme: string
  setTheme: (theme: string) => void
  className?: string
}

export default function ThemeToggle({ theme, setTheme, className = 'p-2.5 rounded-xl' }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`${className} bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/50 dark:border-slate-800 transition-all duration-300 cursor-pointer`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  )
}

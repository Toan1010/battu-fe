import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react'

interface HeaderProps {
  theme: string
  setTheme: (theme: string) => void
}

export default function Header({ theme, setTheme }: HeaderProps) {
  const { t, i18n } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0b0f19]/80 border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            P
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t('header.home')}</a>
          <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t('header.about')}</a>
          <a href="#skills" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t('header.skills')}</a>
          <a href="#projects" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t('header.projects')}</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t('header.contact')}</a>
        </nav>

        {/* CTA, Language & Theme Toggle Button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => changeLanguage(i18n.language === 'vi' ? 'en' : 'vi')}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/50 dark:border-slate-800 transition-all duration-300 text-xs font-bold uppercase cursor-pointer"
            aria-label="Toggle language"
          >
            {i18n.language === 'vi' ? 'EN' : 'VI'}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/50 dark:border-slate-800 transition-all duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-slate-700/80 text-slate-850 dark:text-white hover:bg-slate-900/10 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 flex items-center gap-1.5"
          >
            {t('header.hireMe')} <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile elements */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Language Switcher */}
          <button
            onClick={() => changeLanguage(i18n.language === 'vi' ? 'en' : 'vi')}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/50 dark:border-slate-800 transition-all duration-300 text-xs font-bold uppercase cursor-pointer"
            aria-label="Toggle language"
          >
            {i18n.language === 'vi' ? 'EN' : 'VI'}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/50 dark:border-slate-800 transition-all duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-6 py-8 flex flex-col gap-6 shadow-xl">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400">{t('header.home')}</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400">{t('header.about')}</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400">{t('header.skills')}</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400">{t('header.projects')}</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400">{t('header.contact')}</a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold shadow-lg shadow-indigo-500/20"
          >
            {t('header.hireMe')}
          </a>
        </div>
      )}
    </header>
  )
}

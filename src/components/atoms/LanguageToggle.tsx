import { useTranslation } from 'react-i18next'

interface LanguageToggleProps {
  className?: string
}

export default function LanguageToggle({ className = 'px-3 py-1.5 rounded-xl text-xs' }: LanguageToggleProps) {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  return (
    <button
      onClick={() => changeLanguage(i18n.language === 'vi' ? 'en' : 'vi')}
      className={`${className} bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/50 dark:border-slate-800 transition-all duration-300 font-bold uppercase cursor-pointer`}
      aria-label="Toggle language"
    >
      {i18n.language === 'vi' ? 'EN' : 'VI'}
    </button>
  )
}

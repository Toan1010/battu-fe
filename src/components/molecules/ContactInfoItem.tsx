import React from 'react'

interface ContactInfoItemProps {
  href: string
  icon: React.ReactNode
  title: string
  detail: string
  isSmall?: boolean
}

export default function ContactInfoItem({ href, icon, title, detail, isSmall = false }: ContactInfoItemProps) {
  if (isSmall) {
    return (
      <a 
        href={href} 
        className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/20 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 group"
      >
        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center group-hover:text-slate-800 dark:hover:text-white transition-colors">
          {icon}
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500">{title}</p>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{detail}</p>
        </div>
      </a>
    )
  }

  return (
    <a 
      href={href} 
      className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/20 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</p>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{detail}</p>
      </div>
    </a>
  )
}

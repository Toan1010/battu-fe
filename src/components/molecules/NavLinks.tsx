import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'

interface NavLinksProps {
  className?: string
  onItemClick?: () => void
}

export default function NavLinks({ className = 'flex items-center gap-8', onItemClick }: NavLinksProps) {
  const { t } = useTranslation()

  const links = [
    { href: '/#home', label: t('header.home'), isHash: true },
    { href: '/#about', label: t('header.about'), isHash: true },
    { href: '/#skills', label: t('header.skills'), isHash: true },
    { href: '/#projects', label: t('header.projects'), isHash: true },
    { href: '/#contact', label: t('header.contact'), isHash: true },
    { href: '/users', label: t('header.users', 'Users'), isHash: false }
  ]

  return (
    <nav className={className}>
      {links.map((link, index) => 
        link.isHash ? (
          <a
            key={index}
            href={link.href}
            onClick={onItemClick}
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={index}
            to={link.href}
            onClick={onItemClick}
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            activeProps={{ className: 'text-indigo-600 dark:text-indigo-400 font-semibold' }}
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  )
}

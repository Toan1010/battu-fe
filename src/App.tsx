import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Mail,
  ExternalLink,
  Code,
  Server,
  Database,
  Award,
  ArrowUpRight,
  CheckCircle,
  Terminal,
  Menu,
  X,
  Send,
  Sparkles,
  Cpu,
  Sun,
  Moon
} from 'lucide-react'

// Custom SVG Icons for brands since Lucide removed them in v1.0
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function App() {
  const { t, i18n } = useTranslation()
  const [activeTab, setActiveTab] = useState('All')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) return savedTheme
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      return systemTheme
    }
    return 'dark'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  // Mock Projects Data translated dynamically
  const projectsData = [
    {
      id: 1,
      title: t('projects.items.project_1_title'),
      category: 'Fullstack',
      description: t('projects.items.project_1_desc'),
      tags: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: t('projects.items.project_2_title'),
      category: 'Frontend',
      description: t('projects.items.project_2_desc'),
      tags: ['React', 'TypeScript', 'TailwindCSS', 'Zustand'],
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: t('projects.items.project_3_title'),
      category: 'Backend',
      description: t('projects.items.project_3_desc'),
      tags: ['Express', 'TypeScript', 'OpenAI API', 'Redis'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: t('projects.items.project_4_title'),
      category: 'Frontend',
      description: t('projects.items.project_4_desc'),
      tags: ['React Native', 'ChartJS', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      demoUrl: '#',
      githubUrl: '#'
    }
  ]

  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true)
      setTimeout(() => {
        setFormSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 5000)
    }
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  return (
    <div className="bg-slate-50 dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 min-h-screen relative font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden transition-colors duration-300">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] max-w-[800px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[60vw] h-[60vw] max-w-[800px] bg-violet-600/5 dark:bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[50vw] h-[50vw] max-w-[700px] bg-blue-600/3 dark:bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Navigation Header */}
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

      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center pt-10 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center w-full">
          {/* Left Hero Text */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 w-fit text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 animate-pulse" /> {t('hero.ready')}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                {t('hero.greeting')} <br />
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
                  {t('hero.name')}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-500 dark:text-slate-400">
                {t('hero.role')}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
              >
                {t('hero.viewProjects')} <ArrowUpRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3.5 rounded-xl bg-slate-200 hover:bg-slate-350 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700/80 text-slate-800 dark:text-white font-bold transition-all duration-300 flex items-center gap-2"
              >
                {t('hero.contactNow')}
              </a>
            </div>

            {/* Micro stats / Tech logs */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-200 dark:border-slate-800/80 max-w-md">
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">3+</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">{t('hero.statsYears')}</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">20+</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">{t('hero.statsProjects')}</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">10+</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">{t('hero.statsClients')}</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image/Animation */}
          <div className="md:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl bg-gradient-to-tr from-indigo-600 to-violet-600 p-1.5 shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-500/5 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-[#0f1424] rounded-[22px] overflow-hidden flex flex-col p-6 relative">
                {/* Tech background graphic */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Simulated IDE header */}
                <div className="flex items-center gap-1.5 pb-4 border-b border-slate-800">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-500 ml-2 font-mono">portfolio.tsx</span>
                </div>

                {/* Simulated IDE code lines */}
                <div className="flex-1 font-mono text-xs text-left pt-4 space-y-2 overflow-hidden">
                  <p className="text-pink-400">import <span className="text-slate-300">{"{"} React {"}"}</span> from <span className="text-green-400">'react'</span></p>
                  <p className="text-blue-400">const <span className="text-yellow-400">Developer</span> = () =&gt; {"{"}</p>
                  <div className="pl-4 space-y-1.5 border-l border-slate-800">
                    <p className="text-slate-400">name: <span className="text-green-400">'Nguyen Van A'</span>,</p>
                    <p className="text-slate-400">role: <span className="text-green-400">'Full Stack Developer'</span>,</p>
                    <p className="text-slate-400">skills: [</p>
                    <p className="text-green-400 pl-4">'React', 'Node.js', 'Vite',</p>
                    <p className="text-green-400 pl-4">'TailwindCSS', 'TypeScript'</p>
                    <p className="text-slate-400">],</p>
                    <p className="text-slate-400">passionateAbout: <span className="text-green-400">'Clean Code'</span></p>
                  </div>
                  <p className="text-blue-400">{"}"}</p>
                </div>

                {/* Accent overlay label */}
                <div className="absolute bottom-4 right-4 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5" /> {t('hero.webDev')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-6 border-t border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-[#090d16]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{t('about.title')}</h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
            <p className="text-slate-600 dark:text-slate-400">{t('about.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Narrative */}
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="text-indigo-600 dark:text-indigo-400" /> {t('about.narrativeTitle')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.narrativeP1')}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.narrativeP2')}
              </p>

              {/* Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{t('about.valueQualityTitle')}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{t('about.valueQualityDesc')}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{t('about.valuePerformanceTitle')}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{t('about.valuePerformanceDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors text-left space-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-600 flex items-center justify-center text-white">
                  <Code className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">{t('about.highlightFrontendTitle')}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t('about.highlightFrontendDesc')}</p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors text-left space-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-500 to-violet-600 flex items-center justify-center text-white">
                  <Server className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">{t('about.highlightBackendTitle')}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t('about.highlightBackendDesc')}</p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors text-left space-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500 to-blue-600 flex items-center justify-center text-white">
                  <Database className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">{t('about.highlightDatabaseTitle')}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t('about.highlightDatabaseDesc')}</p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors text-left space-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500 to-pink-600 flex items-center justify-center text-white">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">{t('about.highlightSystemTitle')}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t('about.highlightSystemDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{t('skills.title')}</h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
            <p className="text-slate-600 dark:text-slate-400">{t('skills.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills Box */}
            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">Frontend Development</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['React', 'TypeScript', 'TailwindCSS', 'Next.js', 'Vite', 'HTML5/CSS3', 'Redux / Zustand', 'ES6+'].map((skill, index) => (
                  <span key={index} className="px-3.5 py-1.5 text-sm font-semibold rounded-xl bg-indigo-50 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20 hover:bg-indigo-100 dark:hover:bg-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills Box */}
            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-violet-500/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">Backend Development</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'GraphQL', 'JWT Auth', 'Websockets', 'Postman'].map((skill, index) => (
                  <span key={index} className="px-3.5 py-1.5 text-sm font-semibold rounded-xl bg-violet-50 dark:bg-violet-500/5 text-violet-600 dark:text-violet-300 border border-violet-100 dark:border-violet-500/20 hover:bg-violet-100 dark:hover:bg-violet-500/10 hover:border-violet-300 dark:hover:border-violet-500/40 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Database Skills Box */}
            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">Databases & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Docker', 'Git / GitHub', 'CI/CD (GitHub Actions)', 'Vercel / Netlify'].map((skill, index) => (
                  <span key={index} className="px-3.5 py-1.5 text-sm font-semibold rounded-xl bg-blue-50 dark:bg-blue-500/5 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-500/20 hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:border-blue-300 dark:hover:border-blue-500/40 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 border-t border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-[#090d16]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{t('projects.title')}</h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
            <p className="text-slate-600 dark:text-slate-400">{t('projects.subtitle')}</p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {['All', 'Frontend', 'Backend', 'Fullstack'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-gradient-to-tr from-indigo-500 to-violet-500 text-white border-transparent shadow-lg shadow-indigo-500/20'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                }`}
              >
                {tab === 'All' ? t('projects.all') : tab}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                className="group rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 overflow-hidden hover:border-slate-350 dark:hover:border-slate-700/80 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col text-left"
              >
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-white/90 dark:bg-[#0b0f19]/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-300">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                      {project.title}
                      <span className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </h3>
                    <p className="text-sm text-slate-655 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      <a 
                        href={project.demoUrl} 
                        className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 flex items-center gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> {t('projects.demo')}
                      </a>
                      <a 
                        href={project.githubUrl} 
                        className="text-xs font-bold text-slate-550 dark:text-slate-400 hover:text-slate-850 dark:hover:text-white flex items-center gap-1"
                      >
                        <GithubIcon className="w-3.5 h-3.5" /> {t('projects.source')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{t('contact.title')}</h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
            <p className="text-slate-600 dark:text-slate-400">{t('contact.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t('contact.infoTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('contact.infoDesc')}
              </p>

              <div className="space-y-4">
                <a 
                  href="mailto:contact@example.com" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/20 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">contact@example.com</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/20 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center group-hover:text-slate-800 dark:hover:text-white transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500">GitHub</p>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200">@username</p>
                    </div>
                  </a>

                  <a 
                    href="#" 
                    className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/20 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center group-hover:text-slate-800 dark:hover:text-white transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500">LinkedIn</p>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200">@username</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md relative overflow-hidden shadow-lg dark:shadow-none">
                <form onSubmit={handleContactSubmit} className="space-y-6 text-left">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t('contact.formName')}</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t('contact.placeholderName')} 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t('contact.formEmail')}</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t('contact.placeholderEmail')} 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t('contact.formMessage')}</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('contact.placeholderMessage')} 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {t('contact.submit')} <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </form>

                {/* Success alert message overlay */}
                {formSubmitted && (
                  <div className="absolute inset-0 bg-white/95 dark:bg-[#0b0f19]/95 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('contact.successTitle')}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm">
                      {t('contact.successDesc')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-900/60 bg-slate-100 dark:bg-[#070a10]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="font-extrabold tracking-tight text-slate-800 dark:text-slate-200">Portfolio</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Nguyễn Văn A. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
import { Outlet } from '@tanstack/react-router'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

interface MainLayoutProps {
  theme: string
  setTheme: (theme: string) => void
}

export default function MainLayout({ theme, setTheme }: MainLayoutProps) {
  return (
    <div className="bg-slate-50 dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 min-h-screen relative font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden transition-colors duration-300">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] max-w-[800px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[60vw] h-[60vw] max-w-[800px] bg-violet-600/5 dark:bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[50vw] h-[50vw] max-w-[700px] bg-blue-600/3 dark:bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <Header theme={theme} setTheme={setTheme} />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

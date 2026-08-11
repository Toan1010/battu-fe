import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../molecules/ProjectCard'
import { Project } from '../../interfaces/project'

export default function Projects() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('All')

  // Mock Projects Data translated dynamically
  const projectsData: Project[] = [
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

  return (
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

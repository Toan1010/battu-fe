import { Project } from '../../interfaces/project'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../atoms/BrandIcons'
import { useTranslation } from 'react-i18next'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <div className="group rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 overflow-hidden hover:border-slate-350 dark:hover:border-slate-700/80 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col text-left">
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
  )
}

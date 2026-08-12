import { Project } from '../../interfaces/project'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../atoms/BrandIcons'
import { useTranslation } from 'react-i18next'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()

  // Helper to assign colors to tags dynamically for rich aesthetics
  const getTagStyle = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes('react')) return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20';
    if (lower.includes('node') || lower.includes('express')) return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
    if (lower.includes('typescript')) return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
    if (lower.includes('tailwind')) return 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20';
    if (lower.includes('postgresql') || lower.includes('redis')) return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
    if (lower.includes('openai')) return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
    return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
  }

  return (
    <div className="group rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col text-left h-full">
      {/* Project Image container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-150 dark:border-slate-800/50">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        {/* Soft dark overlay on hover */}
        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/10 transition-colors duration-300" />
        
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 text-indigo-600 dark:text-indigo-400 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
            {project.title}
            <span className="text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className={`text-xs font-medium px-2.5 py-1 rounded-lg border transition-all duration-300 ${getTagStyle(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <a 
              href={project.demoUrl} 
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> {t('projects.demo')}
            </a>
            <a 
              href={project.githubUrl} 
              className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" /> {t('projects.source')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, CheckCircle, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons'

export default function Contact() {
  const { t } = useTranslation()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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

  return (
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
  )
}

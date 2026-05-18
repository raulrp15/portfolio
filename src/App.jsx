// Main layout: header with lang toggle, expandable cards, footer
// All text content comes from translation keys via useLang().t()

import { useState } from 'react'
import { useLang } from './LangContext'
import LangToggle from './LangToggle'
import ExpandoCard from './ExpandoCard'

const skillIcons = {
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  NoSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Lua: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg',
  Godot: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg',
}

function App() {
  const { t } = useLang()
  const [openCard, setOpenCard] = useState(null)

  return (
    <div className="min-h-screen bg-stone-100 p-6 font-mono">
      <header className="max-w-2xl mx-auto mb-8 relative">
        <div className="absolute right-0 top-0">
          <LangToggle />
        </div>
        <div className="flex items-center gap-5 justify-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-black object-cover"
          />
          <div className="text-left">
            <h1 className="text-4xl font-black text-stone-800">{t('header.title')}</h1>
            <p className="text-stone-500">{t('header.subtitle')}</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto flex flex-col gap-4">
        <ExpandoCard title={t('about.title')} open={openCard === 'about'} onToggle={() => setOpenCard(openCard === 'about' ? null : 'about')}>
          {t('about.text').map((p, i) => (
            <p key={i} className={i > 0 ? 'mt-3' : ''}>{p}</p>
          ))}
        </ExpandoCard>

        <ExpandoCard title={t('projects.title')} open={openCard === 'projects'} onToggle={() => setOpenCard(openCard === 'projects' ? null : 'projects')}>
          <ul className="space-y-3">
            {t('projects.items').map(([name, desc, url], i) => (
              <li key={i}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-2 hover:text-stone-900"
                >
                  {name}
                </a>
                <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>
        </ExpandoCard>

        <ExpandoCard title={t('skills.title')} open={openCard === 'skills'} onToggle={() => setOpenCard(openCard === 'skills' ? null : 'skills')}>
          <div className="grid grid-cols-2 gap-4">
            {t('skills.items').map(([lang, frameworks], i) => (
              <div key={i} className="flex items-center gap-3 p-3 border border-stone-300 bg-stone-50">
                {skillIcons[lang] && (
                  <img src={skillIcons[lang]} alt={lang} className="w-8 h-8" />
                )}
                <div>
                  <p className="font-bold text-stone-800">{lang}</p>
                  <p className="text-stone-500 text-xs">{frameworks}</p>
                </div>
              </div>
            ))}
          </div>
        </ExpandoCard>

        <ExpandoCard title={t('contact.title')} open={openCard === 'contact'} onToggle={() => setOpenCard(openCard === 'contact' ? null : 'contact')}>
          <p>{t('contact.email')} <a href="mailto:raulromera0@gmail.com" className="underline hover:text-stone-900">raulromera0@gmail.com</a></p>
          <p className="mt-1">{t('contact.github')} <a href="https://github.com/raulrp15" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-900">github.com/raulrp15</a></p>
          <p className="mt-1">{t('contact.linkedin')} <a href="https://www.linkedin.com/in/raúl-romera-pavón-6b21bb313/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-900">linkedin.com/in/raúl-romera-pavón</a></p>
        </ExpandoCard>
      </main>

      <footer className="max-w-2xl mx-auto mt-12 text-center text-stone-400 text-xs">
        &copy; {new Date().getFullYear()} &mdash; {t('footer')}
      </footer>
    </div>
  )
}

export default App

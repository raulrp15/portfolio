// Language switcher: two buttons (ES / EN) styled as a retro toggle.
// Active language gets a dark background, inactive one is light.

import { useLang } from './LangContext'

function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="flex border-2 border-black">
      <button
        onClick={() => setLang('es')}
        className={`px-3 py-1 font-mono text-sm font-bold transition-colors ${lang === 'es' ? 'bg-stone-800 text-amber-50' : 'bg-amber-50 text-stone-500 hover:text-stone-800'}`}
      >
        ES
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 font-mono text-sm font-bold transition-colors ${lang === 'en' ? 'bg-stone-800 text-amber-50' : 'bg-amber-50 text-stone-500 hover:text-stone-800'}`}
      >
        EN
      </button>
    </div>
  )
}

export default LangToggle

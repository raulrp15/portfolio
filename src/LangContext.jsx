/* eslint-disable react-refresh/only-export-components */
// Language context, provider, and useLang hook bundled in one file.
// Standard React pattern: context + provider + hook live together.

import { createContext, useContext, useState } from 'react'
import es from './translations/es.json'
import en from './translations/en.json'

const langs = { es, en }
const STORAGE_KEY = 'portfolio-lang'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
  const [lang, setLang] = useState(stored === 'es' || stored === 'en' ? stored : 'es')

  function setAndStore(l) {
    setLang(l)
    localStorage.setItem(STORAGE_KEY, l)
  }

  function t(key) {
    return key.split('.').reduce((acc, k) => acc?.[k], langs[lang]) ?? key
  }

  return (
    <LangContext.Provider value={{ lang, setLang: setAndStore, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be inside LangProvider')
  return ctx
}

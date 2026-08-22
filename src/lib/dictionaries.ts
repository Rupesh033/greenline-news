import 'server-only'

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  hi: () => import('../dictionaries/hi.json').then((module) => module.default),
}

export type ValidLocale = keyof typeof dictionaries

export const getDictionary = async (locale: ValidLocale) => {
  if (!dictionaries[locale]) {
    return dictionaries['en']()
  }
  return dictionaries[locale]()
}

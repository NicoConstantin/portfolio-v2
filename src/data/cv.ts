const CV_PATHS: Record<string, string> = {
  en: '/cv/Nicolas Constantin - CV - Full Stack Developer - EN.pdf',
  fr: '/cv/Nicolas Constantin - CV - Full Stack Developer - FR.pdf',
}

export function getCvDownload(locale?: string) {
  const normalizedLocale = typeof locale === 'string' ? locale : 'en'
  const path = CV_PATHS[normalizedLocale] ?? CV_PATHS.en

  return {
    path,
    href: encodeURI(path),
    filename: path.split('/').pop() ?? undefined,
  }
}


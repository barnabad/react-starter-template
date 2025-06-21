// Fallback language must be first item
export const SUPPORTED_LANGUAGES = ['en', 'hu'] as const;

export type SupportedLanguages = (typeof SUPPORTED_LANGUAGES)[number];

export const FLAG_MAP: Record<
  SupportedLanguages,
  { icon: string; name: string }
> = {
  en: { icon: 'fi fi-gb', name: 'English' },
  hu: { icon: 'fi fi-hu', name: 'Magyar' },
};

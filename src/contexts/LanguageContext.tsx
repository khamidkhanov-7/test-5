import { createContext, useContext, useState, useEffect, ReactNode } from 'react';


type Language = 'ru' | 'en' | 'uz';

interface Translation {
  key: string;
  ru: string;
  en: string;
  uz: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Record<string, Translation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');
  const [translations, setTranslations] = useState<Record<string, Translation>>({});

  useEffect(() => {
    loadTranslations();
  }, []);

  // const loadTranslations = async () => {
  //   const { data, error } = await supabase
  //     .from('translations')
  //     .select('*');

  //   if (data && !error) {
  //     const translationsMap: Record<string, Translation> = {};
  //     data.forEach((item) => {
  //       translationsMap[item.key] = item;
  //     });
  //     setTranslations(translationsMap);
  //   }
  // };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

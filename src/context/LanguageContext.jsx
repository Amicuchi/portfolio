import { createContext, useState, useEffect } from "react";
import translations from "../locales/translations";

// Cria o contexto
export const LanguageContext = createContext();

// Cria o provedor de contexto
export const LanguageProvider = ({ children }) => {

  // Verifica se há uma preferência salva no localStorage
  const savedLanguage = localStorage.getItem("language");
  
  const [language, setLanguage] = useState(savedLanguage || "pt");  // Estado para armazenar o idioma atual (padrão: pt)
  const [texts, setTexts] = useState(translations[language]);       // Estado para armazenar as traduções do idioma atual

  // Função para alterar o idioma
  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    }
  };

  // Atualizar os textos quando o idioma mudar
  useEffect(() => {
    setTexts(translations[language]);
  }, [language]);

  // Valores a serem disponibilizados pelo contexto
  const contextValue = {
    language,
    texts,
    changeLanguage,
    isPortuguese: language === "pt",
    isEnglish: language === "en",
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

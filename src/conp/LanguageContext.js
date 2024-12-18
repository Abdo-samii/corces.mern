import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [fontFamily, setFontFamily] = useState('roboto');

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setFontFamily(lang === 'ar' ? 'cairo' : 'roboto');
    };

    return (
        <LanguageContext.Provider value={{ language, fontFamily, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

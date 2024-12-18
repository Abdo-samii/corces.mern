
// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            Home: "Home",
            About: "About",
            Services: "Services",
            Contact: "Contact",
            "Sign Up": "Sign Up",
        }
    },
    ar: {
        translation: {
            Home: "الرئيسية",
            About: "حول",
            Services: "الخدمات",
            Contact: "اتصل",
            "Sign Up": "اشتراك",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // اللغة الافتراضية
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // لا حاجة للهروب من القيم في React
        }
    });

export default i18n;

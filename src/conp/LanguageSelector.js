import React, { useState } from 'react';
import { MdOutlineLanguage } from "react-icons/md";
import { useLanguage } from './LanguageContext'; // استيراد الاستخدام

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, changeLanguage } = useLanguage(); // استخدام changeLanguage

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const languages = [
        { label: 'English', code: 'en' },
        { label: 'العربية', code: 'ar' },
    ];

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleMenu}
                className="text-white flex bg-orange-600 m-4 font-semibold rounded-lg p-4 hover:bg-orange-500 hover:translate-y-2 transition-transform duration-200"
                aria-label="Select Language"
            >
                {language === 'en' ? 'Language' : 'اللغة'} <MdOutlineLanguage />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                                onClick={() => {
                                    changeLanguage(lang.code); // تغيير اللغة
                                    setIsOpen(false); // أغلق القائمة بعد الاختيار
                                }}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;

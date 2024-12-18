import React from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Imagess from './Imagess..js';
import Corses from './Corses';
import { useLanguage } from './LanguageContext'; // استيراد استخدام اللغة

export const Bode = () => {
  const navigate = useNavigate(); // استخدام useNavigate
  const { language, setLanguage } = useLanguage(); // استخدام LanguageContext

  const navItems = [
    { label: language === 'en' ? 'About' : 'حول', path: '/about' },
    { label: language === 'en' ? 'Contact' : 'اتصل بنا', path: '/contact' },
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // تغيير اللغة
  };

  return (
    <div className='bg-gray-100'>
      <div className='bg-black p-16 rounded-bl-full flex flex-col md:flex-row'>
        <div className='flex-1'>
          <h1 className='text-6xl text-white font-bold'>
            {language === 'en' ? 'Welcome' : 'أهلاً وسهلاً'}
          </h1>
          <p className='text-white font-semibold p-4'>
            {language === 'en'
              ? 'In the first academy in the Middle East that works with modern education and aims to produce the best cadres capable of facing the biggest challenges and working hard to change their lives for the better.'
              : 'في الأكاديمية الأولى في الشرق الأوسط التي تعمل بالتعليم الحديث وتهدف إلى إنتاج أفضل الكوادر القادرة على مواجهة أكبر التحديات والعمل بجد لتغيير حياتهم للأفضل.'}
          </p>
          <div className='flex justify-start mt-12'>
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className='text-xl text-white bg-orange-600 hover:translate-y-2 mx-6 rounded-lg px-4 py-2 hover:bg-orange-500 transition-transform duration-200 md:my-0 my-2'
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className='flex-2 p-5'>
          <Imagess />
        </div>
      </div>
      <Corses />
      <Footer />

    </div>
  );
};

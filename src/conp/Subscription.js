import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // استيراد استخدام اللغة

const subscriptions = [
  {
    title: {
      en: 'Trading Course',
      ar: 'دورة التداول',
    },
    duration: {
      en: '3 Months',
      ar: '3 أشهر',
    },
    price: {
      en: '15,000 EGP',
      ar: '15,000 جنيه مصري',
    },
  },
  {
    title: {
      en: 'Languages Course',
      ar: 'دورة اللغات',
    },
    duration: {
      en: '6 Months',
      ar: '6 أشهر',
    },
    price: {
      en: '6,000 EGP',
      ar: '6,000 جنيه مصري',
    },
  },
  {
    title: {
      en: 'Marketing Course',
      ar: 'دورة التسويق',
    },
    duration: {
      en: '3 Months',
      ar: '3 أشهر',
    },
    price: {
      en: '5,500 EGP',
      ar: '5,500 جنيه مصري',
    },
  },
  {
    title: {
      en: 'Web Development Course',
      ar: 'دورة تطوير الويب',
    },
    duration: {
      en: '3 Months',
      ar: '3 أشهر',
    },
    price: {
      en: '4,500 EGP',
      ar: '4,500 جنيه مصري',
    },
  },
  {
    title: {
      en: 'Graphic Design Course',
      ar: 'دورة تصميم الجرافيك',
    },
    duration: {
      en: '3 Months',
      ar: '3 أشهر',
    },
    price: {
      en: '7,000 EGP',
      ar: '7,000 جنيه مصري',
    },
  },
];

const Subscription = () => {
  const navigate = useNavigate();
  const { language } = useLanguage(); // استخدام LanguageContext للحصول على اللغة الحالية

  const handleSubscribe = () => {
    navigate('/contact');
  };

  return (
    <div className="p-5 bg-gray-300 h-screen mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {language === 'en' ? 'Subscription Plans' : 'خطط الاشتراك'}
      </h1>
      <div className="flex flex-wrap justify-around">
        {subscriptions.map((sub, index) => (
          <div key={index} className="w-80 m-4 bg-white rounded-lg shadow-lg p-5">
            <h2 className="text-xl font-bold">{sub.title[language]}</h2>
            <p className="mt-2">
              {language === 'en' ? 'Duration:' : 'المدة:'} {sub.duration[language]}
            </p>
            <p className="mt-2 text-lg font-bold">{sub.price[language]}</p>
            <button
              className="mt-4 bg-orange-500 text-white rounded py-2 px-4 hover:bg-orange-600"
              onClick={handleSubscribe}
            >
              {language === 'en' ? 'Subscribe Now' : 'اشترك الآن'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;

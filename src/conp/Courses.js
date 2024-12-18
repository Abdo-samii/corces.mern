import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
export const courses = [
  {
    title: {
      en: 'Trading Course',
      ar: 'دورة التداول',
    },
    features: {
      en: [
        'Learn trading strategies',
        'Analyze financial markets',
        'Help be a financial analyst',
        'Education live, online and weekly with a private trainer',
        'Recommendations ready to help with capital raising',
        'Practical applications',
      ],
      ar: [
        'تعلم استراتيجيات التداول',
        'تحليل الأسواق المالية',
        'مساعدة في أن تكون محلل مالي',
        'تعليم مباشر، عبر الإنترنت وأسبوعيًا مع مدرب خاص',
        'توصيات جاهزة للمساعدة في جمع رأس المال',
        'تطبيقات عملية',
      ],
    },
    price: {
      en: 'Try it now for free',
      ar: 'جرّبها الآن مجانًا',
    },
  },
  {
    title: {
      en: 'Languages Course',
      ar: 'دورة اللغات',
    },
    features: {
      en: [
        'Learn 4 different languages',
        'Interactive lessons',
        'German',
        'French',
        'Japanese',
        'English lessons',
        'Certified courses',
        'A private trainer responsible for following up the results',
      ],
      ar: [
        'تعلم 4 لغات مختلفة',
        'دروس تفاعلية',
        'ألمانية',
        'فرنسية',
        'يابانية',
        'دروس إنجليزية',
        'دورات معتمدة',
        'مدرب خاص مسؤول عن متابعة النتائج',
      ],
    },
    price: {
      en: 'Try it now for free',
      ar: 'جرّبها الآن مجانًا',
    },
  },
  {
    title: {
      en: 'Marketing Course',
      ar: 'دورة التسويق',
    },
    features: {
      en: [
        'Digital marketing strategies',
        'Market analysis',
        'Marketing of all kinds',
        'Network Marketing',
        'Digital Marketing',
        'Direct Marketing',
        'Influencer Marketing',
        'Campaign management',
        'A private trainer responsible for following up the results',
      ],
      ar: [
        'استراتيجيات التسويق الرقمي',
        'تحليل السوق',
        'التسويق بأنواعه',
        'التسويق الشبكي',
        'التسويق الرقمي',
        'التسويق المباشر',
        'تسويق المؤثرين',
        'إدارة الحملات',
        'مدرب خاص مسؤول عن متابعة النتائج',
      ],
    },
    price: {
      en: 'Try it now for free',
      ar: 'جرّبها الآن مجانًا',
    },
  },
  {
    title: {
      en: 'Web Development Course',
      ar: 'دورة تطوير الويب',
    },
    features: {
      en: [
        'Learn HTML, CSS, JavaScript',
        'Learn React, Express, MongoDB',
        'Hands-on projects',
        'Training on development tools',
        'A private trainer responsible for following up the results',
        'Preparation to be a Full Stack Developer',
      ],
      ar: [
        'تعلم HTML و CSS و JavaScript',
        'تعلم React و Express و MongoDB',
        'مشاريع عملية',
        'تدريب على أدوات التطوير',
        'مدرب خاص مسؤول عن متابعة النتائج',
        'التحضير لتكون مطور Full Stack',
      ],
    },
    price: {
      en: 'Try it now for free',
      ar: 'جرّبها الآن مجانًا',
    },
  },
  {
    title: {
      en: 'Graphic Design Course',
      ar: 'دورة تصميم الجرافيك',
    },
    features: {
      en: [
        'Learn Photoshop and Illustrator',
        'After Effects and Adobe Premiere',
        'Online and offline training',
        'Preparation to work in the biggest companies or as a freelancer',
        'A private trainer responsible for following up the results',
      ],
      ar: [
        'تعلم Photoshop و Illustrator',
        'After Effects و Adobe Premiere',
        'تدريب عبر الإنترنت وخارجها',
        'التحضير للعمل في أكبر الشركات أو كمستقل',
        'مدرب خاص مسؤول عن متابعة النتائج',
      ],
    },
    price: {
      en: 'Try it now for free',
      ar: 'جرّبها الآن مجانًا',
    },
  },
];
const Courses = () => {
  const { language } = useLanguage(); // الوصول إلى اللغة المختارة

  return (
    <div className="flex flex-wrap justify-around p-5 bg-gray-100" id='courses'>
      {courses.map((course, index) => (
        <Link to={`/course/${index}`} key={index} className="relative w-80 h-96 m-4 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-orange-700 hover:bg-orange-600 flex flex-col justify-center items-center text-white p-5">
            <h2 className="text-2xl font-bold mb-2">{course.title[language]}</h2>
            <ul className="list-disc list-inside mb-2">
              {course.features[language].map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <p className="font-bold">{course.price[language]}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Courses;
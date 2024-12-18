import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from './Courses';
import { useLanguage } from './LanguageContext'; // استيراد استخدام اللغة

const trainingPlans = [
  {
    title: 'Trading Course',
    details: {
      en: `Training Plan Includes:
      1. Introduction to trading strategies.
      2. How to analyze financial markets.
      3. Real-life trading case studies.
      4. Practical applications with a personal trainer.`,
      ar: `تتضمن خطة التدريب:
      1. مقدمة حول استراتيجيات التداول.
      2. كيفية تحليل الأسواق المالية.
      3. دراسات حالة في التداول من الحياة الواقعية.
      4. تطبيقات عملية مع مدرب شخصي.`,
    },
  }, {
    title: 'Languages Course',
    details: {
      en: `Training Plan Includes:
      1. Interactive lessons in four languages.
      2. Improving conversation skills.
      3. Practice with qualified instructors.
      4. Periodic tests to measure progress.`,
      ar: `تتضمن خطة التدريب:
      1. دروس تفاعلية بأربع لغات.
      2. تحسين مهارات المحادثة.
      3. ممارسة مع معلمين مؤهلين.
      4. اختبارات دورية لقياس التقدم.`,
    },
  },{
    title: 'Marketing Course',
    details: {
      en: `Training Plan Includes:
1-Understanding marketing fundamentals.
2-Digital marketing strategies and tools.
3-Content creation and management.
4-Social media marketing and analytics.
5-Developing a marketing plan and measuring success.`,
      ar: `تتضمن خطة التدريب:
     
1-فهم أساسيات التسويق.
2-استراتيجيات وأدوات التسويق الرقمي.
3-إنشاء المحتوى وإدارته.
4-تسويق وسائل التواصل الاجتماعي وتحليل البيانات.
5-تطوير خطة تسويقية وقياس النجاح.`,
    },
  },{
    title: 'Web Development Course',
    details: {
      en: `Training Plan Includes:
     
1-Introduction to web development technologies.
2-HTML, CSS, and JavaScript fundamentals.
3-Building responsive web designs.
4-Working with back-end technologies (e.g., Node.js).
5-Deploying web applications and managing servers..`,
      ar: `
1-مقدمة في تقنيات تطوير الويب.
2-أساسيات HTML و CSS و JavaScript.
3-بناء تصميمات ويب متجاوبة.
4-العمل مع تقنيات الواجهة الخلفية (مثل Node.js).
5-نشر تطبيقات الويب وإدارة الخوادم.`,
    },
  },{
    title: 'Web Development Course',
    details: {
      en: `Training Plan Includes:
     
1-Principles of design and color theory.
2-Mastering design software (e.g., Adobe Illustrator, Photoshop).
3-Creating visual identities and branding.
4-Layout design for print and digital media.
5-Building a professional portfolio and presenting work..`,
      ar: `تتضمن خطة التدريب:
     
1-مبادئ التصميم ونظرية الألوان.
2-إتقان برامج التصميم (مثل Adobe Illustrator و Photoshop).
3-إنشاء هويات بصرية وعلامات تجارية.
4-تصميم التخطيطات للوسائط المطبوعة والرقمية.
5-بناء محفظة احترافية وعرض الأعمال.`,
    },
  },
  // يمكنك إضافة المزيد من الدورات هنا
];

const CourseDetail = () => {
  const { language, setLanguage } = useLanguage(); // استخدام LanguageContext
  const { id } = useParams();
  const course = courses[id];
  const trainingPlan = trainingPlans[id];
  
  const handleLanguageChange = (lang) => {
    setLanguage(lang); // تغيير اللغة
  };

  const sidItems = [
    { label: language === 'en' ? 'Lesson One' : 'الدرس الأول', path: '/lesson1' },
    { label: language === 'en' ? 'Lesson Two' : 'الدرس الثاني', path: '/lesson2' },
    { label: language === 'en' ? 'Lesson Three' : 'الدرس الثالث', path: '/subscription' },
  ];

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-3xl p-2 font-bold mb-4">{course.title[language]}</h1>
      <div className="mt-4">
        <video className="w-full" controls>
          <source src={`path/to/video/${course.title[language]}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h2 className="mt-4 text-2xl font-semibold">{language === 'en' ? 'Training Plan' : 'خطة التدريب'}</h2>
      <p className="mt-2 text-2xl text-gray-700">{trainingPlan.details[language]}</p>
      <h2 className="mt-4 text-2xl font-semibold">{language === 'en' ? 'Lessons' : 'الدروس'}</h2>
      <div className='flex justify-between mt-12'>
        {sidItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className='text-orange-500 hover:underline'
            aria-label={`Navigate to ${item.label}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;

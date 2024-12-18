import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

const Abbout = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black p-5" id='abbout'>
      <h1 className="text-4xl font-bold text-orange-600 mb-5">{language === 'en' ? 'About Us' : 'من نحن'} </h1>
      <p className="text-lg mb-5 text-center max-w-2xl">{language === 'en' ? 'Our academy is a comprehensive online education platform aimed at providing exceptional training courses across various fields. We are committed to equipping our students with the best tools and resources to succeed in their educational journeys.' : 'أكاديميتنا هي منصة تعليمية شاملة عبر الإنترنت تهدف إلى تقديم دورات تدريبية استثنائية في مختلف المجالات. نحن ملتزمون بتزويد طلابنا بأفضل الأدوات والموارد للنجاح في رحلاتهم التعليمية.'}  
      </p>
      <h2 className="text-2xl font-bold text-orange-600 mb-3">{language === 'en' ? 'Our Vision' : "رؤيتنا" }</h2>
      <p className="text-lg mb-5 text-center max-w-2xl">{language === 'en' ? 'Our vision is to be a leader in digital education, delivering innovative and inspiring learning experiences that enhance learners’ abilities and align  with the needs of the job market.' : 'تتمثل رؤيتنا في أن نكون روادا في التعليم الرقمي ، وتقديم خدمات مبتكرة و  تجارب التعلم الملهمة التي تعزز قدرات المتعلمين وتتماشى  مع احتياجات سوق العمل.'}
      </p>
      <h2 className="text-2xl font-bold text-orange-600 mb-3">{language === 'en' ? 'Our Mission' : 'مهمتنا'}</h2>
      <p className="text-lg mb-5 text-center max-w-2xl">{language === 'en' ? 'Our mission is to empower learners by providing high-quality education in a flexible and accessible manner, with a focus on interaction and practical  application. We strive to make a positive impact on our students’ lives through knowledge and innovation.' : 'مهمتنا هي تمكين المتعلمين من خلال توفير تعليم عالي الجودة  بطريقة مرنة ويمكن الوصول إليها ، مع التركيز على التفاعل والعملية  تطبيق. نحن نسعى جاهدين لإحداث تأثير إيجابي على حياة طلابنا من خلال المعرفة والابتكار.'}
      </p>
      <p className="text-lg text-center">{language === 'en' ? 'Join us today and start your educational journey towards the future!' : 'انضم إلينا اليوم وابدأ رحلتك التعليمية نحو المستقبل!'} </p>
      <div className="flex justify-center space-x-4 mb-4 mt-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-600" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700" />
          </a>
        </div>

        <div className="text-center">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
    </div>
  );
};

export default Abbout;

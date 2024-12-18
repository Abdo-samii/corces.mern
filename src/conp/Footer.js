import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage(); // الوصول إلى اللغة المختارة

  const texts = {
    en: {
      contactUs: "Contact Us",
      thankYou: "Thank you for contacting us!",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Email Address",
      phonePlaceholder: "Phone Number",
      messagePlaceholder: "Write your message here.",
      selectInterest: "Select Interest",
      query: "Query",
      support: "Support",
      partnership: "Partnership",
      send: "Send",
      rights: "© All Rights Reserved",
    },
    ar: {
      contactUs: "اتصل بنا",
      thankYou: "شكرًا لتواصلك معنا!",
      namePlaceholder: "اسمك",
      emailPlaceholder: "البريد الإلكتروني",
      phonePlaceholder: "رقم الهاتف",
      messagePlaceholder: "اكتب رسالتك هنا.",
      selectInterest: "اختر الاهتمام",
      query: "استفسار",
      support: "دعم",
      partnership: "شراكة",
      send: "إرسال",        
      rights: "© جميع الحقوق محفوظة",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;
    const interest = e.target.interest.value;

    try {
      // إرسال البيانات إلى الخادم
      await axios.post('http://localhost:5000/api/messages', { name, email, phone, message, interest });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting message:', error);
    }
  };

  return (
    <footer className="bg-black h-screen text-center text-white py-8 px-4">
      <div className="mx-auto flex flex-col max-w-2xl">
        <h2 className="text-2xl mb-4">{texts[language].contactUs}</h2>
        
        {submitted ? (
          <div className="bg-orange-500 text-white p-4 rounded-md text-center mb-4">
            {texts[language].thankYou}
          </div>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder={texts[language].namePlaceholder} className="p-2 rounded-md m-2 text-black" required />
            <input type="email" name="email" placeholder={texts[language].emailPlaceholder} className="p-2 rounded-md m-2 text-black" required />
            <input type="text" name="phone" placeholder={texts[language].phonePlaceholder} className="p-2 rounded-md m-2 text-black" required />
            <textarea name="message" placeholder={texts[language].messagePlaceholder} className="p-3 rounded-md m-2 text-black" required></textarea>
            <select name="interest" className="p-2 m-2 rounded-md text-black" required defaultValue={""}>
              <option value="" disabled>{texts[language].selectInterest}</option>
              <option value="query">{texts[language].query}</option>
              <option value="support">{texts[language].support}</option>
              <option value="partnership">{texts[language].partnership}</option>
            </select>
            <button type="submit" className="bg-orange-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-orange-500">
              {texts[language].send}
            </button>
          </form>
        )}
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
          <p>{texts[language].rights} {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

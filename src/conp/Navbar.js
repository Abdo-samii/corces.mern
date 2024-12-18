import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from './LanguageContext'; // استيراد استخدام اللغة
function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   
const { language, setLanguage } = useLanguage(); // استخدام LanguageContext
const navItems = [
   { label: language === 'en' ? 'Home' : 'الرئسيه', path: '/' },
    { label: language === 'en' ? 'About' : 'حول', path: '/about' },
    { label: language === 'en' ? 'Services' : ' الكورسات', path: '/services' },
    { label: language === 'en' ? 'Contact' : 'اتصل بنا', path: '/contact' },
];

const signItems = [
    { label: language === 'en' ? 'Log In' : 'تسجيل الدخول', path: '/signUp' },
];


  
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    const handleLanguageChange = (lang) => {
        setLanguage(lang); // تغيير اللغة
      };
    
    return (
        <>
            <nav className='bg-black px-4 font-cairo fixed w-full z-10 top-0 flex items-center justify-between'>
                <div className='flex'>
                    <h1 className='text-3xl text-orange-600 font-bold'>Sansa</h1>
                    <p className='text-white font-semibold ml-2'>School</p>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} aria-label="Toggle navigation menu">
                        {isMenuOpen ? <FaTimes className='text-white text-2xl' /> : <FaBars className='text-white text-2xl' />}
                    </button>
                </div>
                <div className={`md:flex md:flex-row md:space-x-4 md:items-center ${isMenuOpen ? 'flex flex-col rounded-xl  absolute top-8 left-0 w-full bg-black' : 'hidden'}`}>
                    {navItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className='text-xl text-white hover:underline hover:translate-y-2 hover:text-orange-500 transition-transform duration-200 my-2'
                            aria-label={`Navigate to ${item.label}`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <div className="flex flex-col  md:hidden  items-center md:flex-row md:items-center">
                        {signItems.map((item) => (
                            <button
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                className='text-xl font-bold text-white bg-orange-600 rounded-xl p-3 hover:translate-y-2 hover:bg-orange-500 transition-transform duration-200 my-2'
                                aria-label={`Navigate to ${item.label}`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <LanguageSelector />
                    </div>
                </div>
                <div className=" flex-col hidden md:block items-center md:flex-row md:items-center ">
                        {signItems.map((item) => (
                            <button
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                className='text-xl text-white font-bold bg-orange-600 rounded-xl p-3 hover:translate-y-2 hover:bg-orange-500 transition-transform duration-200 my-2'
                                aria-label={`Navigate to ${item.label}`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <LanguageSelector />
                    </div>
            </nav>
        </>
    );
}

export default Navbar;

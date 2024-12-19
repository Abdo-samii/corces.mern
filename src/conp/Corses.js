import React from 'react';
import Imgscroll from './Imgscroll';
import { Route, Routes } from 'react-router-dom';
import Courses from './Courses';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; 



function Corses() {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const learnItems = [
        { label: language === 'en' ? 'Learn More' : 'تعرف علي المزيد', path: '/courses' },
    ];
    function CoursesPage() {
        return <Courses />;
    }

    return (
        <div className='p-16'>
            <div className='flex flex-col md:flex-row items-start rounded-b-full'>
                <div className='flex-1'>
                    <h1 className='text-6xl text-black font-bold mt-16'>
                        {language === 'en' ? 'Courses' : 'الدورات'}
                    </h1>
                    <p className='text-black font-semibold p-4'>
                        {language === 'en'
                            ? 'We are pleased to offer many courses that develop and raise the level of your thinking with a selection of the best specialists in their field.'
                            : 'يسعدنا أن نقدم العديد من الدورات التي تطور وترفع مستوى تفكيرك مع اختيار أفضل المتخصصين في مجالاتهم.'}
                    </p>
                    {learnItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className='text-xl text-white bg-orange-600 rounded-xl p-4 hover:translate-y-2 hover:bg-orange-500 transition-transform duration-200 md:my-0 my-2'
                            aria-label={`Navigate to ${item.label}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div className='flex-1 mt-8 md:mt-0'>
                    <Imgscroll />
                </div>
            </div>
            <Routes>
                <Route path='/courses' element={<CoursesPage />} />
            </Routes>
        </div>
    );
}

export default Corses;

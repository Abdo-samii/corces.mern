import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { language } = useLanguage();
    const navigate = useNavigate();

    const texts = {
        en: {
            title: "Change Password",
            emailLabel: "Enter your email:",
            passwordLabel: "Enter your new password:",
            confirmPasswordLabel: "Confirm your new password:",
            changeButton: "Change Password",
            successMessage: "Password has been changed successfully!",
        },
        ar: {
            title: "تغيير كلمة المرور",
            emailLabel: "أدخل بريدك الإلكتروني:",
            passwordLabel: "أدخل كلمة المرور الجديدة:",
            confirmPasswordLabel: "أكد كلمة المرور الجديدة:",
            changeButton: "تغيير كلمة المرور",
            successMessage: "تم تغيير كلمة المرور بنجاح!",
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setErrorMessage('كلمات المرور غير متطابقة');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, newPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(texts[language].successMessage);
                navigate('/signUp'); // توجيه المستخدم لصفحة تسجيل الدخول
            } else {
                setErrorMessage(data.message); // عرض رسالة الخطأ من الخادم
            }
        } catch (error) {
            setErrorMessage('خطأ أثناء تغيير كلمة المرور');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-300">
            <div className="bg-black text-white p-16 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-6 text-orange-500">{texts[language].title}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">{texts[language].emailLabel}</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">{texts[language].passwordLabel}</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">{texts[language].confirmPasswordLabel}</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded"
                    >
                        {texts[language].changeButton}
                    </button>
                </form>
                {message && <p className="mt-4 text-green-400">{message}</p>}
                {errorMessage && <p className="mt-4 text-red-400">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default ChangePassword;

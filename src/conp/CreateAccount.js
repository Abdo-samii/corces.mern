import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const { language } = useLanguage();
    
    const texts = {
        en: {
            title: "Create New Account",
            email: "Email Address:",
            password: "Password:",
            confirmPassword: "Confirm Password:",
            button: "Create Account",
            passwordMismatch: "Passwords do not match!",
            successMessage: (email) => `Account created successfully! A verification link has been sent to ${email}`,
            errorMessage: "An error occurred while creating your account. Please try again."
        },
        ar: {
            title: "إنشاء حساب جديد",
            email: "عنوان البريد الإلكتروني:",
            password: "كلمة المرور:",
            confirmPassword: "تأكيد كلمة المرور:",
            button: "إنشاء حساب",
            passwordMismatch: "كلمات المرور غير متطابقة!",
            successMessage: (email) => `تم إنشاء الحساب بنجاح! تم إرسال رابط التحقق إلى ${email}`,
            errorMessage: "حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى."
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage(texts[language].passwordMismatch);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(texts[language].successMessage(email));
            } else {
                setMessage(data.message || texts[language].errorMessage);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage(texts[language].errorMessage);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="bg-black text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-6 text-orange-500">{texts[language].title}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">{texts[language].email}</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="password">{texts[language].password}</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="confirm-password">{texts[language].confirmPassword}</label>
                        <input
                            type="password"
                            id="confirm-password"
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
                        {texts[language].button}
                    </button>
                </form>
                {message && <p className="mt-4 text-green-400">{message}</p>}
            </div>
        </div>
    );
};

export default CreateAccount;

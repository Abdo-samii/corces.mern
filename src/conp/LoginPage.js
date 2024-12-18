import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { GoogleLogin } from '@react-oauth/google'; // تأكد من أنك تستخدم المكتبة الحديثة

const texts = {
  en: {
    title: 'Login',
    emailLabel: 'Email',
    placeholderEmail: 'Enter your email',
    passwordLabel: 'Password',
    placeholderPassword: 'Enter your password',
    forgotPassword: 'Forgot Password?',
    createAccount: 'Create an Account',
    rightsReserved: 'All rights reserved.',
  },
  ar: {
    title: 'تسجيل الدخول',
    emailLabel: 'البريد الإلكتروني',
    placeholderEmail: 'أدخل بريدك الإلكتروني',
    passwordLabel: 'كلمة المرور',
    placeholderPassword: 'أدخل كلمة المرور',
    forgotPassword: 'هل نسيت كلمة المرور؟',
    createAccount: 'إنشاء حساب',
    rightsReserved: 'جميع الحقوق محفوظة.',
  },
};

const responseGoogle = async (response) => {
  console.log(response);
  // معالجة بيانات المستخدم بعد تسجيل الدخول
  if (response.credential) {
    try {
      const res = await fetch('http://localhost:5000/auth/google/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: response.credential }),
      });
      const data = await res.json();
      // يمكن تخزين التوكن أو بيانات المستخدم في الجلسة هنا
      console.log(data);
    } catch (error) {
      console.error('Google login error:', error);
    }
  }
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Incorrect username or password');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/'); // إعادة التوجيه إلى الصفحة الرئيسية
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="flex flex-col h-screen bg-black items-center justify-center">
      <div className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-black text-center mb-6">{texts[language].title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="email">
              {texts[language].emailLabel}
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              placeholder={texts[language].placeholderEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="password">
              {texts[language].passwordLabel}
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              placeholder={texts[language].placeholderPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full py-2 mb-4 text-white bg-orange-600 hover:bg-orange-500 rounded transition duration-200"
          >
            {texts[language].title}
          </button>
        </form>
        {/* Google Login Button */}
        <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => console.log('Login Failed')}
        />
        <div className="flex justify-between mt-4">
          <button onClick={handleForgotPassword} className="text-orange-600 hover:underline">
            {texts[language].forgotPassword}
          </button>
          <button onClick={handleCreateAccount} className="text-orange-600 hover:underline">
            {texts[language].createAccount}
          </button>
        </div>
      </div>
      <div className="text-center text-white">
        <p>{texts[language].rightsReserved}</p>
      </div>
    </div>
  );
};

export default LoginPage;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './conp/Navbar';
import { Bode } from './conp/Bode';
import Footer from './conp/Footer';
import Courses from './conp/Courses';
import Abbout from './conp/Abbout';
import LoginPage from './conp/LoginPage';
import CourseDetail from './conp/CourseDetail';
import Lesson1 from './conp/Lesson1';
import Lesson2 from './conp/Lesson2';
import Subscription from './conp/Subscription';
import ForgotPassword from './conp/ForgotPassword';
import CreateAccount from './conp/CreateAccount';
import { LanguageProvider, useLanguage } from './conp/LanguageContext';
import { GoogleOAuthProvider } from '@react-oauth/google'; // استيراد GoogleOAuthProvider

function Home() {
  return <Bode />;
}

function SignUp() {
  return <LoginPage />;
}

function Lessono() {
  return <Lesson1 />;
}

function Lessont() {
  return <Lesson2 />;
}

function Subscriptionn() {
  return <Subscription />;
}

function About() {
  return <Abbout />;
}

function Services() {
  return <Courses />;
}

function Contact() {
  return <Footer />;
}

function App() {
  return (
    <LanguageProvider>
      <GoogleOAuthProvider clientId="370204437466-d0s64hp7g0pt692mqpusdpioj28u2l0c.apps.googleusercontent.com"> {/* غلاف مكونات Google OAuth */}
        <Router>
          <div className="h-screen">
            <Navbar />
            <MainContent />
          </div>
        </Router>
      </GoogleOAuthProvider>
    </LanguageProvider>
  );
}

function MainContent() {
  const { fontFamily } = useLanguage(); // استخدام useLanguage هنا

  return (
    <div className={`md:mt-20 ${fontFamily === 'cairo' ? 'font-cairo' : 'font-roboto'}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/lesson1" element={<Lessono />} />
        <Route path="/lesson2" element={<Lessont />} />
        <Route path="/subscription" element={<Subscriptionn language="en" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;

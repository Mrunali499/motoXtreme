import './global.css';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import LandingPage from './pages/loginflow/LandingPage';
import LoginSignup from './pages/loginflow/LoginSignup';
import Login from './pages/loginflow/Login';
import Verification from './pages/loginflow/Verification';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'landing' | 'loginSignup' | 'login' | 'verification'>('landing');

  return (
    <>
      {currentScreen === 'landing' && (
        <LandingPage onGetStarted={() => setCurrentScreen('loginSignup')} />
      )}
      {currentScreen === 'loginSignup' && (
        <LoginSignup onLogin={() => setCurrentScreen('login')} />
      )}
      {currentScreen === 'login' && <Login onSendOTP={() => setCurrentScreen('verification')} />}
      {currentScreen === 'verification' && <Verification />}
      <StatusBar style="auto" />
    </>
  );
}

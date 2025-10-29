import './global.css';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import LandingPage from './src/pages/loginflow/LandingPage';
import LoginSignup from './src/pages/loginflow/LoginSignup';
import Login from './src/pages/loginflow/Login';
import Verification from './src/pages/loginflow/Verification';

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

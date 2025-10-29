import './global.css';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import LandingPage from './pages/loginflow/LandingPage';
import LoginSignup from './pages/loginflow/LoginSignup';
import Login from './pages/loginflow/Login';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'landing' | 'loginSignup' | 'login'>('landing');

  return (
    <>
      {currentScreen === 'landing' && (
        <LandingPage onGetStarted={() => setCurrentScreen('loginSignup')} />
      )}
      {currentScreen === 'loginSignup' && (
        <LoginSignup onLogin={() => setCurrentScreen('login')} />
      )}
      {currentScreen === 'login' && <Login />}
      <StatusBar style="auto" />
    </>
  );
}

import './global.css';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import LandingPage from './pages/loginflow/LandingPage';
import LoginSignup from './pages/loginflow/LoginSignup';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'landing' | 'loginSignup'>('landing');

  return (
    <>
      {currentScreen === 'landing' && (
        <LandingPage onGetStarted={() => setCurrentScreen('loginSignup')} />
      )}
      {currentScreen === 'loginSignup' && <LoginSignup />}
      <StatusBar style="auto" />
    </>
  );
}

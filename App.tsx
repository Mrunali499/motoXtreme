import './global.css';
import React, { useState, useEffect } from 'react';
import { StatusBar, BackHandler, View } from 'react-native';
import LandingPage from './src/pages/loginflow/LandingPage';
import LoginSignup from './src/pages/loginflow/LoginSignup';
import Login from './src/pages/loginflow/Login';
import Verification from './src/pages/loginflow/Verification';
import Home from './src/pages/Home';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'landing' | 'loginSignup' | 'login' | 'verification' | 'home'>('home');

  useEffect(() => {
    const backAction = () => {
      if (currentScreen === 'home') {
        setCurrentScreen('verification');
        return true; // Prevent app from closing
      } else if (currentScreen === 'verification') {
        setCurrentScreen('login');
      } else if (currentScreen === 'login') {
        setCurrentScreen('loginSignup');
      } else if (currentScreen === 'loginSignup') {
        setCurrentScreen('landing');
      } else if (currentScreen === 'landing') {
        return false; // Allow app to exit when on landing screen
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [currentScreen]);

  return (
    <View className="flex-1">
      {currentScreen === 'landing' && (
        <LandingPage onGetStarted={() => setCurrentScreen('loginSignup')} />
      )}
      {currentScreen === 'loginSignup' && (
        <LoginSignup onLogin={() => setCurrentScreen('login')} />
      )}
      {currentScreen === 'login' && <Login onSendOTP={() => setCurrentScreen('verification')} />}
      {currentScreen === 'verification' && <Verification onVerifySuccess={() => setCurrentScreen('home')} />}
      {currentScreen === 'home' && <Home />}
      <StatusBar barStyle="light-content" />
    </View>
  );
}

import './global.css';
import { StatusBar } from 'expo-status-bar';
import LandingPage from './pages/loginflow/LandingPage';

export default function App() {
  return (
    <>
      <LandingPage />
      <StatusBar style="auto" />
    </>
  );
}

import { useEffect, useState } from "react";
import Loader from './components/LoaderPage/LoaderPage'
import Home from './pages/Home'
import BackgroundMusic from './components/BackgroundAudio/BackgroundAudio'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    // Simula carga (ej: esperar assets o API)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2s de carga, ajusta según quieras

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BackgroundMusic />
      <Loader isVisible={loading} />
      <Home />
    </>
  )
}

export default App

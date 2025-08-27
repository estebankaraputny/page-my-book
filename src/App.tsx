import { useEffect, useState } from "react";
import Loader from "./components/LoaderPage/LoaderPage";
import Home from "./pages/Home";
import BackgroundMusic from "./components/BackgroundAudio/BackgroundAudio";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false); // FINALIZÓ
    };

    if (document.readyState === "complete") {
      // CARGADA
      setLoading(false);
    } else {
      // NO CARGADA
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  return (
    <>
      <meta name="description" content="Preventa del libro Incendiarse sin consumirse." />
      <meta property="og:title" content="Incendiarse sin consumirse" />
      <meta property="og:description" content="Descargá tu preventa ahora." />
      <meta property="og:author" content="Esteban Karaputny" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta name="keywords" content="libro, preventa, Incendiarse sin consumirse, Esteban Karaputny, lectura, historia real" />
      <meta name="robots" content="index, follow" />
      <meta name="index" content="index" />
      <BackgroundMusic />
      <Loader isVisible={loading} />
      <Home />
    </>
  );
}

export default App;

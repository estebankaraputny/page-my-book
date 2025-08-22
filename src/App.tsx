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
      <BackgroundMusic />
      <Loader isVisible={loading} />
      <Home />
    </>
  );
}

export default App;

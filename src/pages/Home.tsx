import { useState, useEffect } from 'react';
import Header from "../components/Header/Header";
import SectionCompra from "../components/Compra/Compra";
import Phrase from '../components/Phrases/Phrase';
import SobreAutor from '../components/SobreAutor/SobreAutor';
import SobreLibro from '../components/SobreLibro/SobreLibro';



const Home = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [phrases, setPhrases] = useState<any[]>([]);

    // Cargar frases al iniciar
    useEffect(() => {
        setLoading(true);
        fetch('/phrase.json')
            .then(res => res.json())
            .then(data => {
                setPhrases(data);
                setLoading(false);
            });
    }, []);

    const handleNextPhrase = () => {
        setLoading(true);
        // Simula consulta, pero aquí solo cambia el índice
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            setLoading(false);
        }, 200); // Simula el tiempo de consulta
    };


    const currentPhrase = phrases[currentIndex];


  return (
    <>
      <Header />
      <main>
        <SectionCompra />
        <Phrase
          phrase={currentPhrase?.text}
          onNextPhrase={handleNextPhrase}
          loading={loading}
        />
        <SobreAutor />
        <SobreLibro />
      </main>
    </>
  );
}

export default Home;






 


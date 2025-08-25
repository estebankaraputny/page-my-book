"use client";
import { useState, useEffect } from 'react';
import Header from "../components/Header/Header";
import SectionCompra from "../components/Compra/Compra";
import Phrase from '../components/Phrases/Phrase';
import SobreAutor from '../components/SobreAutor/SobreAutor';
import SobreLibro from '../components/SobreLibro/SobreLibro';
import TablaPrecios from '../components/TablaPrecios/TablaPrecios';
import CompraEnvioSeguro from '../components/CompraEnvioSeguro/CompraEnvioSeguro';
import FormCompra from '../components/FormCompra/FormCompra';
import Footer from '../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';



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

    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
      });
    }, []);

  return (
    <>
      <section id='inicio'>
        <Header />
      </section>
      <main className='main'>
          <SectionCompra/>
          <Phrase
            phrase={currentPhrase?.text}
            onNextPhrase={handleNextPhrase}
            loading={loading}
          />
        <div className='container-main'>
          <SobreAutor />
          <section id='sobreLibro'>
            <SobreLibro />
          </section>
          <TablaPrecios />
          <CompraEnvioSeguro/>
          <section id='contacto'>
            <FormCompra />
          </section>
        </div>
      </main>
      <Footer />
    </>  
  );
  
}

export default Home;








 


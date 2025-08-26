import { useEffect, useRef } from "react";
import AudioFondo from "../../assets/fuego-fondo.mp3";

function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.1; 
        audioRef.current.play().catch(() => {});
      }
    };

    // Intento reproducir apenas carga la página
    playMusic();

    // Si el navegador bloquea, se activa en el primer click
    document.addEventListener("click", playMusic, { once: true });

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={AudioFondo}
      loop
      preload="auto"
    />
  );
}

export default BackgroundMusic;

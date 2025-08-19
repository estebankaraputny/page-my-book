import LibroF from '../assets/libro-fisico.png';
import LibroK from '../assets/libro-kindle.png';
import LibroM from '../assets/libro-mobile.png';
import VideoFondo from '../assets/video-fondo.mp4';

const Header = () => {
  return (

    <div className="relative w-screen h-screen overflow-hidden">
  
        <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
            <source src={VideoFondo} type="video/mp4" />
            Tu navegador no soporta videos en HTML5.
        </video>


        <header className="p-4 w-screen h-screen relative z-10 text-white">
        <nav className="mt-2">
            <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/about" className="hover:underline">Saber más</a></li>
            <li><a href="/contact" className="hover:underline">Comprar</a></li>
            </ul>
        </nav>
        <div>
            <div>
                <h1 className="text-2xl font-bold">INCENDIARSE</h1>
                <h2>SIN CONSUMIRSE</h2>
                <p>
                    Descubri una nueva forma de ver el mundo a través de mi historia.
                </p>
                <div>
                    <a href="">Comprar</a>
                    <a href="">Saber más</a>
                </div>
            </div>
            <div>
                <img src={LibroF} alt="Book Cover" className="w-32 h-48 object-cover mt-4" />
                <img src={LibroK} alt="" className="w-32 h-48 object-cover mt-4"/>
                <img src={LibroM} alt="" className="w-32 h-48 object-cover mt-4"/>
            </div>
        </div>
        </header>
    </div>
  );
}

export default Header;
import LibroF from '../../assets/libro-fisico.png';
import LibroK from '../../assets/libro-kindle.png';
import LibroM from '../../assets/libro-mobile.png';
import VideoFondo from '../../assets/video-fondo.mp4';
import "./Header.css";

const Header = () => {
  return (

    <div className="contenedor-header">
  
        <video autoPlay muted loop className="video-fondo">
            <source src={VideoFondo} type="video/mp4" />
            Tu navegador no soporta videos en HTML5.
        </video>


        <header className="header-container">
        <nav className="navbar">
            <ul className="nav-list">
            <li><a href="/" className="nav-button">Inicio</a></li>
            <li><a href="/about" className="nav-button">Saber más</a></li>
            <li><a href="/contact" className="nav-button">Comprar</a></li>
            </ul>
        </nav>
        <div className='portada-container'>
            <div className='portada-texto'>
                <h1 className="portada-titulo">INCENDIARSE</h1>
                <h2 className='portada-titulo2'>SIN CONSUMIRSE</h2>
                <p className='portada-descripcion'>
                    Descubri una nueva forma de ver el mundo a través de mi historia.
                </p>
                <div className='portada-botones'>
                    <a href="" className='portada-boton compra'>Comprar</a>
                    <a href="" className='portada-boton saber-mas'>Saber más</a>
                </div>
            </div>
            <div className="portada-imagenes">
                <img src={LibroF} alt="Book Cover" className="img-book" />
                <img src={LibroK} alt="" className="img-kindle"/>
                <img src={LibroM} alt="" className="img-cell"/>
            </div>
        </div>
        </header>
    </div>
  );
}

export default Header;
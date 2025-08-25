import LibroF from "../../assets/libro-fisico.png";
import LibroK from "../../assets/libro-kindle.png";
import LibroM from "../../assets/libro-mobile.png";
import VideoFondo from "../../assets/video-fondo.mp4";
import { Link } from "react-scroll";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="contenedor-header" >
      <header className="header-container">
        <video autoPlay muted loop className="video-fondo">
          <source src={VideoFondo} type="video/mp4" />
          Tu navegador no soporta videos en HTML5.
        </video>
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link
                to="inicio"
                smooth={true}
                duration={500}
                className="nav-button"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="sobreLibro"
                smooth={true}
                duration={500}
                className="nav-button"
              >
                Saber más
              </Link>
            </li>
            <li>
              <Link
                to="contacto"
                smooth={true}
                duration={500}
                className="nav-button"
              >
                Comprar
              </Link>
            </li>
          </ul>
        </nav>
        <div className="portada-container" data-aos="zoom-in">
          <div className="portada-texto">
            <h1 className="portada-titulo">INCENDIARSE</h1>
            <h2 className="portada-titulo2">SIN CONSUMIRSE</h2>
            <p className="portada-descripcion">
              Descubri una nueva forma de ver el mundo a través de mi historia.
            </p>
            <div className="portada-botones">
              <Link
                to="comprar"
                smooth={true}
                duration={500}
                className="portada-boton compra"
              >
                Comprar
              </Link>
              <a href="" className="portada-boton saber-mas">
                Saber más
              </a>
            </div>
          </div>
          <div className="portada-imagenes">
            <img src={LibroF} alt="Book Cover" className="img-book" />
            <img src={LibroK} alt="" className="img-kindle" />
            <img src={LibroM} alt="" className="img-cell" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

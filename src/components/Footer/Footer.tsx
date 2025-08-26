import { FaRegHeart } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    return(
        <footer className="footer" data-aos="zoom-in">
            <div className="footer-contact">
                <h3>
                    Contacto
                </h3>
                <div className="footer-contact_contact">
                    <p>Correo: <span> coachontologicoesteban@gmail.com</span></p>
                    <p>Teléfono: +54 9 11 2838 0119</p>
                </div>
                <div className="footer-contact_redes">
                    <h3>Siguenos en Redes</h3>
                    <ul>
                        <li>
                            <a href=""><AiFillInstagram/> Instagram</a>
                        </li>
                        <li>
                            <a href=""> <AiFillTikTok/> Tiktok</a>
                        </li>
                        <li>
                            <a href=""><FaYoutube/> Youtube</a>
                        </li>
                        <li>
                            <a href=""><FaFacebook/> Facebook</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copy">
                <h3>
                    Novedades y Terminos Legales
                </h3>
                <div className="footer-copy_copy">
                    <p><FaRegCopyright /> 2025 Esteban Karaputny. Todos los derechos reservados</p>
                    <p>
                        Libro registrado en  Dirección Nacional del Derecho de Autor (DNDA)
                    </p>
                </div>
                <p>Página hecha con <FaRegHeart /> por Esteban Karaputny</p>
            </div>
        </footer>
    )
}

export default Footer;
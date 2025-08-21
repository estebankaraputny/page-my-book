import FotoAutor from "../../assets/autor-foto.png";
import "./SobreAutor.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";


const SobreAutor = () => {
  return (
    <section className="sobre-autor">
      <h2>Sobre el Autor</h2>
      <div className="contenido-autor">
        <div className="foto-autor">
          <img src={FotoAutor} alt="" />
        </div>
        <div className="info-autor">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="title-redes">Redes del autor</p>
          <ul className="redes-autor">
            <li>
                <a href="https://www.instagram.com/coach_estebank" target="_blank"><AiFillInstagram /> Instagram</a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@coach_estebank?is_from_webapp=1&sender_device=pc" target="_blank"><AiFillTikTok /> TikTok</a>
            </li>
            <li>
                <a href="https://www.youtube.com/@CoachEstebanK" target="_blanki"><FaYoutube /> Youtube</a>
            </li>
            <li>
                <a href="https://www.facebook.com/motivatecreoenti/" target="_blank"><FaFacebook /> Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default SobreAutor;

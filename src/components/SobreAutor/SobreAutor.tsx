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
            Esteban Karaputny se esta formando como coach ontológico y creador de contenido de
            desarrollo personal. Su historia, narrada a través de Gocchy Katny,
            atraviesa la oscuridad con un mensaje de luz. Vive para sanar… y
            para encender. Este libro no busca aplausos ni respuestas. Es el
            grito silencioso de una vida que se reconstruyó desde el barro. Una
            historia cruda, íntima y humana sobre el hambre, el perdón, la fe y
            el amor propio. Si alguna vez pensaste en rendirte… este libro es
            para vos.
          </p>
          <p className="title-redes">Redes del autor</p>
          <ul className="redes-autor">
            <li>
              <a
                href="https://www.instagram.com/coach_estebank"
                target="_blank"
              >
                <AiFillInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@coach_estebank?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <AiFillTikTok /> TikTok
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@CoachEstebanK" target="_blanki">
                <FaYoutube /> Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/motivatecreoenti/"
                target="_blank"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default SobreAutor;

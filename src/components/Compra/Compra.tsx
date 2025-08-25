import { useState } from "react";
import ModalTransferencia from "../ModalInfo/ModalInfo";
import BookPortada from "../../assets/portada-libro.jpg";
import "./Compra.css";

const SectionCompra = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="section-compra" id="comprar" data-aos="zoom-in-right">
      <div className="container-compra">
        <div className="container-compra__title">
          <h2>PREVENTA</h2>
          <p>
            Descubre <span>Incendiarse sin consumirse</span>, una autobiografía
            de superación.
          </p>
        </div>
        <div className="container-compra__content">
          <div className="container-compra__content__img">
            <img src={BookPortada} alt="" />
          </div>
          <div className="container-compra__content__info">
            <div className="container-compra__content__info__text">
              <p className="first-paragraph">
                Este gran libro te invita a explorar la resiliencia del espíritu
                humano. En este libro, se comparte un viaje de superación
                personal, revelando cómo encontrar la fuerza para transformarse
                a través de desafíos grandes. Prepárate para una lectura
                inspiradora que demuestra que, incluso en las situaciones más
                difíciles, es posible incendiarse con pasión sin perder tu esencia.
              </p>
              <p className="second-paragraph">
                Autor del libro: <span>Esteban Karaputny</span>
              </p>
              <h3>Precios Disponibles</h3>
              <p className="price-f">
                <span>Edición Física:</span> $9999 ARS
              </p>
              <p className="price-d">
                <span>Edición Digital (Ebook):</span> 7,99 U$D
              </p>
            </div>
            <div className="container-compra__content__info__buttons">
                <button onClick={() => setIsModalOpen(true)} className="button-c"> 
                   Comprar Edición Fisica
                </button>

                <ModalTransferencia
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              <a href="" className="button-d">
                Comprar Ebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCompra;




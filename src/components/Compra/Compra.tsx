import { useState } from "react"; 
import ModalTransferencia from "../ModalInfo/ModalInfo"; 
import BookPortada from "../../assets/portada-libro.jpg";
import "./Compra.css";

type ModalData = { open: boolean; link?: string, tipo?: "Físico" | "Digital"; }; 

export default function SectionCompra(){
  const [modal, setModal] = useState<ModalData>({ open: false }); 

  const abrirModal = (tipo: "Físico" | "Digital", link: string) => 
    setModal({ open: true, link, tipo });

  const cerrarModal = () => setModal({ open: false }); 

  return (
    <section
      className="section-compra"
      id="comprar"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="container-compra">
        <div className="container-compra__title">
          <h2>COMPRAR LIBRO</h2>
          <p>
            Descubre <span>Incendiarse sin consumirse</span>, una autobiografía
            de superación.
          </p>
        </div>
        <div className="container-compra__content">
          <div className="container-compra__content__img">
            <img src={BookPortada} alt="Portada del libro" />
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
                <span>Edición Física:</span> $14999 ARS
              </p>
              <p className="price-d">
                <span>Edición Digital (Ebook):</span> $9999 ARS
              </p>
            </div>
            <div className="container-compra__content__info__buttons">
              <button
                onClick={() => abrirModal("Físico", "https://mpago.la/1C6UJvZ")}
                className="button-c"
              >
                Comprar Edición Física
              </button>

              <button
                onClick={() => abrirModal("Digital", "https://mpago.la/2aAn6nT")}
                className="button-d"
              >
                Comprar Edición Ebook
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 👇 Renderizar el modal solo cuando esté abierto */}
      {modal.open && (
        <ModalTransferencia
          isOpen={modal.open}
            tipo={modal.tipo!}
            link={modal.link}
            onClose={cerrarModal}
          />
        )} 

    </section>
  );
};

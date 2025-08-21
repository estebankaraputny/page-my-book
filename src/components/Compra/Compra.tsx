import BookPortada from "../../assets/portada-libro.jpg";
import "./Compra.css";

const SectionCompra = () => {
  return (
    <section className="section-compra">
      <div className="container-compra">
        <div className="container-compra__title">
          <h2>PREVENTA</h2>
          <p>
            Descubre <span>Incendiarse sin consumirse</span>, una autobiografía de superación.
          </p>
        </div>
        <div className="container-compra__content">
          <div className="container-compra__content__img">
            <img src={BookPortada} alt="" />
          </div>
          <div className="container-compra__content__info">
            <div className="container-compra__content__info__text">
              <p className="first-paragraph">
                No es solo una historia, es una experiencia que te
                transportará. Este gran libro te
                invita a explorar la resiliencia del espíritu humano. En este libro,
                se comparte un viaje de superación personal, revelando cómo
                encontrar la fuerza para transformarse a través de desafíos grandes. 
                Prepárate para una lectura inspiradora que demuestra que,
                incluso en las situaciones más difíciles, es posible arder con
                pasión sin perder tu esencia.
              </p>
              <p className="second-paragraph">
                Autor del libro: <span>Esteban Karaputny</span>
              </p>
              <h3>Precios Disponibles</h3>
              <p className="price-f">
                <span>Edición Física:</span> $9999 ARS
              </p>
              <p className="price-d">
                <span>Edición Digital (Ebook):</span> 8,00 U$D
              </p>
            </div>
            <div className="container-compra__content__info__buttons">
              <a href="" className="button-c">Comprar Edición Fisica</a>
              <a href="" className="button-d">Comprar Ebook</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCompra;

import "./SobreLibro.css";
import SobreCard from "./SobreCard";

const SobreLibro = () => {
  return (
    <section className="sobre-libro" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
      <h2>
        ¿Por qué elegir <span>este libro</span>?
      </h2>
      <div className="sobre-cards">
        <SobreCard
          title="Una Trama de Una Historia Real"
          info="Olvídate de las historias predecibles. Incendiarse sin consumirse te sumerge en una narrativa compleja y poética, donde cada página te acerca más a una nueva forma de ver el mundo. Una lectura que te atrapará desde la primera línea."
        />
        <SobreCard
          title="Un Libro que Dejará Huella"
          info="Conoce a Gocchy, un guerrero en busca de redención. Este libro busca dejar una huella imborrable, lleno de sacrificios y crecimiento, que te inspirará y te hará empatizar como nunca antes."
        />
        <SobreCard
          title="Garantía de Satisfacción"
          info="Estamos tan seguros de que amarás Incendiarse sin consumirse que ofrecemos una garantía de satisfacción. Si por alguna razón no cumple tus expectativas, contáctanos en los primeros 7 días y te reembolsaremos tu compra. Tu experiencia de lectura es nuestra prioridad."
        />
      </div>
      <div className="sobre-preguntas">
        <h2>Preguntas Frecuentes</h2>
        <ul>
          <li>
            <span>¿Es adecuado para todas las edades?</span> Recomendado para
            mayores de 12 años debido a temas maduros.
          </li>
          <li>
            <span>¿Necesito haber leído algo del autor antes?</span> No,{" "}
            <span>Incendiarse sin consumirse</span> es una historia
            independiente, perfecta para nuevos lectores.
          </li>
          <li>
            <span>¿Habrá una secuela?</span> El autor tiene planes para expandir
            el universo, ¡pero este libro es una historia completa en sí misma!
          </li>
          <li>
            <span>¿Cuánto tiempo tomará leerlo?</span> Aproximadamente 4 horas,
            dependiendo de tu ritmo.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SobreLibro;

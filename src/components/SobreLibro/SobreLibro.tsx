import "./SobreLibro.css";
import SobreCard from "./SobreCard";

const SobreLibro = () => {
  return (
    <section className="sobre-libro">
      <h2>¿Por qué elegir <span>este libro</span>?</h2>
      <div className="sobre-cards"> 
        <SobreCard
            title="Título"
            info="El título del libro es 'El Viaje del Héroe'."
        />
        <SobreCard
            title="Autor"
            info="El autor es un reconocido escritor de fantasía."
        />
        <SobreCard
            title="Género"
            info="El libro pertenece al género de fantasía épica."
        />
      </div>
      <div className="sobre-preguntas">
        <h2>Preguntas Frecuentes</h2>
        <ul>
            <li><span>¿Es adecuado para todas las edades?</span> Recomendado para mayores de 12 años debido a temas maduros.</li>
            <li><span>¿Necesito haber leído algo del autor antes?</span> No, <span>Incendiarse sin consumirse</span> es una historia independiente, perfecta para nuevos lectores.</li>
            <li><span>¿Habrá una secuela?</span> El autor tiene planes para expandir el universo, ¡pero este libro es una historia completa en sí misma!</li>
            <li><span>¿Cuánto tiempo tomará leerlo?</span> Aproximadamente 4 horas, dependiendo de tu ritmo.</li>
        </ul>
      </div>
    </section>
  );
}

export default SobreLibro;
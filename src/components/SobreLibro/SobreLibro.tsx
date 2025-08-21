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
    </section>
  );
}

export default SobreLibro;
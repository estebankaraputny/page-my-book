"use client";
import "./Testimonios.css";
import ImgHna from "../../assets/hnacarmen.png";
import ImgLili from "../../assets/liliguita.jpg";
import ImgYesica from "../../assets/yesic.jpg";



interface Testimonio {
  id: number;
  nombre: string;
  profesion: string;
  texto: string;
  foto: string;
}

const testimoniosData: Testimonio[] = [
  {
    id: 1,
    nombre: "Hna. M. del Carmen",
    profesion: "Directora de Centro La Nazarena",
    texto: "Un libro muy profundo, real y inspirador para otros.",
    foto: `${ImgHna}`,
  },
  {
    id: 2,
    nombre: "Lili Guita",
    profesion: "Escritora - Consagrada MPD",
    texto: "Lo leí, lo oré, lo sentí... lo disfruté. Porque esta muy bien escrito. Vale la pena leerlo!!! Lo recomiendo!",
    foto: `${ImgLili}`,
  },
  {
    id: 3,
    nombre: "Yesica",
    profesion: "Trabajadora Fonoaudiológica",
    texto: "Una lectura que me motivó a tomar acción y transformar mi día a día.",
    foto: `${ImgYesica}`,
  }
];

export default function Testimonios() {

  return (
    <section className="testimonios-section" id="testimonios" data-aos="fade-up">
      <h2>Testimonios</h2>
      <div className="testimonios-grid">
        {testimoniosData.map((t) => (
          <div key={t.id} className="testimonio-card">
            <img src={t.foto} alt={t.nombre} className="testimonio-foto" />
            <h3>{t.nombre}</h3>
            <p className="profesion">{t.profesion}</p>
            <p className="texto">“{t.texto}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}

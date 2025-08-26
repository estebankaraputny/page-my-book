"use client";
import Form from "./Form";
import "./FormCompra.css"

const FormCompra = () => {
  return (
    <>
      <section className="section-form">
        <div className="form-info" data-aos="zoom-in-right">
          <h2>
            Envíanos tu <span>Solicitud de Compra</span>
          </h2>
          <p>
            ¡Gracias por tu compra! Ayúdanos a procesar tu acceso a los
            contenidos extras y a enviarte tus regalos exclusivos rellenando
            este sencillo formulario para confirmar tu compra (Obligatorio para pagos por Mercado pago). Si tienes alguna duda,
            contáctanos a <span>coachontologicoesteban@gmail.com</span>
          </p>
        </div>
        <Form />
      </section>
    </>
  );
};

export default FormCompra;

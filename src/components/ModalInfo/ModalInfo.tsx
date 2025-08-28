"use client";
import { useEffect, useRef } from "react";
// import { createPortal } from "react-dom"; DESCOMENTAR EN PREVENTA
import { CiCircleInfo } from "react-icons/ci";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  tipo: string;
  link?: string;
}

export default function ModalTransferencia({
  isOpen,
  onClose,
  tipo,
  // link, DESCOMENTAR EN PREVENTA
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // return createPortal( DESCOMENTAR EN PREVENTA
  return(
    <div
      className="modal-overlay"
      ref={overlayRef}
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="modal-content" role="dialog" aria-modal="true">
        <h2>Compra Libro {tipo}</h2>
        <p>
          <CiCircleInfo /> La PREVENTA comienza el 10/09 y finaliza el 20/10.
          Durante este periodo el libro tendrá un precio especial de $9999 para el físico y $5999 para el digital. Luego de esta fecha, el precio del libro físico será de $15000 y el digital $11000.
        </p> 
        {/* <p> DESCOMENTAR EN PREVENTA
          <span>Billetera:</span> Mercado Pago
        </p>
        <p>
          <span>Titular:</span> Esteban Damian Karaputny
        </p>
        <p>
          <span>Metodo: </span> Link de pago
        </p>
        <p>
          <CiCircleInfo /> Chequea que los datos sean correctos antes de
          realizar tu pago. Una vez realizado el pago no te olvides de rellenar
          el formulario que aparece más abajo.
        </p>       
        <div>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="button-c">
              Ir al pago
            </a>
          )} */}
          <button onClick={onClose}>OK</button>
        </div>
      </div>
    // </div>,
    // document.body DESCOMENTAR EN PREVENTA
  );
}

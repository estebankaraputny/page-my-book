"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom"; 
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
  link, 
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

  return createPortal(
    <>
      <div
        className="modal-overlay"
        ref={overlayRef}
        onMouseDown={(e) => {
          if (e.target === overlayRef.current) onClose();
        }}
      >
        <div className="modal-content" role="dialog" aria-modal="true">
          <h2>Compra Libro {tipo}</h2>
          <p><span>Billetera:</span> Mercado Pago
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
            )}
            <button onClick={onClose}>OK</button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

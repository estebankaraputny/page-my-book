"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "../ModalInfo/ModalInfo.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  messageForm: string;
}

const ModalForm: React.FC<ModalProps> = ({ isOpen, onClose, messageForm }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Evitar scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Cerrar modal con Escape
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
    <div
      className="modal-overlay"
      ref={overlayRef}
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="modal-content">
        <h2>Formulario de contacto</h2>
        <p>
          {messageForm}
        </p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>,
    document.body
  );
};

export default ModalForm;

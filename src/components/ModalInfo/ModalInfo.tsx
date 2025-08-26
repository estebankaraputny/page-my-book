import {useEffect} from "react";
import { CiCircleInfo } from "react-icons/ci";
import "./ModalInfo.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  link: string;
  tipoLibro: string;
}

const ModalTransferencia: React.FC<ModalProps> = ({ isOpen, onClose, link, tipoLibro }) => {
  // Evitar scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Solo cerrar si el click fue en el overlay, no en el contenido
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>Comprar Libro {tipoLibro}</h2>
        <p><span>Billetera:</span> Mercado Pago</p>
        <p><span>Titular:</span> Esteban Damian Karaputny</p>
        <p><span>Metodo: </span> Link de pago</p>
        <span><CiCircleInfo/> Chequea que los datos sean correctos antes de realizar tu pago. Una vez realizado el pago no te olvides de rellenar el formulario que aparece más abajo.</span>
        <div>
          <a href={link} target="_blank">Ir a pagar</a>
        </div>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default ModalTransferencia;

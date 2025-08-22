import {useEffect} from "react";
import { CiCircleInfo } from "react-icons/ci";
import "./ModalInfo.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalTransferencia: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
        <h2>Datos de Transferencia</h2>
        <p><span>Banco:</span> Banco Galicia</p>
        <p><span>Titular:</span> Esteban Damian Karaputny</p>
        <p><span>CTA:</span> 4062637-6 132-9</p>
        <p><span>CBU:</span> 0070132330004062637698</p>
        <p><span>CUIL:</span> 20424275035</p>
        <p><span>ALIAS:</span> estebankaraputny.gal</p>
        <span><CiCircleInfo/> Chequea que los datos sean correctos antes de realizar tu pago. Una vez realizado el pago no te olvides de rellenar el formulario que aparece más abajo.</span>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default ModalTransferencia;

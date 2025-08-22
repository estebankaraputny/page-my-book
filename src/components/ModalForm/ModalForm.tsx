import {useEffect} from "react";
import { CiCircleInfo } from "react-icons/ci";
import "../ModalInfo/ModalInfo.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  messageForm: string;
}

const ModalForm: React.FC<ModalProps> = ({ isOpen, onClose, messageForm }) => {
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
        <h2>Datos de Form</h2>
        <p>
            {
                messageForm
            }
        </p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default ModalForm;

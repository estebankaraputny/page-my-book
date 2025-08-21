import CardCompraSegura from "./CardSegura";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiMailSendLine } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";

const CompraEnvioSeguro = () => {
  return (
    <section className="section-compra_segura">
      <h2>
        Compra Segura y Envío <span>Garantizado</span>
      </h2>
      <div className="compra-segura_cards">
            <CardCompraSegura 
                title="Transacción Segura"
                description="Utilizamos tecnología de encriptación SSL de última generación para proteger tus datos. Tu información personal y financiera está 100% segura con nosotros."
                icon={<FaMoneyBillTransfer />}
            />
            <CardCompraSegura 
                title="Envío Confiable"
                description="Tu edición física será empaquetada con cuidado y enviada por Correo Argentino (costo cubrido por el cliente). Recibirás un número de seguimiento para monitorear tu pedido hasta que llegue a tu puerta."
                icon={<RiMailSendLine />}
            />
            <CardCompraSegura 
                title="Descarga Inmediata"
                description="Para la edición digital, tu libro estará disponible para descarga instantánea en todos los formatos compatibles, justo después de confirmar tu compra. ¡Empieza a leer en minutos!"
                icon={<FaMoneyBillTransfer />}
            />
      </div>
      <div className="compra-segura_politica">
        <p><CiCircleInfo /> 
        <span> Política de Privacidad: </span>
        
          Valoramos tu privacidad. Tus datos no serán compartidos con terceros.
        </p>
      </div>
    </section>
  );
};

export default CompraEnvioSeguro;

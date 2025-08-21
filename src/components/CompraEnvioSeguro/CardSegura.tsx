import "./CompraEnvioSeguro.css"

const CardCompraSegura = ({title, description, icon}:{title: string; description: string; icon: React.ReactNode}) => {
    return(
        <div className="card-compra-segura">
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default CardCompraSegura;
import "./TablasPrecios.css";

const TablaPrecios = () => {
  return (
    <div className="tabla-precios" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <h2>
        Formatos y Precios <span>Detallados</span>
      </h2>
      <table>
        <thead>
          <tr className="tabla-precios-titulos">
            <th>Formato</th>
            <td>Físico</td>
            <td>Digital</td>
          </tr>
        </thead>
        <tbody>
          <tr className="tabla-entregas">
            <th>Entrega</th>
            <td>Envios, En persona</td>
            <td>Descarga inmediata</td>
          </tr>
          <tr className="tabla-extras">
            <th>Extras Incluidos</th>
            <td>Carta al azar (existen 4 modelos), Dedicatoria, Firma</td>
            <td>No incluye</td>
          </tr>
          <tr className="tabla-ideal">
            <th>Ideal Para</th>
            <td>Coleccionistas, lectores tradicionales, regalo</td>
            <td>Lectores digitales, lectura en movimiento, acceso inmediato</td>
          </tr>
          <tr className="tabla-envio">
            <th>Envio</th>
            <td>El precio no incluye envio</td>
            <td>Descarga directa</td>
          </tr>
          <tr className="tabla-precio">
            <th>Precio</th>
            <td><span>$9.999</span> En preventa. Precio Normal $15.000</td>
            <td><span>$5.999</span> En preventa. Precio Normal $11.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaPrecios;

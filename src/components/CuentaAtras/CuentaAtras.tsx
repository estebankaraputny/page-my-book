import { useState, useEffect } from "react";
import "./CuentaAtras.css";

const FECHA_OBJETIVO = new Date("2025-09-10T00:00:00");

const CuentaAtras = () => {
  const calcularTiempoRestante = () => {
    const ahora = new Date();
    const diferencia = FECHA_OBJETIVO.getTime() - ahora.getTime();

    if (diferencia <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    return { dias, horas, minutos, segundos };
  };

  const [tiempo, setTiempo] = useState(calcularTiempoRestante());

  useEffect(() => {
    const timer = setInterval(() => {
      setTiempo(calcularTiempoRestante());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-cuenta">
      <h2 className="titulo-cuenta">Preventa Disponible En:</h2>
      <div className="tiempo-cuenta">
        <p><span>{tiempo.dias}</span> Dias</p>
        <p><span>{tiempo.horas}</span> Horas</p>
        <p><span>{tiempo.minutos}</span> Minutos</p>
        <p><span>{tiempo.segundos}</span> Segundos</p>
      </div>
    </div>
  );
};

export default CuentaAtras;
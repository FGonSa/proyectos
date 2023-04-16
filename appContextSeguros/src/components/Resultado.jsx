import React, { useCallback, useRef } from "react";
import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES } from "../constants";


function Resultado() {
  //Accedo al Context y obtengo resultado y datos
  const { resultado, datos } = useCotizador();
  const { marca, plan, year } = datos;

  //useCallback -> recibe una función a memorizar y dependencias que produzcan que se vuelva a disparar cuando se modifiquen
  //Sirve para memorizar una función y no tener que volver a procesarla, ahorrando rendimiento
  //Evito que se vuelva a renderizar el apartado Marca en caso de que cambie de marca
  //No actualizamos la Marca hasta que se actualice el resultado en dependencias.
  const [nombreMarca] = useCallback(MARCAS.filter((m) => m.id === Number(marca)), [resultado]);
  const [nombrePlan] = useCallback(PLANES.filter((p) => p.id === Number(plan)), [resultado]);

  //Congelamos el valor de year hasta que se renderice de nuevo.
  const yearRef = useRef(year)

  if (resultado === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Año: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {resultado}€
      </p>
    </div>
  );
}

export default Resultado;

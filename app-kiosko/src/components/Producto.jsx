import React, { useState } from "react";
import Image from "next/image";
import { formatearDinero } from "@/helpers/helpers";
import useKiosko from "@/hooks/useKiosko";

function Producto({ producto }) {
  const { autores, handleSetProducto, handleChangeModal } = useKiosko();

  const { name, image, price, autorId } = producto;

  //Variable para guardar el autor del producto
  let author = "";

  //Array con todos los autores
  const result = autores.map((autor) => autor.autor);

  // 👇️ check if array contains object
  // Buscamos el autorID del producto en el array de autores 
  const isFound = result.some((element) => {
    if (element.id === autorId) {
      author = element.name; //conseguimos el nombre del autor
      producto = {...producto, autor: author}//agregamos el campo Autor
      return true;
    }
    return false;
  });

  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${image}.png`} //${image}
        alt={`Book Image`}
        width={400}
        height={500}
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p>{author}</p>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(price)}
        </p>

        <button 
        onClick={() => {
          handleChangeModal()
          handleSetProducto(producto)
        }}
        type="button" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold rounded-md">Add</button>
      </div>
    </div>
  );
}

export default Producto;

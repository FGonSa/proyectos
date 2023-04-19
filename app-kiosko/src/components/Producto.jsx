import React, { useState } from "react";
import Image from "next/image";
import { formatearDinero } from "@/helpers/helpers";
import useKiosko from "@/hooks/useKiosko";

function Producto({ producto }) {
  const { autores } = useKiosko();

  const { name, image, price, autorId } = producto;

  let author = "";

  //Array con todos los autores
  const result = autores.map((autor) => autor.autor);

  // 👇️ check if array contains object
  const isFound = result.some((element) => {
    if (element.id === autorId) {
      author = element.name;
      return true;
    }
    return false;
  });

  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/book.png`} //${image}
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
      </div>
    </div>
  );
}

export default Producto;

import Image from "next/image";
import React from "react";
import { formatearDinero } from "@/helpers/helpers";
import axios from "axios";
import { toast } from "react-toastify";

function Orden({ orden }) {
  const { id, name, total, pedido } = orden;

  //Función para finalizar un pedido
  const finalizarOrden = async () => {
    try {
       await axios.post(`/api/orders/${id}`)
      toast.success('Order done!')
    } catch (error) {
      toast.error('Something went wrong!')
    }
  }

  return (
    <div className="border p-10 space-y-5">
      <h1 className="text-2xl font-bold">Order: {id}</h1>
      <p className="text-lg font-bold">Customer: {name}</p>

      <div>
        {pedido.map(book => (
          <div key={book.id} className="py-3 flex border-b last-of-type:border-0 items-center">
            <div className="w-32">
          <Image 
          width={400}
          height={500}
          src={`/assets/img/${book.image}.png`}
          alt={"Book Cover"}
          />
            </div>

            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-900">{book.name}</h4>
              <p>{book.autor}</p>
              <p className="text-lg font-bold">Quantity: {book.cantidad}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-800">Total to pay: {formatearDinero(total)} </p>

        <button 
        type= "button"
        onClick={finalizarOrden}
        className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase rounded font-bold">
          Finish Order
        </button>
      </div>
    </div>
  );
}

export default Orden;

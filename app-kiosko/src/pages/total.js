import React, { useCallback, useEffect } from 'react'
import Layout from '@/layout/Layout'
import useKiosko from '@/hooks/useKiosko'
import { formatearDinero } from '@/helpers/helpers'

function Total() {

  const {pedido, nombre, setNombre, colocarOrden, total} = useKiosko()

  //Devuelve un true o un false
  //Comprueba si realmente hay algo dentro del pedido y si hay un nombre escrito
  //De este modo evitamos enviar un pedido vacío o sin nombre
  //Se ejecutará la función únicamente al principio y cuando el pedido cambie.
  const comprobarPedido = useCallback(() => {
    return pedido.length=== 0 || nombre === '' || nombre.length <= 3
  }, [pedido, nombre])


  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])

  return (
    <Layout pagina="Total">
    <h1 className='text-4xl font-black'>Total</h1>
    <p className='text-2xl my-10'>Confirm your order</p>

    <form onSubmit={colocarOrden}>
      <div>
        <label htmlFor="name" className='block uppercase text-slate-800 font-bold text-xl'>Name</label>
        <input onChange={(e) => setNombre(e.target.value)} value={nombre} id="name" type='text' className='bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md'></input>
      </div>

      <div className='mt-10'>
        <p className='text-2xl'>Total to pay: {''} <span className='font-bold'>{formatearDinero(total)}</span></p>
      </div>

      <div className='mt-5'>
        <input 
        disabled={comprobarPedido()}
        type="submit" className={` ${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'}  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`} value="Confirm Purchase" />
      </div>
    </form>
</Layout>
  )
}

export default Total
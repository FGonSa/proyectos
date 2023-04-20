import React from 'react'
import Layout from '@/layout/Layout'
import useKiosko from '@/hooks/useKiosko'
import ResumenProducto from '@/components/ResumenProducto'
function Resumen() {

  const {pedido} = useKiosko()

  return (
    <Layout pagina="Resume">
        <h1 className='text-4xl font-black'>Resume</h1>
        <p className='text-2xl my-10'>Check your order:</p>

        {pedido.length === 0 ? (
          <p className='text-center text-2xl'>No items in your order.</p>
        ): (
          pedido.map(producto => (
            <ResumenProducto
            key={producto.id}
            producto={producto}
            />
          ))
        )}
    </Layout>
  )
}

export default Resumen
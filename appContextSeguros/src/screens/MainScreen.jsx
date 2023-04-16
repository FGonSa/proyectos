import React from 'react'
import Formulario from '../components/Formulario'
import useCotizador from '../hooks/useCotizador'
import Loading from '../components/Loading'
import Resultado from '../components/Resultado'


function MainScreen() {

  const {loading} = useCotizador()

  return (
    <div>
        <header className="my-10">
            <h1 className='text-white text-center text-4xl font-medium font-montse'>
                Cotizador de Seguros Automóvil 
            </h1>
        </header>

        <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>
        <Formulario />
        {loading ? <Loading /> : <Resultado/>}
        </main>
        
    </div>
  )
}

export default MainScreen
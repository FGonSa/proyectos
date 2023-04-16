import React from 'react'
import useCotizador from '../hooks/useCotizador'

function Error() {

    const {error} = useCotizador()

  return (
    <div className='text-red-700 border text-center border-red-400 bg-red-100 py-3'>{error}</div>
  )
}

export default Error
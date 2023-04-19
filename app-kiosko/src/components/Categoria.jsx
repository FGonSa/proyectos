import useKiosko from '@/hooks/useKiosko';
import Image from 'next/image';
import React from 'react'

function Categoria({categoria}) {

    const {name, icon, id} = categoria;

    const {categoriaActual, handleClickCategoria} = useKiosko()

  return (
    //Si la categoría actual coincide con el id recibido, se queda seleccionada
    //El ? es porque al iniciar por primera vez la app puede no haber ID
    <div 
    onClick={() => handleClickCategoria(id)}
    className={`${
      categoriaActual?.id === id ? "bg-amber-300"  : ""}
    flex items-center gap-4 w-full border p-5 hover:bg-amber-300`}>
        <Image 
        src={`/assets/img/icon/${icon}`} width={70} height={70} alt="Icono Categoría" 
        />

        <button 
        onClick={() => handleClickCategoria(id)}
        type='button' className='text-2xl font-bold hover:cursor-pointer'>
            {name}
        </button>
    </div>
  )
}

export default Categoria
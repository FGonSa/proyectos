import Image from 'next/image';
import React from 'react'

function Categoria({categoria}) {

    const {name, icon, id} = categoria;

  return (
    <div className='flex items-center gap-4 w-full border p-5 hover:bg-amber-300'>
        <Image 
        src={`/assets/img/icon/${icon}`} width={70} height={70} alt="Icono Categoría" 
        />

        <button type='button' className='text-2xl font-bold hover:cursor-pointer'>
            {name}
        </button>
    </div>
  )
}

export default Categoria
import Image from 'next/image'
import React from 'react'
import useKiosko from '@/hooks/useKiosko'
import Categoria from './Categoria'

function Sidebar() {

  //Accedemos al context del Kiosko para obtener las categorías
  const {categorias} = useKiosko()

  return (
    <>
    <Image width={200} height={100} src="/assets/img/logoBook.png"  alt="logo" />

    <nav>
      {categorias.map(categoria => (
        <Categoria
        key={categoria.id}
        categoria={categoria}
        />
      ))}
    </nav>
    </>
  )
}

export default Sidebar
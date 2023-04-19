import React from 'react'
import Image from 'next/image'
import { formatearDinero } from '@/helpers/helpers';

function Producto({producto}) {

    const {name, image, price} = producto;

  return (
    <div className='border p-3'>
        <Image 
        src={`/assets/img/${image}`}
        alt={`Book Image`}
        width={400}
        height={500}
        />

        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{name}</h3>
            <p className='mt-5 font-black text-4xl text-amber-500'>
                {formatearDinero(price)}
            </p>
        </div>
    </div>
  )
}

export default Producto
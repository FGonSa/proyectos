import React, { Fragment } from 'react'
import {MARCAS, YEARS, PLANES } from '../constants/index'


function Formulario() {
  return (
    <div>
      <form action="" >
        <div className='my-5'>
          <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase font-montse'>
            Modelo
          </label>
          <select name="marca" id="" className='w-full p-3 bg-white border border-gray-200 rounded-md'>
            <option value="" disabled>
              Seleccione un modelo
            </option>

            {MARCAS.map(marca => (
              <option
                key={marca.id}
                value={marca.id}
              >
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className='my-5'>
          <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase font-montse'>
            Año
          </label>
          <select name="anyo" id="" className='w-full p-3 bg-white border border-gray-200 rounded-md'>
            <option value="" disabled>
              Seleccione un año
            </option>

            {YEARS.map(year => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className='my-5'>
          <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase font-montse'>
            Elige un Plan
          </label>
              <div className='flex gap-3 items-center'>
                {PLANES.map(plan => (
                  <Fragment>
                      <label htmlFor="">
                        {plan.nombre}
                      </label>
                      <input type="radio"
                      name= "plan"
                      value= {plan.id} />
                  </Fragment>
                ))}
              </div>
        </div>

        <input type="submit"
        className=' rounded-sm w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold font-montse' 
        value="Cotizar"/>
      </form>
    </div>
  )
}

export default Formulario
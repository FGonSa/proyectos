import React, { Fragment } from 'react'
import {MARCAS, YEARS, PLANES } from '../constants/index'
import useCotizador from '../hooks/useCotizador'
import Error from '../components/Error'


function Formulario() {

  //Obtenemos los datos desde el Provider
  //Obtenemos la función para actualizar datos desde el Provider
  //Obtenemos la variable error inicialmente vacía/falsa
  //Obtenemos la función para actualizar error
  const {datos, handleChangeDatos, error, setError, cotizarSeguro} = useCotizador()

  //Función para enviar el formulario
  const handleSubmit = e => {
    e.preventDefault()

    //Si los datos incluyen un '', salta error.
    if(Object.values(datos).includes("")){
      setError('Error, todos los campos son obligatorios.')
      return
    }

    //Una vez ha saltado el error, lo reiniciamos.
    setError('')

    //Si no hay error, se cotiza seguro
    cotizarSeguro()
  }


  return (
    <div>

      {/*Si error es TRUE, entonces se renderiza*/}
      {error && <Error />}

      <form action="" >
        <div className='my-5'>
          <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase font-montse'>
            Modelo
          </label>
          <select 
          value={datos.marca}
          name="marca" 
          id="" 
          className='w-full p-3 bg-white border border-gray-200 rounded-md'
          onChange={e => handleChangeDatos(e)}
          >
            <option value="">
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
          <select 
          onChange={e => handleChangeDatos(e)}
          value={datos.year}
          name="year" id="" className='w-full p-3 bg-white border border-gray-200 rounded-md'>
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
                  
                  <Fragment key={plan.id}>
                      <label htmlFor="">
                        {plan.nombre}
                      </label>
                      <input type="radio"
                      onChange={e => handleChangeDatos(e)}
                      name= "plan"
                      value= {plan.id} />
                  </Fragment>
                ))}
              </div>
        </div>

        <input type="submit"
        onClick={handleSubmit}
        className=' rounded-sm w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold font-montse' 
        value="Cotizar"/>
      </form>
    </div>
  )
}

export default Formulario
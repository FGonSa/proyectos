import React from 'react'
import { createContext, useState } from 'react'
import {obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero} from '../helpers/index'

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

  //Objeto inicial vacío
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  //Error
  const [error, setError] = useState(false)

  //Variable con el resultado de la cotización
  const [resultado, setResultado] = useState(0)

  //Función para actualizar el objeto
  const handleChangeDatos = e => {
    setDatos({
      ...datos, //copiamos el objeto previo
      [e.target.name] : e.target.value //actualizamos el objeto
    })
  }

  const cotizarSeguro = () => {
    
    let base = 2000

    const diferencia = obtenerDiferenciaYear(datos.year)

    base -= ((diferencia * 3)) * base / 100

    base *= calcularMarca(datos.marca)

    base *= calcularPlan(datos.plan)

    //Resultado final
    base = base.toFixed(2)

    //Lo convertimos a Moneda
    base = formatearDinero(base)

    console.log(base)

    setResultado(base)

  }

  return(

    //Lo que enviemos por VALUE podra ser consultado por los componentes que estén en el Children
    <CotizadorContext.Provider
      value={{ 
        datos, //enviamos datos vacíos 
        handleChangeDatos, //enviamos la función para actualizar datos
        error, 
        setError,
        cotizarSeguro, //enviamos función para cotizar seguro
        resultado //enviamos resultado de la cotización
      }} 
    >
      {children}
    </CotizadorContext.Provider>
    )
}

export {
  CotizadorProvider
}

export default CotizadorContext
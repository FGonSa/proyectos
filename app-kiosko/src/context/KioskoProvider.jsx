import { createContext, useEffect, useState } from "react";
import axios from "axios";


const KioskoContext = createContext()

const KioskoProvider = ({children}) => {

    //Array vacío
    const [categorias, setCategorias] = useState([])

    //Obtenemos las categorías de la Base de Datos mediante Axios
    //Guardamos las categorías en el array inicial vacío
    const obtenerCategorias = async () => {
        const {data} = await axios('/api/categorias')
        setCategorias(data)
    }

    //
    useEffect(()=>{
        obtenerCategorias()
    }, [])

    return(
        <KioskoContext.Provider
        value={{ categorias }}
        >
            {children}
        </KioskoContext.Provider>
    )
}

export {KioskoProvider}

export default KioskoContext
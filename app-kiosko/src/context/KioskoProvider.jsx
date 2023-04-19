import { createContext, useEffect, useState } from "react";
import axios from "axios";

const KioskoContext = createContext();

const KioskoProvider = ({ children }) => {
  //Array vacío
  const [categorias, setCategorias] = useState([]);

  //Objeto Categoría Actual vacío
  const [categoriaActual, setCategoriaActual] = useState({});

  //Obtenemos las categorías de la Base de Datos mediante Axios
  //Guardamos las categorías en el array inicial vacío
  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  //Obtenemos las categorías al iniciar la APP
  useEffect(() => {
    obtenerCategorias();
  }, []);

  //Al iniciar la APP se marca por defecto la categoría 0
  //Esto se ejecuta al cargar las categorías de las dependencias
  //Las categorías se obtienen al cargar el useEffect anterior
  useEffect(()=>{
    setCategoriaActual(categorias[0])
  },[categorias])

  //Recibe un el id del objeto clickado
  //Filtramos las categorías por el id recibido
  //Al encontrar la categoría con el id recibido, nos devuelve un array con esa categoría
  //Como sólo devuelve 1 posición, la categoría actual pasa a ser esa posición
  const handleClickCategoria = (id) => {
    
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
  };

  return (
    <KioskoContext.Provider
      value={{ categorias, categoriaActual, handleClickCategoria }}
    >
      {children}
    </KioskoContext.Provider>
  );
};

export { KioskoProvider };

export default KioskoContext;

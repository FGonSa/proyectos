import { createContext, useEffect, useState } from "react";
import axios from "axios";

const KioskoContext = createContext();

const KioskoProvider = ({ children }) => {
  //Array vacío
  const [categorias, setCategorias] = useState([]);

  //Objeto Categoría Actual vacío
  const [categoriaActual, setCategoriaActual] = useState({});

  const [autores, setAutores] = useState([]);

  const [producto, setProducto] = useState({});

  const [modal, setModal] = useState(false);

  const [pedido, setPedido] = useState([])

  //Obtenemos las categorías de la Base de Datos mediante Axios
  //Guardamos las categorías en el array inicial vacío
  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  const obtenerAutores = async () => {
    const { data } = await axios("/api/productos");
    setAutores(data);
  };

  //Obtenemos las categorías al iniciar la APP
  useEffect(() => {
    obtenerCategorias();
    obtenerAutores();
  }, []);

  //Al iniciar la APP se marca por defecto la categoría 0
  //Esto se ejecuta al cargar las categorías de las dependencias
  //Las categorías se obtienen al cargar el useEffect anterior
  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  //Recibe un el id del objeto clickado
  //Filtramos las categorías por el id recibido
  //Al encontrar la categoría con el id recibido, nos devuelve un array con esa categoría
  //Como sólo devuelve 1 posición, la categoría actual pasa a ser esa posición
  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
  };

  //Función para setear producto
  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  //Función que recibe un producto con el campo de cantidad añadido
  //A su vez, le eliminamos(Le hacemos deconstrucción) los campos categoryId e Image
  //Seteamos el pedido, añadiéndole el producto actualizado
  const handleAgregarPedido = ({categoryId, image, ...producto}) => {

    //Comprobamos si ya existe el producto en la cesta
    //Actualizamos cesta en caso de que ya exista y se añada más
    if (pedido.some(produ => produ.id === producto.id)){
      //Actualizar la cantidad
      const pedidoActualizado = pedido.map(produ => produ.id === producto.id ? producto : produ)
      setPedido(pedidoActualizado)
    }else{
      setPedido([...pedido, producto])
    }
  }

  return (
    <KioskoContext.Provider
      value={{
        producto,
        categorias,
        categoriaActual,
        handleClickCategoria,
        autores,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido,
      }}
    >
      {children}
    </KioskoContext.Provider>
  );
};

export { KioskoProvider };

export default KioskoContext;

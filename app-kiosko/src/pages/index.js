import Layout from "@/layout/Layout";
import { PrismaClient } from "@prisma/client";
import useKiosko from "@/hooks/useKiosko";
import Producto from "@/components/Producto";

export default function Home() {
  const { categoriaActual } = useKiosko();

  return (
    <Layout pagina={`Menu ${categoriaActual?.name}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.name}</h1>
      <p className="text-2xl my-10">
        Choose your product
      </p>

    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
    {categoriaActual?.products?.map(producto => (
        <Producto 
        key={producto.id}
        producto={producto}
        />
      ))}
    </div>
    </Layout>
  );
}

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient()

//   const categorias = await prisma.category.findMany()

//   return{
//     props: {
//       categorias
//     }
//   }
// }

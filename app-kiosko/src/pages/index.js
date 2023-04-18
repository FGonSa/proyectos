import Layout from "@/layout/Layout"
import { PrismaClient } from "@prisma/client"

export default function Home() {



  return (
   <Layout>
    <h1>Inicio</h1>
   </Layout>
  )
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

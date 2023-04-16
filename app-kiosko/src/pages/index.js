import { PrismaClient } from "@prisma/client"

export default function Home({categorias}) {

console.log(categorias)

  return (
   <div>
    <h1 className="text-red-500">Hola</h1>
   </div>
  )
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient()

  const categorias = await prisma.category.findMany()

  return{
    props: {
      categorias
    }
  }
}

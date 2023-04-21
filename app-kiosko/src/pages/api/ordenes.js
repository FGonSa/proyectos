import { PrismaClient } from "@prisma/client"


//Función para conectarse a la BD y realizar un INSERT con el pedido del cliente
export default async function handler(req, res){
    const prisma = new PrismaClient()

    //Obtener Ordenes
    const ordenes = await prisma.order.findMany({
        where: {
            estado: false
        }
    })
    res.status(200).json(ordenes)

    //Crear Ordenes
    if(req.method === 'POST'){
        const orden = await prisma.order.create({
            data: {
                name: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido,
                date: req.body.fecha,
            }
        })

        res.status(200).json(orden)
    }
}
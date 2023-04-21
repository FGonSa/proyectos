import { PrismaClient } from "@prisma/client"


//Función para conectarse a la BD y realizar un INSERT con el pedido del cliente
export default async function handler(req, res){
    const prisma = new PrismaClient()

    if(req.method === 'POST'){
        const orden = await prisma.order.create({
            data: {
                name: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido,
                date: req.body.fecha,
            }
        })

        console.log(req.body)
        res.json(orden)
    }
}
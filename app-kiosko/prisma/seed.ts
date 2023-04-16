import { categories } from "./data/categories";
import { products } from "./data/products";
import { authors } from "./data/authors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const insertIntoDB = async(): Promise<void> => {
    try {
        await prisma.author.createMany({data: authors})
        await prisma.category.createMany({data: categories})
        await prisma.product.createMany({data: products})
    } catch (error) {
        console.log(error)
    }
}

insertIntoDB()
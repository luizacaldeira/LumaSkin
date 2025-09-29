import { NextResponse } from 'next/server';
import { prisma, defaultSelectFields } from '../../prisma/database/prismaClient';



export async function getProducts(amount?: number) {
    try {
        const products = await prisma.product.findMany({
            take: amount,
            select: defaultSelectFields,
            orderBy: {
                createdAt: 'desc'
            }
        });
        return products;
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return [];
    }
}


export async function getProductById(id: number) {
    try {
        const product = await prisma.product.findUnique({
            where: { id },
            select: defaultSelectFields
        });
        return product;
    } catch (error) {
        console.error('Erro ao buscar produto:', error);
        return null;
    }
}

export async function getProductByName(name: string) {
    try {
        const products = await prisma.product.findMany({
            where: { 
                title: {
                    contains: name,
                    mode: 'insensitive'
                }
            },
            select: defaultSelectFields,
            orderBy: {
                createdAt: 'desc'
            }
        });
        return products;
    } catch (error) {
        console.error('Erro ao buscar produtos por nome:', error);
        return [];
    }
}

export async function getAllProducts() {
    try {
        const products = await prisma.product.findMany({
            select: defaultSelectFields,
            orderBy: {
                createdAt: 'desc'
            }
        });
        return products;
    } catch (error) {
        console.error('Erro ao buscar todos os produtos:', error);
        return [];
    }
}
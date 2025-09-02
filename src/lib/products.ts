import db from './db';

export async function getProducts(amount: number | undefined) {
    try {
        const products = await db.product.findMany({
        take: amount,
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

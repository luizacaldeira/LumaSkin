import db from './db';

export async function getProducts() {
    try {
        const products = await db.product.findMany({
        take: 6,
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

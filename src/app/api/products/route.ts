import { NextRequest } from 'next/server';
import { prisma, defaultSelectFields } from '../../../../prisma/database/prismaClient';

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            select: defaultSelectFields,
            orderBy: { createdAt: 'desc' }
        });
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return Response.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { title, price, description, benefits, imageUrl } = body;

        const requiredFields = { title, price, description,imageUrl };
        const missingFields = Object.entries(requiredFields)
            .filter(([_, value]) => !value)
            .map(([key]) => key);

        if (missingFields.length) {
            return Response.json(
                { error: `Required fields missing: ${missingFields.join(', ')}` },
                { status: 400 }
            );
        }

        const product = await prisma.product.create({
            data: {
                title,
                price: Number(price),
                description,
                benefits,
                imageUrl,
            },
            select: defaultSelectFields
        });

        return Response.json(product, { status: 201 });
    } catch (error) {
        console.error('Error creating product:', error);
        return Response.json(
            { error: 'Failed to create product' },
            { status: 500 }
        );
    }
}
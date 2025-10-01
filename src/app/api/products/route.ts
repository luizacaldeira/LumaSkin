import { NextRequest, NextResponse } from 'next/server';
import { prisma, defaultSelectFields } from '../../../../prisma/database/prismaClient';
import { getProductByName } from '@/lib/products';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q');

        if (!query || query.trim() === '') {
        return NextResponse.json({ products: [] });
        }

        const products = await getProductByName(query);
        return NextResponse.json({ products });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return NextResponse.json(
            { error: 'Erro interno do servidor' },
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
import { NextRequest, NextResponse } from 'next/server';
import { prisma, defaultSelectFields } from '../../../../../prisma/database/prismaClient';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest, context: any) {
    try {
        const { id } = context.params;
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) },
            select: defaultSelectFields
        });

        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json(
            { error: 'Failed to fetch product' },
            { status: 500 }
        );
    }
}

export async function PUT(request: NextRequest, context: any) {
    try {
    const { id } = context.params;
        const body = await request.json();
        const { title, price, description, benefits, imageUrl } = body;

        if (!title || !price) {
            return Response.json(
                { error: 'Title and price are required' },
                { status: 400 }
            );
        }

        const product = await prisma.product.update({
            where: { id: parseInt(id) },
            data: {
                title,
                price: Number(price),
                description,
                benefits,
                imageUrl,
            },
            select: defaultSelectFields
        });

        return NextResponse.json(product);
        
    } catch (error) {
        console.error('Error updating product:', error);
        return NextResponse.json(
            { error: 'Failed to update product' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest, context: any) {
    try {
        const { id } = context.params;
        await prisma.product.delete({
            where: { id: parseInt(id) }
        });

        return new Response(null, { status: 204 });
    } catch (error) {
        console.error('Error deleting product:', error);
        return NextResponse.json(
            { error: 'Failed to delete product' },
            { status: 500 }
        );
    }
}
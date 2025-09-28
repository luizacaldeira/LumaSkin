import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const defaultSelectFields = {
    id: true,
    title: true,
    price: true,
    description: true,
    benefits: true,
    imageUrl: true,
    createdAt: true,
    updatedAt: true
};

export { prisma };

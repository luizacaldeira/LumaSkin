import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClient;
};

let _prismaClient: PrismaClient | undefined = globalForPrisma.prisma;

function createPrismaClient() {
    const client = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
    if (process.env.NODE_ENV !== 'production') {
        globalForPrisma.prisma = client;
    }
    return client;
}

const prisma = new Proxy({} as PrismaClient, {
    get(_target, prop: string | symbol) {
        if (!_prismaClient) {
            if (!process.env.DATABASE_URL) {
                throw new Error(
                    'Prisma client used before DATABASE_URL is defined. Set DATABASE_URL during build or avoid using prisma at import time.'
                );
            }
            _prismaClient = createPrismaClient();
        }
        const value = ( _prismaClient as unknown as any)[prop];
        if (typeof value === 'function') return value.bind(_prismaClient);
        return value;
    },
    apply(_target, _thisArg, _args) {
        if (!_prismaClient) {
            if (!process.env.DATABASE_URL) {
                throw new Error(
                    'Prisma client used before DATABASE_URL is defined. Set DATABASE_URL during build or avoid using prisma at import time.'
                );
            }
            _prismaClient = createPrismaClient();
        }
        return ( _prismaClient as unknown as any).apply(_thisArg, _args);
    },
}) as unknown as PrismaClient;

export const defaultSelectFields = {
    id: true,
    title: true,
    price: true,
    description: true,
    benefits: true,
    imageUrl: true,
    createdAt: true,
    updatedAt: true,
};

export { prisma };

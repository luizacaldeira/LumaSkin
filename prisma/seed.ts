import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Hydrating Serum',
      description: 'A smooth and hydrating serum for radiant skin.',
      benefits: 'Deep hydration, anti-aging, brightening',
      imageUrl: '/hero-section-img.png',
      price: 29.99,
      variant: ['30ml', '50ml'],
      createdAt: new Date(),
    },
    {
      title: 'Gentle Cleanser',
      description: 'A gentle cleanser that removes impurities without drying.',
      benefits: 'Removes makeup, hydrates, soothes',
      imageUrl: '/hero-section-img.png',
      price: 19.99,
      variant: ['150ml', '200ml'],
      createdAt: new Date(),
    },
    {
      title: 'Vitamin C Cream',
      description: 'Brightening cream with vitamin C for glowing skin.',
      benefits: 'Brightens, protects, anti-oxidant',
      imageUrl: '/hero-section-img.png',
      price: 39.99,
      variant: ['50ml'],
      createdAt: new Date(),
    },
    {
      title: 'Night Moisturizer',
      description: 'Rich moisturizer for overnight skin repair.',
      benefits: 'Overnight repair, deep nourishment, anti-aging',
      imageUrl: '/hero-section-img.png',
      price: 34.99,
      variant: ['50ml', '100ml'],
      createdAt: new Date(),
    },
    {
      title: 'Sunscreen SPF 50',
      description: 'High protection sunscreen for daily use.',
      benefits: 'UV protection, non-greasy, water resistant',
      imageUrl: '/hero-section-img.png',
      price: 24.99,
      variant: ['60ml', '120ml'],
      createdAt: new Date(),
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
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
      variant: ['50ml'],
      createdAt: new Date(),
    },
    {
      title: 'Gentle Cleanser',
      description: 'A gentle cleanser that removes impurities without drying.',
      benefits: 'Removes makeup, hydrates, soothes',
      imageUrl: '/hero-section-img.png',
      price: 19.99,
      variant: ['200ml'],
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
      variant: ['50ml'],
      createdAt: new Date(),
    },
    {
      title: 'Sunscreen SPF 50',
      description: 'High protection sunscreen for daily use.',
      benefits: 'UV protection, non-greasy, water resistant',
      imageUrl: '/hero-section-img.png',
      price: 24.99,
      variant: ['60ml'],
      createdAt: new Date(),
    },
    {
      title: 'Retinol Serum',
      description: 'Anti-aging serum with retinol for youthful skin.',
      benefits: 'Reduces fine lines, improves texture, anti-aging',
      imageUrl: '/hero-section-img.png',
      price: 49.99,
      variant: ['30ml'],
      createdAt: new Date(),
    },
    {
      title: 'Exfoliating Scrub',
      description: 'Gentle exfoliating scrub for smooth, radiant skin.',
      benefits: 'Removes dead skin, smooths texture, brightens',
      imageUrl: '/hero-section-img.png',
      price: 18.99,
      variant: ['100ml'],
      createdAt: new Date(),
    },
    {
      title: 'Micellar Water',
      description: 'Gentle micellar water for makeup removal and cleansing.',
      benefits: 'Removes makeup, cleanses, no rinsing required',
      imageUrl: '/hero-section-img.png',
      price: 12.99,
      variant: ['200ml'],
      createdAt: new Date(),
    },
    {
      title: 'Hydrating Face Mask',
      description: 'Intensive hydrating mask for deep moisture boost.',
      benefits: 'Deep hydration, plumps skin, restores moisture barrier',
      imageUrl: '/hero-section-img.png',
      price: 28.99,
      variant: ['Lilac', 'Pink'],
      createdAt: new Date(),
    },
    {
      title: 'Niacinamide Serum',
      description: 'Pore-minimizing serum with niacinamide for smoother skin.',
      benefits: 'Minimizes pores, controls oil, improves texture',
      imageUrl: '/hero-section-img.png',
      price: 26.99,
      variant: ['30ml'],
      createdAt: new Date(),
    },
    {
      title: 'Clay Purifying Mask',
      description: 'Deep cleansing clay mask for oily and acne-prone skin.',
      benefits: 'Deep cleansing, removes impurities, controls oil',
      imageUrl: '/hero-section-img.png',
      price: 22.99,
      variant: ['Green Clay', 'White Clay', 'Pink Clay'],
      createdAt: new Date(),
    },
    {
      title: 'Eye Cream',
      description: 'Anti-aging eye cream for delicate under-eye area.',
      benefits: 'Reduces dark circles, smooths fine lines, hydrates',
      imageUrl: '/hero-section-img.png',
      price: 35.99,
      variant: ['15ml'],
      createdAt: new Date(),
    },
    {
      title: 'Hyaluronic Acid Serum',
      description: 'Intense hydration serum with hyaluronic acid.',
      benefits: 'Intense hydration, plumps skin, reduces fine lines',
      imageUrl: '/hero-section-img.png',
      price: 32.99,
      variant: ['30ml'],
      createdAt: new Date(),
    },
    {
      title: 'Tinted Moisturizer SPF',
      description: 'Lightweight tinted moisturizer with sun protection.',
      benefits: 'Light coverage, hydration, sun protection',
      imageUrl: '/hero-section-img.png',
      price: 27.99,
      variant: ['Light', 'Medium', 'Dark'],
      createdAt: new Date(),
    },
    {
      title: 'AHA/BHA Exfoliant',
      description: 'Chemical exfoliant with alpha and beta hydroxy acids.',
      benefits: 'Exfoliates, unclogs pores, improves skin texture',
      imageUrl: '/hero-section-img.png',
      price: 38.99,
      variant: ['30ml'],
      createdAt: new Date(),
    },
    {
      title: 'Ceramide Repair Cream',
      description: 'Barrier-repairing cream with ceramides for sensitive skin.',
      benefits: 'Repairs skin barrier, soothes irritation, long-lasting moisture',
      imageUrl: '/hero-section-img.png',
      price: 42.99,
      variant: ['100ml'],
      createdAt: new Date(),
    }
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
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Hydrating Serum',
      description: 'A smooth and hydrating serum for radiant skin.',
      benefits: 'Deep hydration, anti-aging, brightening',
      imageUrl: '/serum.png',
      price: 29.99,
      createdAt: new Date(),
    },
    {
      title: 'Gentle Cleanser',
      description: 'A gentle cleanser that removes impurities without drying.',
      benefits: 'Removes makeup, hydrates, soothes',
      imageUrl: '/cream.png',
      price: 19.99,
      createdAt: new Date(),
    },
    {
      title: 'Vitamin C Cream',
      description: 'Brightening cream with vitamin C for glowing skin.',
      benefits: 'Brightens, protects, anti-oxidant',
      imageUrl: '/serum.png',
      price: 39.99,
      createdAt: new Date(),
    },
    {
      title: 'Night Moisturizer',
      description: 'Rich moisturizer for overnight skin repair.',
      benefits: 'Overnight repair, deep nourishment, anti-aging',
      imageUrl: '/moisturizer.png',
      price: 34.99,
      createdAt: new Date(),
    },
    {
      title: 'Sunscreen SPF 50',
      description: 'High protection sunscreen for daily use.',
      benefits: 'UV protection, non-greasy, water resistant',
      imageUrl: '/cream.png',
      price: 24.99,
      createdAt: new Date(),
    },
    {
      title: 'Retinol Serum',
      description: 'Anti-aging serum with retinol for youthful skin.',
      benefits: 'Reduces fine lines, improves texture, anti-aging',
      imageUrl: '/serum.png',
      price: 49.99,
      createdAt: new Date(),
    },
    {
      title: 'Exfoliating Scrub',
      description: 'Gentle exfoliating scrub for smooth, radiant skin.',
      benefits: 'Removes dead skin, smooths texture, brightens',
      imageUrl: '/repair-cream.png',
      price: 18.99,
      createdAt: new Date(),
    },
    {
      title: 'Micellar Water',
      description: 'Gentle micellar water for makeup removal and cleansing.',
      benefits: 'Removes makeup, cleanses, no rinsing required',
      imageUrl: '/micelar-water.png',
      price: 12.99,
      createdAt: new Date(),
    },
    {
      title: 'Hydrating Face Mask',
      description: 'Intensive hydrating mask for deep moisture boost.',
      benefits: 'Deep hydration, plumps skin, restores moisture barrier',
      imageUrl: '/repair-cream.png',
      price: 28.99,
      createdAt: new Date(),
    },
    {
      title: 'Niacinamide Serum',
      description: 'Pore-minimizing serum with niacinamide for smoother skin.',
      benefits: 'Minimizes pores, controls oil, improves texture',
      imageUrl: '/serum.png',
      price: 26.99,
      createdAt: new Date(),
    },
    {
      title: 'Clay Purifying Mask',
      description: 'Deep cleansing clay mask for oily and acne-prone skin.',
      benefits: 'Deep cleansing, removes impurities, controls oil',
      imageUrl: '/cream.png',
      price: 22.99,
      createdAt: new Date(),
    },
    {
      title: 'Eye Cream',
      description: 'Anti-aging eye cream for delicate under-eye area.',
      benefits: 'Reduces dark circles, smooths fine lines, hydrates',
      imageUrl: '/repair-cream.png',
      price: 35.99,
      createdAt: new Date(),
    },
    {
      title: 'Hyaluronic Acid Serum',
      description: 'Intense hydration serum with hyaluronic acid.',
      benefits: 'Intense hydration, plumps skin, reduces fine lines',
      imageUrl: '/serum.png',
      price: 32.99,
      createdAt: new Date(),
    },
    {
      title: 'Tinted Moisturizer SPF',
      description: 'Lightweight tinted moisturizer with sun protection.',
      benefits: 'Light coverage, hydration, sun protection',
      imageUrl: '/moisturizer.png',
      price: 27.99,
      createdAt: new Date(),
    },
    {
      title: 'AHA/BHA Exfoliant',
      description: 'Chemical exfoliant with alpha and beta hydroxy acids.',
      benefits: 'Exfoliates, unclogs pores, improves skin texture',
      imageUrl: '/micelar-water.png',
      price: 38.99,
      createdAt: new Date(),
    },
    {
      title: 'Ceramide Repair Cream',
      description: 'Barrier-repairing cream with ceramides for sensitive skin.',
      benefits: 'Repairs skin barrier, soothes irritation, long-lasting moisture',
      imageUrl: '/cream.png',
      price: 42.99,
      createdAt: new Date(),
    },
    {
        title: 'Soothing Balm',
        description: 'Calming balm for irritated skin.',
        benefits: 'Soothes irritation, reduces redness, hydrates',
        imageUrl: '/balm.png',
        price: 24.99,
        createdAt: new Date(),
    },
    {
        title: 'Intensive Repair Cream',
        description: 'Advanced repair cream for damaged and mature skin.',
        benefits: 'Repairs damage, anti-aging, intensive moisture',
        imageUrl: '/repair-cream.png',
        price: 45.99,
        createdAt: new Date(),
    },
    {
        title: 'Daily Defense Moisturizer',
        description: 'Lightweight daily moisturizer with antioxidant protection.',
        benefits: 'Daily protection, lightweight hydration, antioxidants',
        imageUrl: '/moisturizer.png',
        price: 25.99,
        createdAt: new Date(),
    },
    {
        title: 'Brightening Vitamin C Serum',
        description: 'Potent vitamin C serum for radiant and even skin tone.',
        benefits: 'Brightens complexion, evens skin tone, antioxidant protection',
        imageUrl: '/serum.png',
        price: 38.99,
        createdAt: new Date(),
    },
    {
        title: 'Gentle Cleansing Balm',
        description: 'Rich cleansing balm that melts away makeup and impurities.',
        benefits: 'Deep cleansing, nourishing, removes waterproof makeup',
        imageUrl: '/balm.png',
        price: 28.99,
        createdAt: new Date(),
    },
    {
        title: 'Hydrating Toner',
        description: 'Alcohol-free toner that prepares skin for skincare routine.',
        benefits: 'Balances pH, hydrates, prepares skin',
        imageUrl: '/micelar-water.png',
        price: 18.99,
        createdAt: new Date(),
    },
    {
        title: 'Collagen Boost Cream',
        description: 'Anti-aging cream that promotes natural collagen production.',
        benefits: 'Boosts collagen, firms skin, reduces wrinkles',
        imageUrl: '/cream.png',
        price: 52.99,
        createdAt: new Date(),
    },
    {
        title: 'Peptide Recovery Serum',
        description: 'Advanced peptide serum for skin recovery and renewal.',
        benefits: 'Promotes healing, reduces scarring, improves texture',
        imageUrl: '/serum.png',
        price: 46.99,
        createdAt: new Date(),
    },
    {
        title: 'Overnight Repair Mask',
        description: 'Intensive overnight mask for deep skin repair.',
        benefits: 'Overnight repair, deep nourishment, skin renewal',
        imageUrl: '/repair-cream.png',
        price: 34.99,
        createdAt: new Date(),
    },
    {
        title: 'Gentle Exfoliating Cleanser',
        description: 'Daily cleanser with gentle exfoliating beads.',
        benefits: 'Gentle exfoliation, deep cleansing, smooth texture',
        imageUrl: '/cream.png',
        price: 21.99,
        createdAt: new Date(),
    },
    {
        title: 'Antioxidant Face Oil',
        description: 'Nourishing face oil packed with antioxidants.',
        benefits: 'Deep nourishment, antioxidant protection, natural glow',
        imageUrl: '/serum.png',
        price: 35.99,
        createdAt: new Date(),
    },
    {
        title: 'Purifying Micellar Water',
        description: 'Advanced micellar water for deep cleansing and purifying.',
        benefits: 'Deep cleansing, removes impurities, alcohol-free',
        imageUrl: '/micelar-water.png',
        price: 16.99,
        createdAt: new Date(),
    },
    {
        title: 'Revitalizing Night Balm',
        description: 'Rich night balm for intensive skin revitalization.',
        benefits: 'Overnight repair, intensive moisture, revitalizes',
        imageUrl: '/balm.png',
        price: 41.99,
        createdAt: new Date(),
    },
    {
        title: 'Age-Defying Moisturizer',
        description: 'Premium anti-aging moisturizer for mature skin.',
        benefits: 'Reduces fine lines, firms skin, long-lasting hydration',
        imageUrl: '/moisturizer.png',
        price: 48.99,
        createdAt: new Date(),
    },
    {
        title: 'Intensive Healing Cream',
        description: 'Therapeutic cream for damaged or compromised skin.',
        benefits: 'Promotes healing, restores barrier, soothes irritation',
        imageUrl: '/repair-cream.png',
        price: 39.99,
        createdAt: new Date(),
    },
    {
        title: 'Lifting Firming Serum',
        description: 'Advanced serum that provides lifting and firming effects.',
        benefits: 'Lifts sagging skin, improves elasticity, firms contours',
        imageUrl: '/serum.png',
        price: 54.99,
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
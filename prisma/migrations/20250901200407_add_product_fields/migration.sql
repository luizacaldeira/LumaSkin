-- AlterTable
ALTER TABLE "public"."products" ADD COLUMN     "benefits" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "variant" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "description" DROP NOT NULL;

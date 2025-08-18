// prisma/seed.ts
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const customer = await prisma.user.upsert({
    where: { email: 'bride@example.com' },
    update: {},
    create: {
      name: 'Bride',
      email: 'bride@example.com',
      role: Prisma.Role.CUSTOMER,
      city: 'Coimbatore'
    }
  })

  const vendorUser = await prisma.user.upsert({
    where: { email: 'aisha@mehndi.com' },
    update: {},
    create: {
      name: 'Aisha',
      email: 'aisha@mehndi.com',
      role: Prisma.Role.VENDOR,
      city: 'Coimbatore'
    }
  })

  const vendor = await prisma.vendorProfile.upsert({
    where: { userId: vendorUser.id },
    update: {},
    create: {
      userId: vendorUser.id,
      bio: 'Intricate bridal mehndi specialist',
      services: [Prisma.ServiceType.MEHNDI],
      expertiseTags: ['Bridal','Arabic'],
      regions: ['Coimbatore','RS Puram'],
      basePrice: 5000,
      verifiedLevel: 1
    }
  })

  await prisma.listing.upsert({
    where: { id: 'seed-listing-1' },
    update: {},
    create: {
      id: 'seed-listing-1',
      vendorId: vendor.id,
      title: 'Bridal Mehndi by Aisha',
      description: 'On-time, travel available',
      mediaUrls: [],
      regions: ['Coimbatore'],
      minAdvancePct: 40,
      serviceTypes: [Prisma.ServiceType.MEHNDI]
    }
  })
}

main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect())
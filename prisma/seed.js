// prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const customer = await prisma.user.upsert({
    where: { email: 'bride@example.com' },
    update: {},
    create: { name: 'Bride', email: 'bride@example.com', role: 'CUSTOMER', city: 'Coimbatore' }
  })

  const vendorUser = await prisma.user.upsert({
    where: { email: 'aisha@mehndi.com' },
    update: {},
    create: { name: 'Aisha', email: 'aisha@mehndi.com', role: 'VENDOR', city: 'Coimbatore' }
  })

  const vendor = await prisma.vendorProfile.upsert({
    where: { userId: vendorUser.id },
    update: {},
    create: {
      userId: vendorUser.id,
      bio: 'Intricate bridal mehndi specialist. On-time, travel available.',
      services: ['MEHNDI'],
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
      description: 'Detailed bridal designs • Travel to venue • Trial available',
      mediaUrls: [],
      regions: ['Coimbatore'],
      minAdvancePct: 40,
      serviceTypes: ['MEHNDI']
    }
  })

  console.log('✅ Seed complete', { customer: customer.email, vendor: vendorUser.email })
}

main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect())
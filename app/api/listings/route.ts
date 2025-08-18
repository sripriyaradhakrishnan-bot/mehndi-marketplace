
import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'

// GET /api/listings - list/search listings (placeholder)
export async function GET(request: Request) {
  // TODO: parse search params & query prisma.listing
  const data = [
    { id: '1', title: 'Bridal Mehndi by Aisha', regions: ['Coimbatore'], serviceTypes: ['MEHNDI'], minAdvancePct: 40, basePrice: 5000, verifiedLevel: 1 },
  ]
  return NextResponse.json({ ok: true, items: data })
}

// POST /api/listings - create new listing (placeholder)
export async function POST(request: Request) {
  const body = await request.json()
  // TODO: validate & create via prisma.listing.create
  return NextResponse.json({ ok: true, created: body })
}

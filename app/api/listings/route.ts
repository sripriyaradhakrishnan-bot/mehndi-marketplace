import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/listings — simple DB list (works on both SQLite JSON and Postgres arrays)
export async function GET() {
  const items = await prisma.listing.findMany({
    include: { vendor: true },
    orderBy: { createdAt: 'desc' },
    take: 24,
  })
  return NextResponse.json({ ok: true, items })
}

// POST /api/listings — (optional) create
export async function POST(req: Request) {
  const body = await req.json()
  const created = await prisma.listing.create({ data: body })
  return NextResponse.json({ ok: true, created })
}
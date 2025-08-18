
import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'

export async function GET() {
  const offers = [
    { code: 'BRIDE10', description: '10% off bridal mehndi packages', validTo: '2025-12-31' },
  ]
  return NextResponse.json({ ok: true, items: offers })
}

export async function POST(request: Request) {
  const body = await request.json()
  // TODO: prisma.offer.create
  return NextResponse.json({ ok: true, created: body })
}

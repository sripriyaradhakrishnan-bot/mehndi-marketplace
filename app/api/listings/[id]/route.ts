import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const item = await prisma.listing.findUnique({
    where: { id: params.id },
    include: {
      vendor: { include: { user: true } },
      reviews: true,
    },
  })
  if (!item) return new NextResponse('Not found', { status: 404 })
  return NextResponse.json({ ok: true, item })
}
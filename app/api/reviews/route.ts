
import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'

export async function GET() {
  // TODO: prisma.review.findMany
  return NextResponse.json({ ok: true, items: [] })
}

export async function POST(request: Request) {
  const body = await request.json()
  // TODO: prisma.review.create
  return NextResponse.json({ ok: true, created: body })
}

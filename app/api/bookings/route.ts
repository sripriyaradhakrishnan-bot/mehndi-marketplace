
import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'

// POST /api/bookings - create booking (placeholder)
export async function POST(request: Request) {
  const body = await request.json()
  // TODO: create booking via prisma.booking.create
  // TODO: init payment intent (UPI/cards) and set Payment.status=HOLD for deposit
  return NextResponse.json({ ok: true, booking: body, message: 'Booking created (placeholder). Proceed to payment.' })
}

// GET /api/bookings - list bookings (placeholder)
export async function GET() {
  return NextResponse.json({ ok: true, items: [] })
}

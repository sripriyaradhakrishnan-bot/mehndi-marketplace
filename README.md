
# Mehndi Services Marketplace (Next.js App Router + TypeScript + Prisma)

A starter scaffold for a services marketplace focused on Mehndi (and related bridal services). 
Includes placeholder pages: **search, vendor listing, booking with advance deposit, calendar, reviews, offers, admin**, plus a basic Prisma schema.

## Quick Start

1. **Install deps**
   ```bash
   npm install
   ```

2. **Environment**
   - Copy `.env.example` to `.env` and update values (uses SQLite for simplest local dev).

3. **DB & Prisma**
   ```bash
   npx prisma migrate dev --name init
   npx prisma db seed   # (optional if you add a seed script)
   ```

4. **Run dev**
   ```bash
   npm run dev
   ```

5. Visit http://localhost:3000

## Notes

- This scaffold is intentionally minimal and contains **TODO** comments to guide real implementation.
- Replace SQLite with Postgres by editing `prisma/schema.prisma` and `DATABASE_URL` if needed.
- API route handlers in `app/api/*` return placeholder responses and illustrate expected shapes.
- For auth/payments (UPI/cards, escrow/hold, payouts), wire up providers of your choice (Razorpay/Stripe/etc.).


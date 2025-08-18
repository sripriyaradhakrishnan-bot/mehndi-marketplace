import { prisma } from '@/lib/prisma'
import BookingForm from '@/components/BookingForm'
import ReviewList from '@/components/ReviewList'

export default async function VendorPage({ params }: { params: { id: string } }) {
  const listing = await prisma.listing.findUnique({
    where: { id: params.id },
    include: {
      vendor: { include: { user: true } },
      reviews: true,
    },
  })

  if (!listing) return <div className="card">Listing not found.</div>

  return (
    <div className="grid">
      <section className="card">
        <h1 style={{marginTop:0}}>
          {listing.title}{' '}
          {listing.vendor?.verifiedLevel! > 0 && <span className="badge">Verified {listing.vendor?.verifiedLevel}</span>}
        </h1>
        <p style={{color:'var(--muted)'}}>
          {(listing as any).regions?.join(', ') || ''} • {(listing as any).serviceTypes?.join(', ') || ''}
        </p>
        <p>{listing.description}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {(listing as any).mediaUrls?.[0] && (
          <img src={(listing as any).mediaUrls[0]} alt={listing.title} width={800} height={400} style={{borderRadius:12}} />
        )}
      </section>

      <BookingForm
        listingId={listing.id}
        minAdvancePct={listing.minAdvancePct}
        suggestedPrice={listing.vendor?.basePrice ?? undefined}
      />

      <section>
        <h3>Reviews</h3>
        <ReviewList
          reviews={(listing.reviews || []).map((r) => ({
            id: r.id,
            stars: r.stars,
            text: r.text,
            authorName: listing.vendor?.user?.name,
          }))}
        />
      </section>
    </div>
  )
}
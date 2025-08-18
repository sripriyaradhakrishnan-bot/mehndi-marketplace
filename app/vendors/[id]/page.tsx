
import BookingForm from '@/components/BookingForm'
import ReviewList from '@/components/ReviewList'

// TODO: fetch listing & vendor by id via prisma. Placeholder data below.
export default async function VendorPage({ params }: { params: { id: string } }) {
  const { id } = params
  const listing = {
    id,
    title: 'Bridal Mehndi by Aisha',
    description: 'Specialized in intricate bridal designs. Travel available.',
    regions: ['Coimbatore','RS Puram'],
    serviceTypes: ['MEHNDI'],
    minAdvancePct: 40,
    basePrice: 5000,
    verifiedLevel: 1,
    mediaUrls: ['https://placehold.co/800x400']
  }
  const reviews = [
    { id: 'r1', stars: 5, text: 'Beautiful designs and on-time arrival!', authorName: 'Divya' },
    { id: 'r2', stars: 4, text: 'Lovely work, would recommend.', authorName: 'Anita' }
  ]

  return (
    <div className="grid">
      <section className="card">
        <h1 style={{marginTop:0}}>{listing.title} {listing.verifiedLevel>0 && <span className="badge">Verified {listing.verifiedLevel}</span>}</h1>
        <p style={{color:'var(--muted)'}}>{listing.regions.join(', ')} • {listing.serviceTypes.join(', ')}</p>
        <p>{listing.description}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={listing.mediaUrls[0]} alt={listing.title} width={800} height={400} style={{borderRadius:12}} />
      </section>

      <BookingForm listingId={listing.id} minAdvancePct={listing.minAdvancePct} suggestedPrice={listing.basePrice} />

      <section>
        <h3>Reviews</h3>
        <ReviewList reviews={reviews} />
      </section>
    </div>
  )
}


import OfferCard from '@/components/OfferCard'

export default function OffersPage() {
  // TODO: fetch active offers via prisma
  const offers = [
    { code: 'BRIDE10', description: '10% off bridal mehndi packages', validTo: '2025-12-31' },
    { code: 'TRIALFREE', description: 'Free trial session with select vendors', validTo: '2025-10-01' },
  ]
  return (
    <div className="grid">
      <h2>Current Offers</h2>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(280px,1fr))'}}>
        {offers.map(o => <OfferCard key={o.code} {...o} />)}
      </div>
    </div>
  )
}

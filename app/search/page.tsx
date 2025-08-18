
import ListingCard from '@/components/ListingCard'
import SearchBar from '@/components/SearchBar'

export default function SearchPage() {
  // TODO: Use search params to filter via /api/listings (prisma query)
  const listings = [
    { id: '1', title: 'Bridal Mehndi by Aisha', regions: ['Coimbatore'], serviceTypes: ['MEHNDI'], minAdvancePct: 40, basePrice: 5000, verifiedLevel: 1 },
    { id: '2', title: 'Arabic Mehndi — Kavya', regions: ['Saravanampatti'], serviceTypes: ['MEHNDI'], minAdvancePct: 30, basePrice: 3500, verifiedLevel: 0 },
  ]
  return (
    <div className="grid">
      <h2>Search</h2>
      <SearchBar />
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))'}}>
        {listings.map(l => <ListingCard key={l.id} {...l} />)}
      </div>
    </div>
  )
}

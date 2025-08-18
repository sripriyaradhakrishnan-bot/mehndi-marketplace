
import Link from 'next/link'
import SearchBar from '@/components/SearchBar'
import ListingCard from '@/components/ListingCard'

// NOTE: This uses static demo data. Replace with real prisma queries.
const demoListings = [
  { id: '1', title: 'Bridal Mehndi by Aisha', regions: ['Coimbatore'], serviceTypes: ['MEHNDI'], minAdvancePct: 40, basePrice: 5000, verifiedLevel: 1 },
  { id: '2', title: 'Elegant Saree Draping', regions: ['RS Puram','Peelamedu'], serviceTypes: ['SAREE'], minAdvancePct: 30, basePrice: 1500, verifiedLevel: 0 },
  { id: '3', title: 'Makeup & Hair – Bridal', regions: ['Gandhipuram'], serviceTypes: ['MAKEUP','HAIR'], minAdvancePct: 40, basePrice: 8000, verifiedLevel: 2 },
]

export default function HomePage() {
  return (
    <div className="grid">
      <section className="card">
        <h1 style={{marginTop:0}}>Find your bridal team and lock your date</h1>
        <p style={{color:'var(--muted)'}}>Verified artists • Region & price filters • Pay {`{`}advance{`}`} to confirm</p>
        <Link href="/search" className="btn">Start Search</Link>
      </section>

      <SearchBar />

      <section className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))'}}>
        {demoListings.map(l => <ListingCard key={l.id} {...l} />)}
      </section>
    </div>
  )
}

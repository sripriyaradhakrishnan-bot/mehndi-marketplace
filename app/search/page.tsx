import ListingCard from '@/components/ListingCard'
import { prisma } from '@/lib/prisma'

export default async function SearchPage() {
  // Pull the latest 24 listings from the DB
  const items = await prisma.listing.findMany({
    include: { vendor: true },
    orderBy: { createdAt: 'desc' },
    take: 24,
  })

  return (
    <div className="grid">
      <h2>Search</h2>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))'}}>
        {items.map((l) => (
          <ListingCard
            key={l.id}
            id={l.id}
            title={l.title}
            regions={(l as any).regions || []}
            serviceTypes={(l as any).serviceTypes || []}
            minAdvancePct={l.minAdvancePct}
            basePrice={l.vendor?.basePrice ?? undefined}
            verifiedLevel={l.vendor?.verifiedLevel ?? 0}
            mediaUrl={(l as any).mediaUrls?.[0]}
          />
        ))}
        {items.length === 0 && <p style={{color:'var(--muted)'}}>No results yet — seed or add a listing.</p>}
      </div>
    </div>
  )
}
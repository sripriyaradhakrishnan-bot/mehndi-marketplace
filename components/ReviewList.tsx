
type Review = {
  id: string
  stars: number
  text: string
  authorName?: string
  createdAt?: string
}

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div className="grid">
      {reviews.map(r => (
        <div key={r.id} className="card">
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong>{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</strong>
            <span style={{color:'var(--muted)'}}>{r.createdAt || ''}</span>
          </div>
          <p style={{marginTop:'0.5rem'}}>{r.text}</p>
          {r.authorName && <p style={{color:'var(--muted)'}}>— {r.authorName}</p>}
        </div>
      ))}
    </div>
  )
}

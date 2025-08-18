
type Props = {
  code: string
  description: string
  validTo?: string
}

export default function OfferCard({ code, description, validTo }: Props) {
  return (
    <div className="card">
      <h3>Offer: {code}</h3>
      <p>{description}</p>
      {validTo && <p style={{color:'var(--muted)'}}>Valid until {validTo}</p>}
    </div>
  )
}

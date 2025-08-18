
import Link from 'next/link';
import { formatINR } from '@/lib/utils';

type Props = {
  id: string
  title: string
  regions: string[]
  serviceTypes: string[]
  minAdvancePct: number
  ratingAvg?: number
  basePrice?: number
  mediaUrl?: string
  verifiedLevel?: number
}

export default function ListingCard(props: Props) {
  return (
    <div className="card">
      <div style={{display:'flex', gap:'1rem'}}>
        <div style={{width:120, height:90, background:'#f5f5f5', borderRadius:8, overflow:'hidden'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={props.mediaUrl || 'https://placehold.co/200x150'} alt={props.title} width={120} height={90} />
        </div>
        <div style={{flex:1}}>
          <h3 style={{margin:'0 0 0.25rem'}}>{props.title} {props.verifiedLevel && props.verifiedLevel>0 && <span className="badge">Verified {props.verifiedLevel}</span>}</h3>
          <p style={{margin:'0 0 0.5rem', color:'var(--muted)'}}>{props.regions.join(', ')} • {props.serviceTypes.join(', ')}</p>
          <p style={{margin:'0 0 0.5rem'}}>
            {props.basePrice ? <>From {formatINR(props.basePrice)}</> : 'Price on request'} • Advance {props.minAdvancePct}%
          </p>
          <Link className="btn" href={`/vendors/${props.id}`}>View</Link>
        </div>
      </div>
    </div>
  );
}

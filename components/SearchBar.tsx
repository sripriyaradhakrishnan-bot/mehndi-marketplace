
'use client';

import { useState } from 'react';

type Props = {
  onSearch?: (q: { city?: string; expertise?: string; minPrice?: number; maxPrice?: number }) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState('');
  const [expertise, setExpertise] = useState('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  return (
    <div className="card">
      <div className="grid" style={{gridTemplateColumns:'repeat(4, minmax(0,1fr))'}}>
        <div>
          <label>City</label>
          <input value={city} onChange={e=>setCity(e.target.value)} placeholder="Coimbatore" />
        </div>
        <div>
          <label>Expertise</label>
          <input value={expertise} onChange={e=>setExpertise(e.target.value)} placeholder="Bridal, Arabic, etc." />
        </div>
        <div>
          <label>Min Price (₹)</label>
          <input value={minPrice} onChange={e=>setMinPrice(e.target.value)} placeholder="2000" />
        </div>
        <div>
          <label>Max Price (₹)</label>
          <input value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} placeholder="10000" />
        </div>
      </div>
      <div style={{marginTop:'0.75rem'}}>
        <button className="btn" onClick={() => onSearch?.({
          city: city || undefined,
          expertise: expertise || undefined,
          minPrice: minPrice ? Number(minPrice) : undefined,
          maxPrice: maxPrice ? Number(maxPrice) : undefined,
        })}>Search</button>
      </div>
    </div>
  );
}

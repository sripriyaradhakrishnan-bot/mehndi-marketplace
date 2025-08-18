
'use client';

import { useState } from 'react';

type Props = {
  listingId: string
  minAdvancePct: number
  suggestedPrice?: number
}

export default function BookingForm({ listingId, minAdvancePct, suggestedPrice }: Props) {
  const [date, setDate] = useState<string>('');
  const [quote, setQuote] = useState<string>(suggestedPrice ? String(suggestedPrice) : '');
  const [note, setNote] = useState('');

  // TODO: wire to POST /api/bookings
  async function createBooking() {
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        listingId,
        date,
        priceQuote: Number(quote) || 0,
        advancePct: minAdvancePct,
        contractNote: note
      })
    });
    const data = await res.json();
    alert(`Booking created (placeholder): ${JSON.stringify(data, null, 2)}`);
  }

  return (
    <div className="card">
      <h3>Book this artist</h3>
      <div className="grid" style={{gridTemplateColumns:'repeat(2, minmax(0,1fr))'}}>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
        </div>
        <div>
          <label>Quoted Price (₹)</label>
          <input value={quote} onChange={e=>setQuote(e.target.value)} placeholder="5000" />
        </div>
        <div style={{gridColumn:'span 2'}}>
          <label>Notes / Requirements</label>
          <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Bridal package, travel to venue, etc." />
        </div>
      </div>
      <p style={{marginTop:'0.5rem'}}>Advance required: {minAdvancePct}% of quoted price at checkout.</p>
      <button className="btn" onClick={createBooking}>Continue to deposit (placeholder)</button>
    </div>
  );
}

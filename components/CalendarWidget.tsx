
export default function CalendarWidget() {
  // TODO: replace with a real calendar component (e.g., react-day-picker) + vendor availability
  const days = Array.from({length: 30}, (_,i)=>i+1);
  return (
    <div className="card">
      <h3>Calendar (placeholder)</h3>
      <div className="grid" style={{gridTemplateColumns:'repeat(7, 1fr)'}}>
        {days.map(d => (
          <div key={d} style={{padding:'0.75rem', textAlign:'center', border:'1px solid #eee', borderRadius:8}}>{d}</div>
        ))}
      </div>
    </div>
  )
}

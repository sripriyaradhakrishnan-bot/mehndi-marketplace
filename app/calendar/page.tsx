
import CalendarWidget from '@/components/CalendarWidget'

export default function CalendarPage() {
  return (
    <div className="grid">
      <h2>Calendar</h2>
      <CalendarWidget />
      <p style={{color:'var(--muted)'}}>TODO: connect to vendor availability & Google Calendar sync.</p>
    </div>
  )
}

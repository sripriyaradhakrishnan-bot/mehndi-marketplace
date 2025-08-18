
export default function AdminPage() {
  return (
    <div className="grid">
      <h2>Admin</h2>
      <ul className="card">
        <li>✅ Verify vendors (KYC light, portfolio)</li>
        <li>🧾 Handle disputes & refunds</li>
        <li>⭐ Moderate reviews & comments</li>
        <li>🏷️ Manage offers & featured placements</li>
        <li>📊 View metrics dashboard</li>
      </ul>
      <p style={{color:'var(--muted)'}}>TODO: Gate this page with auth & role-based access (ADMIN only).</p>
    </div>
  )
}

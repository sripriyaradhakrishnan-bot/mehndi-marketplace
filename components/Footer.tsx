
export default function Footer() {
  return (
    <footer className="container" style={{marginTop:'3rem', borderTop:'1px solid #eee', paddingTop:'1rem'}}>
      <p style={{color:'var(--muted)'}}>© {new Date().getFullYear()} Mehndi Services Marketplace · Built with Next.js + Prisma</p>
    </footer>
  );
}

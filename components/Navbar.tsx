
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/search', label: 'Search' },
  { href: '/offers', label: 'Offers' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/admin', label: 'Admin' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="container" style={{display:'flex', gap:'1rem', alignItems:'center', justifyContent:'space-between'}}>
      <Link href="/" className="badge" aria-label="Home">Mehndi Marketplace</Link>
      <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap'}}>
        {links.map(l => (
          <Link key={l.href} href={l.href}>
            <span className="badge" style={{background: pathname===l.href ? '#e0f2fe' : '#f1f5f9'}}>{l.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

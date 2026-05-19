'use client';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 'var(--nav-height)',
        background: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
              borderRadius: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
                LUXE
              </div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase', marginTop: -4 }}>
                SALOON
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'About', href: '/about' },
            ].map(link => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          {/* CTA & Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="/services#booking" className="btn-primary hide-on-mobile" style={{ padding: '10px 22px', fontSize: '0.75rem' }}>
              <span>Book Now</span>
            </a>
            
            <button 
              className="show-on-mobile" 
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', display: 'none', alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M3 12h18" />
                    <path d="M3 6h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 'var(--nav-height)', left: 0, right: 0, bottom: 0,
          background: 'rgba(10,10,10,0.98)', zIndex: 999,
          display: 'flex', flexDirection: 'column', padding: '40px 24px',
          borderTop: '1px solid var(--border)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 40 }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'About', href: '/about' },
            ].map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setMenuOpen(false)}
                style={{ 
                  fontSize: '1.2rem', fontWeight: 500, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--text-primary)',
                  borderBottom: '1px solid var(--border)', paddingBottom: 16
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a 
            href="/services#booking" 
            className="btn-primary" 
            onClick={() => setMenuOpen(false)}
            style={{ padding: '16px', fontSize: '1rem', textAlign: 'center', justifyContent: 'center' }}
          >
            <span>Book Appointment</span>
          </a>
        </div>
      )}
    </>
  );
}

function NavLink({ href, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: hovered ? 'var(--gold)' : 'var(--text-secondary)',
        transition: 'color 0.2s',
        position: 'relative',
      }}
    >
      {label}
    </a>
  );
}

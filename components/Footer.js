'use client';
import { useState } from 'react';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-secondary)',
      padding: '60px 0 32px',
    }}>
      <div className="container">
        <div className="responsive-grid-4" style={{ gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, marginBottom: 12 }}>
              LUXE <span style={{ color: 'var(--gold)' }}>SALOON</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
              Where artistry meets elegance. Premium hair & beauty services crafted for those who demand the finest.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { id: 'IG', Icon: UilInstagram },
                { id: 'FB', Icon: UilFacebook },
                { id: 'TW', Icon: UilTwitter }
              ].map(s => (
                <FooterSocial key={s.id} Icon={s.Icon} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
              Quick Links
            </div>
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'About Us', href: '/about' },
              { label: 'Contact', href: '/about#contact' },
              { label: 'Book Now', href: '/services#booking' },
            ].map(link => (
              <div key={link.label} style={{ marginBottom: 10 }}>
                <FooterLink href={link.href} label={link.label} />
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
              Services
            </div>
            {['Hair Styling', 'Hair Coloring', 'Bridal Packages', 'Spa Treatments', 'Nail Art'].map(s => (
              <div key={s} style={{ marginBottom: 10 }}>
                <FooterLink href="/services" label={s} />
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
              Visit Us
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
              No. 25, Marine Drive,<br/>Colombo 04, Sri Lanka
            </p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: 8 }}>Open Hours</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 8 }}>Mon-Sat: 9am to 8pm</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 16 }}>Sunday: 10am to 6pm</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: 8 }}>Phone</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--gold)', fontWeight: 500 }}>066-2288563</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="responsive-flex-stack" style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © 2026 Luxe Saloon. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Crafted with care for beauty.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: '0.88rem',
        color: hovered ? 'var(--gold)' : 'var(--text-secondary)',
        transition: 'color 0.2s',
      }}
    >
      {label}
    </a>
  );
}

function FooterSocial({ Icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36, height: 36, borderRadius: 2,
        border: `1px solid ${hovered ? 'var(--gold)' : 'var(--border)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? 'var(--gold)' : 'var(--text-muted)',
        transition: 'all 0.2s',
      }}
    >
      <Icon size={18} />
    </a>
  );
}

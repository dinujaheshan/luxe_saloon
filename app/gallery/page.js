'use client';
import { useState, useCallback } from 'react';

const categories = ['All', 'Hair Color', 'Bridal', 'Men\'s Grooming', 'Spa', 'Nail Art', 'Texture'];

const galleryItems = [
  {
    id: 1,
    title: 'Sunlit Balayage',
    category: 'Hair Color',
    artist: 'Isabelle Moreau',
    img: '/gallery_color.png',
    tag: 'Signature Color',
    size: 'large',
  },
  {
    id: 2,
    title: 'Couture Bridal Updo',
    category: 'Bridal',
    artist: 'Amara Singh',
    img: '/gallery_bridal.png',
    tag: 'Bridal Exclusive',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Executive Fade',
    category: 'Men\'s Grooming',
    artist: 'Ryan Castro',
    img: '/gallery_mens.png',
    tag: 'Precision Cut',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Gold Marble Nails',
    category: 'Nail Art',
    artist: 'Amara Singh',
    img: '/gallery_nails.png',
    tag: 'Nail Artistry',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Renewal Ritual Facial',
    category: 'Spa',
    artist: 'Amara Singh',
    img: '/gallery_spa.png',
    tag: 'Spa Luxe',
    size: 'large',
  },
  {
    id: 6,
    title: 'Defined Curl Transformation',
    category: 'Texture',
    artist: 'Isabelle Moreau',
    img: '/gallery_texture.png',
    tag: 'Texture Specialist',
    size: 'medium',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = useCallback((item) => setLightbox(item), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <div className="page-wrapper">
      <GalleryHero />
      <FilterBar activeCategory={activeCategory} onSelect={setActiveCategory} />
      <GalleryGrid items={filtered} onOpen={openLightbox} />
      <GalleryCTA />
      {lightbox && <Lightbox item={lightbox} onClose={closeLightbox} />}
    </div>
  );
}

// ── Hero ──
function GalleryHero() {
  return (
    <section style={{
      padding: '80px 0 60px',
      background: 'linear-gradient(160deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
      borderBottom: '1px solid var(--border)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative radial glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">Our Portfolio</div>
        <div className="gold-line" style={{ margin: '0 auto 24px' }} />
        <h1 className="section-title" style={{ marginBottom: 20 }}>
          The Art of <span>Beauty</span>
        </h1>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Every look tells a story. Explore our curated portfolio of transformations crafted by New York's most celebrated beauty artists.
        </p>
      </div>
    </section>
  );
}

// ── Filter Bar ──
function FilterBar({ activeCategory, onSelect }) {
  return (
    <section style={{
      background: 'var(--bg-card)',
      borderBottom: '1px solid var(--border)',
      padding: '20px 0',
      position: 'sticky', top: 'var(--nav-height)', zIndex: 100,
    }}>
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          overflowX: 'auto', paddingBottom: 4,
        }}>
          {categories.map(cat => (
            <FilterPill
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => onSelect(cat)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterPill({ label, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      id={`filter-${label.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '8px 20px',
        borderRadius: 2,
        border: active ? '1px solid var(--gold)' : `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
        background: active
          ? 'linear-gradient(135deg, var(--gold), var(--gold-dark))'
          : hovered ? 'rgba(201,168,76,0.06)' : 'transparent',
        color: active ? '#000' : hovered ? 'var(--gold)' : 'var(--text-secondary)',
        fontSize: '0.75rem', fontWeight: active ? 700 : 500,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        transition: 'all 0.25s var(--ease)',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}

// ── Gallery Grid ──
function GalleryGrid({ items, onOpen }) {
  return (
    <section className="section">
      <div className="container">
        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>✦</div>
            <p>No works in this category yet.</p>
          </div>
        ) : (
          <div style={{
            columns: '3 280px',
            columnGap: 24,
          }}>
            {items.map(item => (
              <GalleryCard key={item.id} item={item} onOpen={onOpen} />
            ))}
          </div>
        )}

        {/* Stats ribbon */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0, marginTop: 80,
          border: '1px solid var(--border)',
          borderRadius: 2, overflow: 'hidden',
          background: 'var(--bg-card)',
        }}>
          {[
            { num: '500+', label: 'Transformations Captured' },
            { num: '25+', label: 'Expert Artists' },
            { num: '5★', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: '36px 24px', textAlign: 'center',
              borderRight: i < 2 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)', fontSize: '2.4rem',
                fontWeight: 900, color: 'var(--gold)', lineHeight: 1, marginBottom: 8,
              }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item, onOpen }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      id={`gallery-item-${item.id}`}
      onClick={() => onOpen(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        breakInside: 'avoid',
        marginBottom: 24,
        cursor: 'pointer',
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        border: `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
        boxShadow: hovered ? 'var(--shadow-gold)' : 'none',
        transform: hovered ? 'scale(1.015)' : 'scale(1)',
        transition: 'all 0.35s var(--ease)',
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{
          width: '100%',
          display: 'block',
          filter: hovered ? 'brightness(0.7)' : 'brightness(0.9)',
          transition: 'filter 0.35s var(--ease)',
        }}
      />

      {/* Tag */}
      <div style={{
        position: 'absolute', top: 14, left: 14,
        padding: '4px 12px',
        background: 'rgba(201,168,76,0.9)',
        borderRadius: 1,
        fontSize: '0.65rem', fontWeight: 700, color: '#000',
        letterSpacing: '0.12em', textTransform: 'uppercase',
      }}>
        {item.tag}
      </div>

      {/* Overlay info */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '24px 20px',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s var(--ease)',
      }}>
        <div style={{
          fontFamily: 'var(--font-heading)', fontSize: '1.1rem',
          fontWeight: 700, color: '#fff', marginBottom: 4,
        }}>
          {item.title}
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.08em' }}>
          by {item.artist}
        </div>
        <div style={{
          marginTop: 14,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          Click to expand
        </div>
      </div>
    </div>
  );
}

// ── CTA ──
function GalleryCTA() {
  return (
    <section style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '80px 0',
      textAlign: 'center',
    }}>
      <div className="container">
        <div className="section-label">Ready for Your Transformation?</div>
        <div className="gold-line" style={{ margin: '0 auto 24px' }} />
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Your Story <span>Starts Here</span>
        </h2>
        <p className="section-desc" style={{ margin: '0 auto 40px' }}>
          Every masterpiece in our gallery began with a single appointment. Let's create yours.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="/services#booking" className="btn-primary">
            <span>Book Your Appointment</span>
          </a>
          <a href="/about" className="btn-outline">
            Meet Our Artists
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Lightbox ──
function Lightbox({ item, onClose }) {
  return (
    <div
      id="gallery-lightbox"
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        backdropFilter: 'blur(20px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
        animation: 'fadeIn 0.25s ease',
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-hover)',
          borderRadius: 2,
          overflow: 'hidden',
          maxWidth: 900, width: '100%',
          boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
          animation: 'slideUp 0.3s ease',
          display: 'grid', gridTemplateColumns: '1.6fr 1fr',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative' }}>
          <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{
            position: 'absolute', top: 14, left: 14,
            padding: '4px 12px',
            background: 'rgba(201,168,76,0.9)',
            borderRadius: 1,
            fontSize: '0.65rem', fontWeight: 700, color: '#000', letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            {item.tag}
          </div>
        </div>

        {/* Info panel */}
        <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="section-label" style={{ marginBottom: 8 }}>{item.category}</div>
            <div className="gold-line" style={{ marginBottom: 20 }} />
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700,
              color: 'var(--text-primary)', marginBottom: 12,
            }}>
              {item.title}
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>
              A signature creation by <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{item.artist}</span>, crafted with the highest level of artistry and attention to detail that defines the LuxeGlow experience.
            </p>
            <div style={{
              padding: '16px 20px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: 2,
              marginBottom: 24,
            }}>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>Lead Artist</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>{item.artist}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="/services#booking" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Book This Style</span>
            </a>
            <button
              id="lightbox-close-btn"
              onClick={onClose}
              className="btn-outline"
              style={{ width: '100%', justifyContent: 'center', background: 'transparent' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

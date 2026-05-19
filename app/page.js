'use client';
import { useState, useEffect } from 'react';
import UilScissors from '@iconscout/react-unicons/icons/uil-brush-alt';
import UilPalette from '@iconscout/react-unicons/icons/uil-palette';
import UilSparkles from '@iconscout/react-unicons/icons/uil-star';
import UilExpand from '@iconscout/react-unicons/icons/uil-expand-alt';
import UilStar from '@iconscout/react-unicons/icons/uil-star';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <FeaturedServices />
      <GallerySection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}

// ─────────────────────── HERO ───────────────────────
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden' }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'scale(1.05)',
        transition: 'transform 8s ease-out',
        filter: 'brightness(0.35)',
      }} />

      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.85) 40%, rgba(10,10,10,0.2))' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />

      {/* Content */}
      <div className="container" style={{
        height: '100%', display: 'flex', alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          maxWidth: 680,
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.4,0,0.2,1)',
        }}>
          <div className="section-label" style={{ marginBottom: 24 }}>
            ✦ Est. 2010
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 28,
            color: 'var(--text-primary)',
          }}>
            Where Beauty <br />
            Becomes <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Art</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 500,
          }}>
            Experience luxury hair & beauty services crafted by world-class artists. 
            Your transformation awaits in our award-winning studio.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/services#booking" className="btn-primary">
              <span>Book Appointment</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/services" className="btn-outline">
              <span>View Services</span>
            </a>
          </div>

          {/* Stats */}
          <div className="responsive-flex-stack-left" style={{ display: 'flex', gap: 48, marginTop: 64 }}>
            {[
              { num: '14+', label: 'Years Experience' },
              { num: '2K+', label: 'Happy Clients' },
              { num: '25+', label: 'Expert Artists' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        opacity: 0.5,
      }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Scroll</div>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.5; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────── ABOUT SNIPPET ───────────────────────
function AboutSnippet() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="responsive-grid-2" style={{ gap: 80, alignItems: 'center' }}>
          {/* Image side */}
          <div style={{ position: 'relative' }}>
            <img
              src="/gallery1.png"
              alt="Luxe Saloon artistry"
              style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: 2 }}
            />
            {/* Accent box */}
            <div style={{
              position: 'absolute', bottom: -24, right: -24,
              background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
              padding: '24px 32px',
              borderRadius: 2,
            }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 900, color: '#000', lineHeight: 1 }}>
                #1
              </div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#000', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Rated Salon<br />in Colombo
              </div>
            </div>
            {/* Border accent */}
            <div style={{
              position: 'absolute', top: -16, left: -16,
              width: 120, height: 120,
              border: '2px solid var(--gold)',
              borderRadius: 2,
              opacity: 0.3,
            }} />
          </div>

          {/* Text side */}
          <div>
            <div className="section-label">Our Philosophy</div>
            <div className="gold-line" />
            <h2 className="section-title">
              More Than a Salon,<br />
              It's an <span>Experience</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: 24 }}>
              At Luxe Saloon, we believe every visit should leave you feeling transformed
              not just in appearance, but in confidence and spirit.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: 36 }}>
              Our team of certified artisans blends cutting-edge techniques with timeless elegance. 
              From the moment you step in, every detail from the ambiance to the personalized consultation
              is designed with your luxury experience in mind.
            </p>
            <a href="/about" className="btn-outline">Learn Our Story</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────── FEATURED SERVICES ───────────────────────
const featuredServices = [
  {
    Icon: UilScissors,
    title: 'Hair Styling',
    desc: 'Precision cuts, blowouts, and styling that define your signature look.',
    price: 'From LKR.1000',
    tag: 'Most Popular',
  },
  {
    Icon: UilPalette,
    title: 'Hair Coloring',
    desc: 'Balayage, highlights, ombré — vivid color artistry by certified colorists.',
    price: 'From LKR.2000',
    tag: 'Trending',
  },
  {
    Icon: UilSparkles,
    title: 'Spa Treatments',
    desc: 'Rejuvenating facials, scalp therapies, and full relaxation rituals.',
    price: 'From LKR.5000',
    tag: '',
  },
];

function FeaturedServices() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label">What We Offer</div>
          <div className="gold-line" style={{ margin: '0 auto 20px' }} />
          <h2 className="section-title">
            Signature <span>Services</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Each service is a curated experience, tailored precisely to you.
          </p>
        </div>

        <div className="responsive-grid-3" style={{ gap: 24 }}>
          {featuredServices.map((service, i) => (
            <ServiceHighlightCard key={i} service={service} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="/services" className="btn-outline">View All Services</a>
        </div>
      </div>
    </section>
  );
}

function ServiceHighlightCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '40px 32px',
        background: hovered ? 'var(--bg-hover)' : 'var(--bg-card)',
        border: `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
        borderRadius: 2,
        transition: 'all 0.3s var(--ease)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {service.tag && (
        <div style={{
          position: 'absolute', top: 20, right: 20,
          background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
          color: '#000', fontSize: '0.65rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '4px 10px', borderRadius: 1,
        }}>
          {service.tag}
        </div>
      )}

      <div style={{
        width: 56, height: 56,
        background: 'rgba(201, 168, 76, 0.1)',
        border: '1px solid var(--border-hover)',
        borderRadius: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 24,
        transition: 'all 0.3s',
        ...(hovered ? { background: 'rgba(201, 168, 76, 0.2)' } : {}),
      }}>
        <service.Icon size={26} color={hovered ? 'var(--gold)' : 'var(--text-secondary)'} />
      </div>

      <h3 style={{
        fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700,
        marginBottom: 12, color: 'var(--text-primary)',
      }}>
        {service.title}
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
        {service.desc}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '1rem' }}>{service.price}</span>
        <a href="/services" style={{
          fontSize: '0.8rem', color: hovered ? 'var(--gold)' : 'var(--text-muted)',
          transition: 'color 0.2s', fontWeight: 500,
        }}>
          Book →
        </a>
      </div>
    </div>
  );
}

// ─────────────────────── GALLERY ───────────────────────
function GallerySection() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div className="section-label">Our Work</div>
            <div className="gold-line" />
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              The <span>Gallery</span>
            </h2>
          </div>
          <a href="/services" className="btn-outline" style={{ padding: '10px 24px', fontSize: '0.78rem' }}>
            View All Work
          </a>
        </div>

        <div className="responsive-grid-2-1-1" style={{ gridTemplateRows: '240px 240px', gap: 16 }}>
          {[
            { src: '/gallery1.png', style: { gridRow: '1 / 3' } },
            { src: '/gallery2.png', style: {} },
            { src: '/gallery3.png', style: {} },
            { src: '/gallery4.png', style: {} },
            { src: '/gallery1.png', style: {} },
          ].map((img, i) => (
            <GalleryItem key={i} src={img.src} style={img.style} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ src, style }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden', borderRadius: 2, cursor: 'pointer', ...style,
      }}
    >
      <img src={src} alt="Gallery" style={{
        width: '100%', height: '100%', objectFit: 'cover',
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
        transition: 'transform 0.6s var(--ease)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.4)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <UilExpand size={28} color='var(--gold)' style={{
          transform: hovered ? 'scale(1)' : 'scale(0.5)',
          transition: 'transform 0.3s',
        }} />
      </div>
    </div>
  );
}

// ─────────────────────── TESTIMONIALS ───────────────────────
const testimonials = [
  {
    name: 'Kasun Perera',
    role: 'Fashion Editor',
    quote: 'Absolutely loved the haircut and beard styling. The staff was super friendly and the whole place had a premium vibe.',
    stars: 4,
  },
  {
    name: 'Tharushi Fernando',
    role: 'Content Creator',
    quote: 'I booked a facial and hair treatment before an event and the results were amazing. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Dilan Jayawardena',
    role: 'Entrepreneur',
    quote: 'Professional service with attention to detail. The hairstylists are talented and very up to date with modern trends.',
    stars: 5,
  },
];

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label">Testimonials</div>
          <div className="gold-line" style={{ margin: '0 auto 20px' }} />
          <h2 className="section-title">
            Client <span>Stories</span>
          </h2>
        </div>

        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 2, padding: '56px 64px', textAlign: 'center', position: 'relative',
          }}>
            {/* Quote mark */}
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '6rem', lineHeight: 0.8,
              color: 'var(--gold)', opacity: 0.15, position: 'absolute', top: 24, left: 40,
            }}>
              "
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 28 }}>
              {Array(testimonials[active].stars).fill(0).map((_, i) => (
                <UilStar key={i} size={20} color='var(--gold)' />
              ))}
            </div>

            <p style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontStyle: 'italic',
              color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: 36,
              transition: 'opacity 0.5s',
            }}>
              "{testimonials[active].quote}"
            </p>

            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>
                {testimonials[active].name}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--gold)', letterSpacing: '0.1em' }}>
                {testimonials[active].role}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 24 : 8, height: 8,
                  borderRadius: 4,
                  background: i === active ? 'var(--gold)' : 'var(--text-muted)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────── CTA BANNER ───────────────────────
function CTABanner() {
  return (
    <section style={{
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0d0b07 0%, #1a1408 50%, #0d0b07 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative circle */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="section-label">Ready to Transform?</div>
        <div className="gold-line" style={{ margin: '0 auto 24px' }} />
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 900,
          color: 'var(--text-primary)',
          marginBottom: 20,
        }}>
          Your Best Look <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Awaits</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
          Book your appointment today and step into a world where beauty is elevated to an art form.
        </p>
        <div className="responsive-flex-stack" style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <a href="/services#booking" className="btn-primary">
            <span>Book Appointment</span>
          </a>
          <a href="/about" className="btn-outline">
            <span>Meet Our Team</span>
          </a>
        </div>
      </div>
    </section>
  );
}

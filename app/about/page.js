'use client';
import { useState } from 'react';
import UilMapMarker from '@iconscout/react-unicons/icons/uil-map-marker';
import UilClock from '@iconscout/react-unicons/icons/uil-clock';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook';
import UilStar from '@iconscout/react-unicons/icons/uil-star';

const team = [
  {
    name: 'Sanduni Perera',
    role: 'Creative Director & Master Colorist',
    img: '/team1.png',
    specialty: 'Balayage, Color Correction',
    exp: '12 years',
    bio: 'Trained at leading beauty academies in Colombo and Singapore, Sanduni brings unparalleled color artistry and a passion for Sri Lankan bridal beauty.',
  },
  {
    name: 'Kasun Rajapaksha',
    role: 'Head Stylist & Grooming Expert',
    img: '/team2.png',
    specialty: 'Precision Cuts, Beard Grooming',
    exp: '9 years',
    bio: 'Kasun\'s signature styles blend modern Sri Lankan trends with timeless barbering craftsmanship, earning him a loyal clientele across Colombo.',
  },
  {
    name: 'Nimasha Fernando',
    role: 'Spa & Bridal Beauty Therapist',
    img: '/team3.png',
    specialty: 'Skincare, Bridal Makeup, Spa',
    exp: '8 years',
    bio: 'Certified in advanced skincare and traditional Ayurvedic beauty rituals, Nimasha transforms every bridal session into an unforgettable experience.',
  },
];

const values = [
  { num: '14+', label: 'Years of Luxury' },
  { num: '2K+', label: 'Happy Clients' },
  { num: '25+', label: 'Expert Artists' },
  { num: '5★', label: 'Average Rating' },
];

const timeline = [
  { year: '2010', title: 'The Beginning', desc: 'Founded as a boutique salon in Colombo with a passionate vision to bring world-class hair and beauty care to Sri Lankan clients.' },
  { year: '2018', title: 'Island-wide Recognition', desc: 'Awarded "Best Upcoming Bridal & Beauty Salon" at the national industry awards, earning the trust of beautiful brides across the country.' },
  { year: '2022', title: 'Flagship Expansion', desc: 'Moved to our current luxury flagship location, expanding our team to over 15+ expert hair stylists, bridal dressers, and skin care specialists.' },
  { year: '2026', title: 'Present Day', desc: 'Serving thousands of loyal clients and continuing to set the gold standard for premium bridal and luxury beauty care in Sri Lanka.' },
];

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <AboutHero />
      <ValuesBar />
      <OurStory />
      <TeamSection />
      <ContactSection />
    </div>
  );
}

// ── Hero ──
function AboutHero() {
  return (
    <section style={{
      padding: '80px 0 60px',
      background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))',
      borderBottom: '1px solid var(--border)',
      textAlign: 'center',
    }}>
      <div className="container">
        <div className="section-label">Our World</div>
        <div className="gold-line" style={{ margin: '0 auto 24px' }} />
        <h1 className="section-title" style={{ marginBottom: 20 }}>
          About <span>Luxe Saloon</span>
        </h1>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          A story born from passion, refined by excellence. Discover the team and philosophy behind New York's most celebrated salon.
        </p>
      </div>
    </section>
  );
}

// ── Values Bar ──
function ValuesBar() {
  return (
    <section style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)', padding: '48px 0' }}>
      <div className="container">
        <div className="responsive-grid-4" style={{ gap: 0 }}>
          {values.map((v, i) => (
            <div key={i} style={{
              textAlign: 'center', padding: '0 24px',
              borderRight: i < 3 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 900, color: 'var(--gold)', lineHeight: 1 }}>
                {v.num}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 8 }}>
                {v.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Our Story ──
function OurStory() {
  return (
    <section className="section">
      <div className="container">
        <div className="responsive-grid-2" style={{ gap: 80, alignItems: 'center', marginBottom: 100 }}>
          <div>
            <div className="section-label">Our Story</div>
            <div className="gold-line" />
            <h2 className="section-title">
              Born from <span>Passion</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 20 }}>
              At Luxe Saloon, beauty is more than a service it’s an experience designed to inspire confidence, elegance, and self-care.

              Founded in the heart of Colombo, Luxe Saloon was created with a vision to bring modern beauty trends, luxury treatments, and personalized care together under one roof. What started as a passion for helping clients look and feel their best has grown into a trusted beauty destination known for exceptional styling, premium products, and a relaxing salon experience.

            
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 36 }}>

              At Luxe Saloon, we believe true beauty comes from feeling comfortable in your own skin and our mission is to make every visit unforgettable
            </p>
            <a href="/services#booking" className="btn-primary">
              <span>Book Your Experience</span>
            </a>
          </div>

          <div style={{ position: 'relative' }}>
            <img src="/gallery2.png" alt="Our story" style={{ width: '100%', height: 500, objectFit: 'cover', borderRadius: 2 }} />
            <div style={{
              position: 'absolute', bottom: 24, left: 24, right: 24,
              background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(10px)',
              border: '1px solid var(--border)',
              borderRadius: 2, padding: '20px 24px',
            }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-primary)', marginBottom: 8 }}>
                "Beauty is not about perfection it's about authenticity expressed with artistry."
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 600 }}>Jagath Kumara, Founder</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label">Our Journey</div>
            <h2 className="section-title">
              14 Years of <span>Excellence</span>
            </h2>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Line */}
            <div className="hide-on-mobile" style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 1, background: 'var(--border)' }} />
            <div className="responsive-grid-4" style={{ gap: 24 }}>
              {timeline.map((item, i) => (
                <TimelineItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item }) {
  return (
    <div style={{ textAlign: 'center', padding: '0 16px' }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.75rem', fontWeight: 800, color: '#000',
        margin: '0 auto 20px',
        position: 'relative', zIndex: 1,
      }}>
        ✦
      </div>
      <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{item.year}</div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: 10 }}>{item.title}</h3>
      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
    </div>
  );
}

// ── Team ──
function TeamSection() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label">The Artists</div>
          <div className="gold-line" style={{ margin: '0 auto 20px' }} />
          <h2 className="section-title">
            Meet Our <span>Team</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            World-class artists dedicated to crafting your perfect look.
          </p>
        </div>
        <div className="responsive-grid-3" style={{ gap: 28 }}>
          {team.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)', border: `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
        borderRadius: 2, overflow: 'hidden',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s var(--ease)',
        boxShadow: hovered ? 'var(--shadow-gold)' : 'none',
      }}
    >
      <div style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
        <img src={member.img} alt={member.name} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.6s var(--ease)',
          filter: 'brightness(0.85)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 30%, transparent)',
        }} />
        <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, marginBottom: 4 }}>{member.name}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.08em' }}>{member.role}</div>
        </div>
      </div>

      <div style={{ padding: '24px 28px' }}>
        <p style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>{member.bio}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>Specialty</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 500 }}>{member.specialty}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>Experience</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 600 }}>{member.exp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Contact ──
function ContactSection() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  return (
    <section className="section" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label">Get In Touch</div>
          <div className="gold-line" style={{ margin: '0 auto 20px' }} />
          <h2 className="section-title">
            Contact <span>Us</span>
          </h2>
        </div>

        <div className="responsive-grid-1-1-5" style={{ gap: 64, alignItems: 'start' }}>
          {/* Info panel */}
          <div>
            <div style={{ marginBottom: 40 }}>
              {[
                { Icon: UilMapMarker, label: 'Address', value: 'No. 25, Marine Drive,Colombo 04, Sri Lanka' },
                { Icon: UilClock, label: 'Open Hours', value: 'Mon-Sat: 9am to 8pm\nSunday: 10am to 6pm' },
                { Icon: UilPhone, label: 'Phone', value: '066-2288563' },
                { Icon: UilEnvelope, label: 'Email', value: 'luxesaloon@gmail.com' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', gap: 20, padding: '20px 0',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <div style={{
                    width: 44, height: 44, flexShrink: 0,
                    background: 'rgba(201,168,76,0.08)', border: '1px solid var(--border)',
                    borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <item.Icon size={20} color='var(--gold)' />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', border: '1px solid var(--gold)', boxShadow: '0 0 0 3px rgba(201,168,76,0.1)' }}>
              <iframe
                title="LuxeGlow Salon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d79.8567!3d6.8835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25923c832171b%3A0x3bf37a3d91bb803!2sMarine%20Dr%2C%20Colombo%2000400%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="240"
                style={{ display: 'block', border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Address overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.95) 60%, transparent)',
                padding: '20px 16px 14px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '1rem' }}>📍</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    No. 25, Marine Drive, Colombo 04, Sri Lanka
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/search/No.+25+Marine+Drive+Colombo+04+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.72rem', fontWeight: 600, color: 'var(--gold)',
                    textDecoration: 'none', letterSpacing: '0.06em',
                    whiteSpace: 'nowrap', borderBottom: '1px solid var(--gold)', paddingBottom: 1,
                  }}
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 2, padding: '48px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 12 }}>
                  Message <span style={{ color: 'var(--gold)' }}>Sent!</span>
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 28 }}>
                  Send Us a <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Message</span>
                </h3>
                <div className="responsive-grid-2" style={{ gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input placeholder="Dinuja Heshan" value={contactForm.name}
                      onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                      style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input placeholder="dinujaheshan659@gmail.com" value={contactForm.email}
                      onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                      style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={contactForm.message}
                    onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>
                <button className="btn-primary" onClick={() => contactForm.name && contactForm.email && setSent(true)}>
                  <span>Send Message</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle = {
  display: 'block', fontSize: '0.75rem', fontWeight: 600,
  letterSpacing: '0.12em', textTransform: 'uppercase',
  color: 'var(--text-secondary)', marginBottom: 8,
};

const inputStyle = {
  width: '100%', padding: '12px 16px',
  background: 'var(--bg-secondary)',
  border: '1px solid var(--border)',
  borderRadius: 2, color: 'var(--text-primary)',
  fontSize: '0.9rem',
};

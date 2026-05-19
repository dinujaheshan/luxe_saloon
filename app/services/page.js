'use client';
import { useState } from 'react';
import UilScissors from '@iconscout/react-unicons/icons/uil-brush-alt';
import UilWind from '@iconscout/react-unicons/icons/uil-wind';
import UilPalette from '@iconscout/react-unicons/icons/uil-palette';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilBolt from '@iconscout/react-unicons/icons/uil-bolt';
import UilLeaf from '@iconscout/react-unicons/icons/uil-flower';
import UilSmile from '@iconscout/react-unicons/icons/uil-smile';
import UilGem from '@iconscout/react-unicons/icons/uil-diamond';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import UilTrophy from '@iconscout/react-unicons/icons/uil-trophy';
import UilGraduationCap from '@iconscout/react-unicons/icons/uil-graduation-cap';
import UilShield from '@iconscout/react-unicons/icons/uil-shield-check';
import UilCheck from '@iconscout/react-unicons/icons/uil-check-circle';

const allServices = [
  { Icon: UilScissors, category: 'Hair', title: 'Classic Haircut', desc: 'Precision cut tailored to your face shape and lifestyle.', price: 'LKR 2000' },
  { Icon: UilWind, category: 'Hair', title: 'Blowout & Style', desc: 'Professional blowout with your choice of style  straight, wavy, or voluminous.', price: 'LKR 5000',},
  { Icon: UilPalette, category: 'Color', title: 'Balayage', desc: 'Hand-painted, sun-kissed color for a natural, lived-in look.', price: 'LKR 8000' },
  { Icon: UilStar, category: 'Color', title: 'Full Color', desc: 'Complete root-to-tip color transformation with premium dyes.', price: 'LKR 12000', },
  { Icon: UilBolt, category: 'Color', title: 'Highlights', desc: 'Partial or full highlights to add dimension and brightness.', price: 'LKR 15000' },
  { Icon: UilLeaf, category: 'Spa', title: 'Scalp Treatment', desc: 'Deep nourishing scalp therapy to restore health and shine.', price: 'LKR 9000' },
  { Icon: UilSmile, category: 'Spa', title: 'Luxury Facial', desc: 'A 12-step rejuvenating facial using premium serums and techniques.', price: 'LKR 13000' },
  { Icon: UilGem, category: 'Nails', title: 'Gel Manicure', desc: 'Long-lasting gel polish with nail art options available.', price: 'LKR 5500', },
  { Icon: UilHeart, category: 'Bridal', title: 'Bridal Package', desc: 'Complete bridal hair, makeup, and beauty package for your special day.', price: 'LKR 10000' },
];

const steps = ['Service', 'Date & Time', 'Your Info', 'Confirm'];

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      <ServicesHero />
      <ServicesGrid />
      <BookingSection />
      <WhyChooseUs />
    </div>
  );
}

// ── Services Hero ──
function ServicesHero() {
  return (
    <section style={{
      padding: '80px 0 60px',
      background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))',
      borderBottom: '1px solid var(--border)',
      textAlign: 'center',
    }}>
      <div className="container">
        <div className="section-label">Our Services</div>
        <div className="gold-line" style={{ margin: '0 auto 24px' }} />
        <h1 className="section-title" style={{ marginBottom: 20 }}>
          Premium <span>Treatments</span>
        </h1>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Every service is a masterpiece. Browse our full menu of luxury treatments and book your preferred experience.
        </p>
      </div>
    </section>
  );
}

// ── Services Grid ──
function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Hair', 'Color', 'Spa', 'Nails', 'Bridal'];
  const filtered = activeCategory === 'All' ? allServices : allServices.filter(s => s.category === activeCategory);

  return (
    <section className="section">
      <div className="container">
        {/* Category filter */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                background: activeCategory === cat ? 'linear-gradient(135deg, var(--gold), var(--gold-dark))' : 'transparent',
                color: activeCategory === cat ? '#000' : 'var(--text-secondary)',
                border: `1px solid ${activeCategory === cat ? 'var(--gold)' : 'var(--border)'}`,
                borderRadius: 2,
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="responsive-grid-3" style={{ gap: 20 }}>
          {filtered.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '32px 28px',
        background: hovered ? 'var(--bg-hover)' : 'var(--bg-card)',
        border: `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
        borderRadius: 2,
        transition: 'all 0.3s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div style={{
          width: 48, height: 48,
          background: 'rgba(201,168,76,0.1)', border: '1px solid var(--border)',
          borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <service.Icon size={22} color='var(--gold)' />
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.1rem' }}>{service.price}</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{service.duration}</div>
        </div>
      </div>

      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 8 }}>
        {service.title}
      </h3>
      <p style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
        {service.desc}
      </p>

      <a href="#booking" style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontSize: '0.78rem', color: hovered ? 'var(--gold)' : 'var(--text-muted)',
        fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
        transition: 'color 0.2s',
        borderBottom: `1px solid ${hovered ? 'var(--gold)' : 'transparent'}`,
        paddingBottom: 2,
      }}>
        Book This Service →
      </a>
    </div>
  );
}

// ── Booking Section ──
function BookingSection() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    service: '', date: '', time: '', name: '', email: '', phone: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label">Book Your Visit</div>
          <div className="gold-line" style={{ margin: '0 auto 20px' }} />
          <h2 className="section-title">
            Reserve Your <span>Appointment</span>
          </h2>
        </div>

        {submitted ? (
          <ConfirmationView formData={formData} onReset={() => { setSubmitted(false); setStep(0); setFormData({ service: '', date: '', time: '', name: '', email: '', phone: '', notes: '' }); }} />
        ) : (
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            {/* Step indicators */}
            <div className="responsive-flex-stack-left" style={{ display: 'flex', alignItems: 'center', marginBottom: 48 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? 1 : 'none' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: i <= step ? 'linear-gradient(135deg, var(--gold), var(--gold-dark))' : 'var(--bg-card)',
                    border: `2px solid ${i <= step ? 'var(--gold)' : 'var(--border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 700,
                    color: i <= step ? '#000' : 'var(--text-muted)',
                    transition: 'all 0.3s',
                    flexShrink: 0,
                  }}>
                    {i < step ? <UilCheck size={16} color='#000' /> : i + 1}
                  </div>
                  <div style={{ marginLeft: 8, marginRight: i < steps.length - 1 ? 16 : 0 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: i <= step ? 'var(--text-primary)' : 'var(--text-muted)' }}>{s}</div>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ flex: 1, height: 1, background: i < step ? 'var(--gold)' : 'var(--border)', transition: 'background 0.3s', marginRight: 16 }} />
                  )}
                </div>
              ))}
            </div>

            {/* Form card */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 2, padding: '48px' }}>

              {/* Step 0: Choose service */}
              {step === 0 && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 8 }}>Select a Service</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 28 }}>Choose the service you'd like to book.</p>
                  <div className="responsive-grid-2" style={{ gap: 12, marginBottom: 32 }}>
                    {allServices.map((s, i) => (
                      <label key={i} style={{
                        padding: '16px 20px', borderRadius: 2, cursor: 'pointer',
                        border: `1px solid ${formData.service === s.title ? 'var(--gold)' : 'var(--border)'}`,
                        background: formData.service === s.title ? 'rgba(201,168,76,0.08)' : 'transparent',
                        transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 12,
                      }}>
                        <input type="radio" name="service" value={s.title} hidden
                          onChange={() => setFormData(f => ({ ...f, service: s.title }))} />
                        <s.Icon size={20} color={formData.service === s.title ? 'var(--gold)' : 'var(--text-muted)'} />
                        <div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{s.title}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>{s.price}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                  <button className="btn-primary" onClick={() => formData.service && setStep(1)} style={{ opacity: formData.service ? 1 : 0.5 }}>
                    <span>Continue</span>
                  </button>
                </div>
              )}

              {/* Step 1: Date & Time */}
              {step === 1 && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 8 }}>Pick Date & Time</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 28 }}>Choose a convenient date and time slot.</p>

                  <div style={{ marginBottom: 24 }}>
                    <label style={labelStyle}>Preferred Date</label>
                    <input type="date" value={formData.date}
                      onChange={e => setFormData(f => ({ ...f, date: e.target.value }))}
                      style={{
                        ...inputStyle,
                        border: '1px solid var(--gold)',
                        background: 'rgba(201,168,76,0.08)',
                        color: 'var(--gold)',
                        colorScheme: 'dark',
                        boxShadow: '0 0 0 3px rgba(201,168,76,0.1)',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: 32 }}>
                    <label style={labelStyle}>Available Time Slots</label>
                    <div className="responsive-grid-3" style={{ gap: 8 }}>
                      {timeSlots.map(t => (
                        <button key={t} onClick={() => setFormData(f => ({ ...f, time: t }))}
                          style={{
                            padding: '10px', borderRadius: 2,
                            border: `1px solid ${formData.time === t ? 'var(--gold)' : 'var(--border)'}`,
                            background: formData.time === t ? 'rgba(201,168,76,0.1)' : 'transparent',
                            color: formData.time === t ? 'var(--gold)' : 'var(--text-secondary)',
                            fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
                          }}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 12 }}>
                    <button className="btn-outline" onClick={() => setStep(0)}>← Back</button>
                    <button className="btn-primary" onClick={() => formData.date && formData.time && setStep(2)} style={{ opacity: formData.date && formData.time ? 1 : 0.5 }}>
                      <span>Continue</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Info */}
              {step === 2 && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 8 }}>Your Details</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 28 }}>Tell us a bit about yourself.</p>

                  <div className="responsive-grid-2" style={{ gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input placeholder="Dinuja Heshan" value={formData.name}
                        onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                        style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input placeholder="+94 78 427 3936" value={formData.phone}
                        onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                        style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={labelStyle}>Email Address</label>
                    <input placeholder="dinujaheshan659@gmail.com" value={formData.email}
                      onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                      style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: 32 }}>
                    <label style={labelStyle}>Special Requests (optional)</label>
                    <textarea placeholder="Any preferences or notes..." value={formData.notes}
                      onChange={e => setFormData(f => ({ ...f, notes: e.target.value }))}
                      rows={3}
                      style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>

                  <div style={{ display: 'flex', gap: 12 }}>
                    <button className="btn-outline" onClick={() => setStep(1)}>← Back</button>
                    <button className="btn-primary" onClick={() => formData.name && formData.email && setStep(3)} style={{ opacity: formData.name && formData.email ? 1 : 0.5 }}>
                      <span>Review Booking</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirm */}
              {step === 3 && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 24 }}>Confirm Your Booking</h3>
                  <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 2, padding: 24, marginBottom: 32 }}>
                    {[
                      ['Service', formData.service],
                      ['Date', formData.date],
                      ['Time', formData.time],
                      ['Name', formData.name],
                      ['Email', formData.email],
                      ['Phone', formData.phone],
                    ].map(([label, value]) => value && (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{label}</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>{value}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: 12 }}>
                    <button className="btn-outline" onClick={() => setStep(2)}>← Back</button>
                    <button className="btn-primary" onClick={handleSubmit}>
                      <span>Confirm Appointment</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ConfirmationView({ formData, onReset }) {
  return (
    <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        background: 'rgba(201,168,76,0.1)', border: '2px solid var(--gold)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 32px',
      }}>
        <UilCheck size={40} color='var(--gold)' />
      </div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: 16 }}>
        Booking <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Confirmed!</span>
      </h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>
        Thank you, <strong style={{ color: 'var(--text-primary)' }}>{formData.name}</strong>! Your appointment for <strong style={{ color: 'var(--gold)' }}>{formData.service}</strong> on {formData.date} at {formData.time} has been confirmed. A confirmation will be sent to {formData.email}.
      </p>
      <button className="btn-primary" onClick={onReset}>
        <span>Book Another</span>
      </button>
    </div>
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
  transition: 'border-color 0.2s',
};

// ── Why Choose Us ──
const whyUs = [
  { Icon: UilTrophy, title: 'Award-Winning', desc: 'Recognized as Sri Lanka\'s top luxury salon for 5 consecutive years.' },
  { Icon: UilGraduationCap, title: 'Expert Artists', desc: 'Our team trains at leading institutes in Paris, Milan & New York.' },
  { Icon: UilLeaf, title: 'Eco-Friendly', desc: 'We use only premium, cruelty-free, and sustainable products.' },
  { Icon: UilShield, title: 'Satisfaction Guaranteed', desc: 'Not happy? We\'ll make it right — always.' },
];

function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label">Why Luxe</div>
          <div className="gold-line" style={{ margin: '0 auto 20px' }} />
          <h2 className="section-title">
            The <span>Luxe</span> Difference
          </h2>
        </div>
        <div className="responsive-grid-4" style={{ gap: 24 }}>
          {whyUs.map((item, i) => (
            <div key={i} style={{
              padding: '36px 28px', background: 'var(--bg-card)',
              border: '1px solid var(--border)', borderRadius: 2, textAlign: 'center',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: 20 }}><item.Icon size={36} color='var(--gold)' /></div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: 12 }}>{item.title}</h3>
              <p style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

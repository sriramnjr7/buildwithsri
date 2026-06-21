'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import styles from './FeaturedConcepts.module.css';

const concepts = [
  {
    id: 'clinic',
    label: 'Clinic',
    icon: '🏥',
    title: 'Modern Clinic Website',
    description: 'A clean, trustworthy design that makes patients feel confident. Online appointment booking, doctor profiles, and 24/7 AI assistant for common queries.',
    features: ['Online Appointment Booking', 'Doctor Profiles & Specializations', 'AI Patient Query Assistant', 'Mobile-First Design', 'Google Maps Integration', 'Patient Testimonials'],
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #064E3B 100%)',
    preview: {
      nav: ['Home', 'Doctors', 'Services', 'Book Appointment'],
      headline: 'Your Health, Our Priority',
      subheadline: 'Book appointments online. Get answers 24/7.',
      cta: 'Book Appointment',
      cards: ['Dr. Patel — Cardiology', 'Dr. Sharma — Pediatrics', 'Dr. Singh — Orthopedics'],
    },
  },
  {
    id: 'restaurant',
    label: 'Restaurant',
    icon: '🍽️',
    title: 'Restaurant & Café Website',
    description: 'A mouth-watering design that fills tables. Digital menu with photos, online table reservations, Google Business integration, and delivery ordering.',
    features: ['Digital Menu with Photos', 'Online Table Reservation', 'Google Business Integration', 'Delivery/Takeaway Orders', 'Customer Reviews', 'Location & Hours'],
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #78350F 100%)',
    preview: {
      nav: ['Menu', 'Reservations', 'About', 'Order Online'],
      headline: 'Authentic Flavors, Modern Experience',
      subheadline: 'Browse our menu. Reserve your table. Order online.',
      cta: 'Reserve a Table',
      cards: ['Starters — from ₹199', 'Main Course — from ₹349', 'Chef\'s Special — ₹599'],
    },
  },
  {
    id: 'realestate',
    label: 'Real Estate',
    icon: '🏠',
    title: 'Real Estate Business Website',
    description: 'A property showcase that captures leads. Beautiful listing pages, advanced search filters, virtual tour embeds, and automated lead follow-ups.',
    features: ['Property Listings with Filters', 'High-Quality Image Galleries', 'Lead Capture Forms', 'Virtual Tour Integration', 'Agent Profiles', 'Neighborhood Guides'],
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)',
    preview: {
      nav: ['Properties', 'Buy', 'Rent', 'Contact Agent'],
      headline: 'Find Your Dream Property',
      subheadline: 'Browse listings. Schedule visits. Close deals faster.',
      cta: 'View Properties',
      cards: ['2BHK Flat — ₹45L', '3BHK Villa — ₹1.2Cr', 'Commercial — ₹80L'],
    },
  },
];

export default function FeaturedConcepts() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const active = concepts[activeTab];

  return (
    <section className="section" id="concepts" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="WEBSITE CONCEPTS"
          title="Imagine What Your Business Could Look Like"
          subtitle="Here's a preview of what I build for businesses like yours."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.tabs}>
            {concepts.map((c, i) => (
              <button
                key={c.id}
                className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <span className={styles.tabIcon}>{c.icon}</span>
                {c.label}
              </button>
            ))}
          </div>

          <div className={styles.showcase}>
            <div className={styles.previewWrap}>
              <div className={styles.browserChrome}>
                <div className={styles.browserDots}>
                  <span /><span /><span />
                </div>
                <div className={styles.browserUrl}>www.your-{active.id}.com</div>
              </div>
              <div className={styles.preview} style={{ background: active.gradient }}>
                <nav className={styles.previewNav}>
                  <span className={styles.previewLogo}>{active.icon}</span>
                  <div className={styles.previewNavLinks}>
                    {active.preview.nav.map((n, i) => (
                      <span key={i} className={styles.previewNavLink}>{n}</span>
                    ))}
                  </div>
                </nav>
                <div className={styles.previewHero}>
                  <h3 className={styles.previewHeadline}>{active.preview.headline}</h3>
                  <p className={styles.previewSub}>{active.preview.subheadline}</p>
                  <span className={styles.previewCta} style={{ background: active.color }}>
                    {active.preview.cta}
                  </span>
                </div>
                <div className={styles.previewCards}>
                  {active.preview.cards.map((c, i) => (
                    <div key={i} className={styles.previewCard}>{c}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.info}>
              <h3 className={styles.infoTitle}>{active.title}</h3>
              <p className={styles.infoDesc}>{active.description}</p>
              <ul className={styles.infoFeatures}>
                {active.features.map((f, i) => (
                  <li key={i}>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill={active.color}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="#contact" variant="primary" size="md" icon={<span>→</span>}>
                I Want This for My Business
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

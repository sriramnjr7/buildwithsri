'use client';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import styles from './Industries.module.css';

const industries = [
  { icon: '🍽️', name: 'Restaurants & Cafés', tagline: 'Get found online. Fill more tables.', example: 'Menu website + Google integration + online reservations' },
  { icon: '🏥', name: 'Clinics & Healthcare', tagline: 'Let patients book anytime. Answer questions 24/7.', example: 'Appointment website + AI assistant for patient queries' },
  { icon: '🏠', name: 'Real Estate', tagline: 'Showcase listings. Capture leads. Close faster.', example: 'Property listing site + lead capture + CRM dashboard' },
  { icon: '🎓', name: 'Educational Institutes', tagline: 'Modern presence. Automated admissions.', example: 'Institute website + inquiry chatbot + student dashboard' },
  { icon: '💼', name: 'Consultants & Freelancers', tagline: 'Look as professional as you are.', example: 'Premium website + booking system + automated follow-ups' },
  { icon: '🏪', name: 'Local Businesses', tagline: 'Compete with the big brands — digitally.', example: 'Business website + Google Business optimization + analytics' },
];

export default function Industries() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section-alt" id="industries" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="INDUSTRIES"
          title="I Work With Businesses Like Yours"
          subtitle="Whether you run a restaurant, clinic, or consulting firm — I've built solutions for businesses just like yours."
        />

        <div className={`grid-6 ${styles.grid}`}>
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <a href="#contact" className={styles.cardLink}>
                <GlassCard className={styles.card}>
                  <span className={styles.icon}>{ind.icon}</span>
                  <h3 className={styles.name}>{ind.name}</h3>
                  <p className={styles.tagline}>{ind.tagline}</p>
                  <p className={styles.example}>{ind.example}</p>
                  <span className={styles.arrow}>→</span>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

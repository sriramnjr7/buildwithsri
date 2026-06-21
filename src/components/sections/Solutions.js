'use client';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import styles from './Solutions.module.css';

const solutions = [
  {
    icon: '🌐',
    title: 'Modern Business Websites',
    headline: 'A Website That Brings You Customers — Not Just Visits',
    forWho: 'Restaurants, clinics, real estate agents, consultants',
    description: 'A fast, mobile-first, SEO-optimized website designed to convert visitors into paying customers.',
    result: 'Businesses see 2-3x more inquiries after upgrading their website',
    features: ['Custom design', 'Mobile responsive', 'Google-optimized', 'Contact forms & maps'],
    price: '₹24,999+',
  },
  {
    icon: '🤖',
    title: 'AI Assistants & Chatbots',
    headline: 'An AI That Handles Customer Questions So You Don\'t Have To',
    forWho: 'Clinics, educational institutes, service businesses',
    description: 'A custom AI assistant trained on your business — answers queries, books appointments, works 24/7.',
    result: 'Save 20+ hours/week on repetitive customer support',
    features: ['Trained on your data', 'WhatsApp integration', 'Multi-language', '24/7 availability'],
    price: '₹49,999+',
  },
  {
    icon: '⚡',
    title: 'Business Automation',
    headline: 'Automate the Work That\'s Eating Your Time',
    forWho: 'Any business doing repetitive manual work',
    description: 'Custom automation for invoicing, follow-ups, scheduling, reporting, and data entry.',
    result: 'Reduce manual work by 80%',
    features: ['CRM integration', 'Automated emails/SMS', 'Invoice generation', 'Custom workflows'],
    price: 'Custom Quote',
  },
  {
    icon: '📊',
    title: 'Data Dashboards',
    headline: 'Know Exactly How Your Business Is Performing — Live',
    forWho: 'Business owners making decisions on gut feeling',
    description: 'A live dashboard showing revenue, leads, operations, and trends in real time.',
    result: 'Make confident decisions backed by real-time data',
    features: ['Custom metrics', 'Automated reports', 'Mobile-friendly', 'Real-time updates'],
    price: 'Custom Quote',
  },
];

export default function Solutions() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section className="section" id="solutions" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="SOLUTIONS"
          title="Technology That Grows Your Business"
          subtitle="Each solution is built with the same engineering standards used at Fortune 500 companies — tailored for your business."
        />

        <div className={styles.grid}>
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <GlassCard className={styles.card} glow>
                <div className={styles.cardHeader}>
                  <span className={styles.icon}>{solution.icon}</span>
                  <div>
                    <h3 className={styles.title}>{solution.title}</h3>
                    <p className={styles.forWho}>{solution.forWho}</p>
                  </div>
                </div>

                <p className={styles.headline}>{solution.headline}</p>
                <p className={styles.description}>{solution.description}</p>

                <div className={styles.resultBadge}>
                  <span className={styles.resultIcon}>📈</span>
                  {solution.result}
                </div>

                <ul className={styles.features}>
                  {solution.features.map((f, j) => (
                    <li key={j} className={styles.feature}>
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--accent-primary)">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <span className={styles.price}>
                    {solution.price !== 'Custom Quote' && <span className={styles.from}>Starting from</span>}
                    {solution.price}
                  </span>
                  <Button href="#contact" variant="ghost" size="sm" icon={<span>→</span>}>
                    Get Started
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

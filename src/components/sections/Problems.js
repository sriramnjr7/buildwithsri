'use client';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import styles from './Problems.module.css';

const problems = [
  {
    icon: '📱',
    text: '"My website looks like it was built in 2015 and I\'m embarrassed to share the link"',
  },
  {
    icon: '🤖',
    text: '"I spend hours every day answering the same customer questions over and over"',
  },
  {
    icon: '⏰',
    text: '"I\'m drowning in manual work — invoicing, follow-ups, scheduling — it never ends"',
  },
  {
    icon: '📊',
    text: '"I have no visibility into what\'s working in my business and what\'s not"',
  },
];

export default function Problems() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section-alt" id="problems" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="SOUND FAMILIAR?"
          title="These Problems Are Costing You Customers"
          subtitle="If any of these sound like your business, you're not alone — and I can help."
        />

        <div className={`grid-2 ${styles.grid}`}>
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <GlassCard className={styles.card}>
                <span className={styles.icon}>{problem.icon}</span>
                <p className={styles.text}>{problem.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button href="#contact" variant="primary" size="lg" icon={<span>→</span>}>
            I Solve All of These — Let&apos;s Talk
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

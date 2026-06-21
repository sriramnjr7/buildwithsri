'use client';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import styles from './WhyThisMatters.module.css';

const insights = [
  {
    icon: '📱',
    stat: '75%',
    title: 'of customers judge your business credibility by your website design.',
    detail: 'If your site looks outdated, you\'re losing customers before they ever call you.',
  },
  {
    icon: '🤖',
    stat: '20+ hrs',
    title: 'saved per week with AI assistants handling customer queries.',
    detail: 'Your competitors are automating while you\'re still answering the same questions manually.',
  },
  {
    icon: '📊',
    stat: '5×',
    title: 'faster decisions made by businesses using real-time data dashboards.',
    detail: 'Gut feelings don\'t scale. Data does.',
  },
];

export default function WhyThisMatters() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section" id="why-this-matters" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="WHY THIS MATTERS"
          title="Your Competitors Are Already Going Digital."
          subtitle="In today's market, businesses without a modern digital presence are losing customers every day. Here's what the data shows."
        />

        <div className={`grid-3 ${styles.grid}`}>
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <GlassCard className={styles.card}>
                <span className={styles.icon}>{insight.icon}</span>
                <span className={styles.stat}>{insight.stat}</span>
                <p className={styles.title}>{insight.title}</p>
                <p className={styles.detail}>{insight.detail}</p>
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
          <p className={styles.ctaText}>Not sure where your business stands?</p>
          <Button href="#free-audit" variant="secondary" size="md" icon={<span>→</span>}>
            Get a Free Website Audit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

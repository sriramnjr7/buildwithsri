'use client';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import styles from './ProvenResults.module.css';

const projects = [
  {
    context: 'Built at a Fortune 500 financial institution',
    title: 'Enterprise Data Pipeline',
    challenge: 'Processing millions of financial records with strict accuracy and compliance requirements.',
    solution: 'Automated data pipeline replacing manual processing with engineered reliability.',
    metrics: [
      { icon: '⚡', value: '10×', label: 'Faster processing' },
      { icon: '📉', value: '90%', label: 'Fewer manual errors' },
      { icon: '🔒', value: '100%', label: 'Compliance maintained' },
    ],
  },
  {
    context: 'Built at a major global bank',
    title: 'Risk Analytics Dashboard',
    challenge: 'Risk teams relying on static spreadsheets with no real-time visibility across business lines.',
    solution: 'Real-time analytics dashboard consolidating multiple data sources into actionable insights.',
    metrics: [
      { icon: '📊', value: 'Real-time', label: 'Risk visibility (was weekly)' },
      { icon: '⏱️', value: 'Days→Hours', label: 'Decision time reduced' },
      { icon: '👥', value: '50+', label: 'Daily active analysts' },
    ],
  },
  {
    context: 'Built at an enterprise financial services firm',
    title: 'Automated Reporting System',
    challenge: 'Teams spending 15+ hours per week generating and distributing reports manually.',
    solution: 'Fully automated reporting pipeline with scheduled generation and delivery.',
    metrics: [
      { icon: '⏰', value: '15+ hrs', label: 'Saved per week per team' },
      { icon: '📧', value: 'Auto', label: 'Daily/weekly delivery' },
      { icon: '🎯', value: 'Zero', label: 'Manual intervention' },
    ],
  },
];

export default function ProvenResults() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section className="section-alt" id="results" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="PROVEN AT ENTERPRISE SCALE"
          title="I've Built Systems That Handle Millions"
          subtitle="Now I bring that same expertise to your business — at a fraction of the cost."
        />

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <GlassCard className={styles.card}>
                <span className={styles.context}>{project.context}</span>
                <h3 className={styles.title}>{project.title}</h3>

                <div className={styles.story}>
                  <div className={styles.storyItem}>
                    <span className={styles.storyLabel}>Challenge</span>
                    <p className={styles.storyText}>{project.challenge}</p>
                  </div>
                  <div className={styles.storyItem}>
                    <span className={styles.storyLabel}>Solution</span>
                    <p className={styles.storyText}>{project.solution}</p>
                  </div>
                </div>

                <div className={styles.metrics}>
                  {project.metrics.map((m, j) => (
                    <div key={j} className={styles.metric}>
                      <span className={styles.metricIcon}>{m.icon}</span>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
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
            Get Enterprise-Grade Results for Your Business
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

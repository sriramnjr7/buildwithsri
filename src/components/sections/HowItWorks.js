'use client';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import styles from './HowItWorks.module.css';

const steps = [
  { num: '01', title: 'Free Discovery Call', desc: 'We talk about your business, your goals, and what you need. No jargon. No pressure. Just a conversation.' },
  { num: '02', title: 'Clear Proposal', desc: 'You get a detailed plan with scope, timeline, and a fixed price. No hidden costs. No scope creep.' },
  { num: '03', title: 'Build & Review', desc: 'I build. You review. We iterate until it\'s exactly right. You\'re involved at every step — not left in the dark.' },
  { num: '04', title: 'Launch + Support', desc: 'We launch together. I stick around for 30 days to make sure everything works perfectly.' },
];

export default function HowItWorks() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section" id="process" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="MY PROCESS"
          title="Simple. Transparent. No Surprises."
          subtitle="From first call to final launch — here's exactly how we'll work together."
        />

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.step}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={styles.stepNumber}>
                <span className={styles.num}>{step.num}</span>
                {i < steps.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button href="#contact" variant="primary" size="lg" icon={<span>→</span>}>
            Start with a Free Call
          </Button>
          <p className={styles.ctaNote}>
            You work with me directly — start to finish. No juniors. No hand-offs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

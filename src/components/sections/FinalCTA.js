'use client';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import Button from '../ui/Button';
import styles from './FinalCTA.module.css';
import { CALENDLY_URL } from '@/config/constants';

export default function FinalCTA() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className={styles.section} id="contact" ref={ref}>
      <div className={styles.bgGlow} />
      <div className={styles.bgGlow2} />
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Let&apos;s Build Something That <span className="gradient-text">Grows Your Business</span>
          </h2>
          <p className={styles.subtitle}>
            Book a free 15-minute call. No commitment. Just a straightforward conversation
            about what technology can do for your business.
          </p>

          <div className={styles.ctas}>
            <Button
              href={CALENDLY_URL}
              variant="primary"
              size="lg"
              icon={<span>→</span>}
            >
              Book a Free Consultation
            </Button>
            <Button href="#free-audit" variant="secondary" size="lg">
              or get a Free Website Audit first
            </Button>
          </div>

          <div className={styles.trust}>
            <span>✓ No obligation</span>
            <span>✓ Fixed pricing</span>
            <span>✓ Enterprise experience</span>
            <span>✓ Direct access to me</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

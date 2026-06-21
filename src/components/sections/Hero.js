/* eslint-disable react-hooks/set-state-in-effect */
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import styles from './Hero.module.css';

const ParticleField = dynamic(() => import('../three/ParticleField'), { ssr: false });

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] } },
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className={styles.hero} id="hero">
      <ParticleField />

      <div className={styles.gradientOverlay} />

      <div className={`container ${styles.content}`}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={mounted ? 'show' : 'hidden'}
          className={styles.inner}
        >
          <motion.div variants={item}>
            <Badge variant="success">
              <span className={styles.statusDot} />
              Available for New Projects
            </Badge>
          </motion.div>

          <motion.h1 variants={item} className={styles.title}>
            I Build <span className="gradient-text">Websites, AI Assistants</span>
            <br />
            & Automation That <span className="gradient-text">Grow Your Business</span>
          </motion.h1>

          <motion.p variants={item} className={styles.subtitle}>
            Independent technology consultant with enterprise experience from
            JPMorgan Chase — helping local businesses, clinics, and startups
            modernize with solutions that actually deliver results.
          </motion.p>

          <motion.div variants={item} className={styles.ctas}>
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              icon={<span>→</span>}
            >
              Book a Free Consultation
            </Button>
            <Button href="#solutions" variant="secondary" size="lg">
              See How I Help ↓
            </Button>
          </motion.div>

          <motion.p variants={item} className={styles.microcopy}>
            Enterprise experience • Free consultation • No obligation
          </motion.p>

          <motion.div variants={item} className={styles.trustStrip}>
            <span className={styles.trustItem}>
              <span className={styles.trustHighlight}>Enterprise Experience</span> from JPMorgan Chase
            </span>
            <span className={styles.trustDivider}>•</span>
            <span className={styles.trustItem}>
              <span className={styles.trustHighlight}>50+</span> Projects Delivered
            </span>
            <span className={styles.trustDivider}>•</span>
            <span className={styles.trustItem}>
              <span className={styles.trustHighlight}>₹2Cr+</span> Business Impact
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}

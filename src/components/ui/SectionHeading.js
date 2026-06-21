'use client';
import { useInView } from '@/hooks/useInView';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ eyebrow, title, subtitle, gradient = false, align = 'center' }) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`${styles.heading} ${styles[align]} ${isInView ? styles.visible : ''}`}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>{eyebrow}</span>
      )}
      <h2 className={`${styles.title} ${gradient ? 'gradient-text' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={styles.subtitle}>{subtitle}</p>
      )}
      <div className={styles.accent} />
    </div>
  );
}

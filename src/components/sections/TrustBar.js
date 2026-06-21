'use client';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useInView } from '@/hooks/useInView';
import styles from './TrustBar.module.css';

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 6, suffix: '+', label: 'Industries Served' },
];

export default function TrustBar() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section className={styles.section} ref={ref} id="trust">
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.bar} ${isInView ? styles.visible : ''}`}>
          <div className={styles.enterprise}>
            <span className={styles.label}>Enterprise Experience from</span>
            <span className={styles.jpmc}>JPMorgan Chase</span>
          </div>

          <div className={styles.divider} />

          <div className={styles.stats}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statValue}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

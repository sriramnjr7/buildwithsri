'use client';
import styles from './GlassCard.module.css';

export default function GlassCard({ children, className = '', hoverable = true, glow = false, style = {} }) {
  return (
    <div
      className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${glow ? styles.glow : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

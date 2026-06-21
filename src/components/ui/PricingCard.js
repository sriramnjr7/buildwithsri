'use client';
import styles from './PricingCard.module.css';
import Button from './Button';

export default function PricingCard({ name, price, period, description, features, cta, ctaHref, popular = false }) {
  return (
    <div className={`${styles.card} ${popular ? styles.popular : ''}`}>
      {popular && <div className={styles.popularBadge}>Most Popular</div>}
      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceWrap}>
          <span className={styles.price}>{price}</span>
          {period && <span className={styles.period}>{period}</span>}
        </div>
      </div>
      <ul className={styles.features}>
        {features.map((feature, i) => (
          <li key={i} className={styles.feature}>
            <svg className={styles.check} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button href={ctaHref} variant={popular ? 'primary' : 'secondary'} size="lg" className={styles.cta}>
        {cta}
      </Button>
    </div>
  );
}

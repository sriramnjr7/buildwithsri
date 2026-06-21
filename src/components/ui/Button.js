'use client';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  icon,
  ...props
}) {
  const classNames = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        <span className={styles.content}>
          {children}
          {icon && <span className={styles.icon}>{icon}</span>}
        </span>
        {variant === 'primary' && <span className={styles.shimmer} />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classNames} {...props}>
      <span className={styles.content}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </span>
      {variant === 'primary' && <span className={styles.shimmer} />}
    </button>
  );
}

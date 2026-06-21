'use client';
import { useState } from 'react';
import styles from './Accordion.module.css';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
          <button
            className={styles.trigger}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            id={`faq-trigger-${i}`}
            aria-controls={`faq-content-${i}`}
          >
            <span className={styles.question}>{item.question}</span>
            <svg
              className={styles.chevron}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div
            className={styles.content}
            id={`faq-content-${i}`}
            role="region"
            aria-labelledby={`faq-trigger-${i}`}
          >
            <p className={styles.answer}>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

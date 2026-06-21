'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import Button from '../ui/Button';
import styles from './FreeAudit.module.css';

export default function FreeAudit() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className={styles.section} id="free-audit" ref={ref}>
      <div className={styles.bgGlow} />
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.content}>
            <span className={styles.eyebrow}>FREE OFFER</span>
            <h2 className={styles.title}>
              Get a Free Website Audit — Find Out What&apos;s Costing You Customers
            </h2>
            <p className={styles.subtitle}>
              I&apos;ll personally review your current website and send you a detailed report covering:
            </p>
            <ul className={styles.checklist}>
              <li>✓ Mobile responsiveness score</li>
              <li>✓ Page speed analysis</li>
              <li>✓ SEO issues hurting your Google ranking</li>
              <li>✓ User experience problems</li>
              <li>✓ Security vulnerabilities</li>
              <li>✓ 3 specific recommendations to improve</li>
            </ul>
            <p className={styles.note}>
              No strings attached. You&apos;ll receive your audit within 48 hours.
            </p>
          </div>

          <div className={styles.formWrap}>
            {status === 'success' ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✅</span>
                <h3>Audit Request Received!</h3>
                <p>I&apos;ll personally review your website and send you a detailed report within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="Free Website Audit Request" />
                <input type="hidden" name="from_name" value="Website Audit Form" />

                <div className={styles.field}>
                  <label htmlFor="audit-name">Your Name</label>
                  <input type="text" id="audit-name" name="name" required placeholder="John Doe" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="audit-email">Email Address</label>
                  <input type="email" id="audit-email" name="email" required placeholder="john@business.com" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="audit-website">Your Website URL</label>
                  <input type="url" id="audit-website" name="website" required placeholder="https://yourbusiness.com" />
                </div>
                
                {status === 'error' && (
                  <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>
                    Something went wrong. Please email me directly at{' '}
                    <a href="mailto:hello@sriram.dev" style={{ textDecoration: 'underline' }}>
                      hello@sriram.dev
                    </a>
                  </p>
                )}

                <Button type="submit" variant="primary" size="lg" className={styles.submitBtn} disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Get My Free Audit →'}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

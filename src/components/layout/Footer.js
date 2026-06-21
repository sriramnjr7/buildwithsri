import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.topBorder} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>S</span>
            <span className={styles.logoText}>Sriram S</span>
          </div>
          <p className={styles.tagline}>AI & Web Solutions for Modern Businesses</p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Solutions</h4>
            <a href="#solutions" className={styles.link}>Business Websites</a>
            <a href="#solutions" className={styles.link}>AI Assistants</a>
            <a href="#solutions" className={styles.link}>Automation</a>
            <a href="#solutions" className={styles.link}>Data Dashboards</a>
          </div>
          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Quick Links</h4>
            <a href="#industries" className={styles.link}>Industries</a>
            <a href="#pricing" className={styles.link}>Pricing</a>
            <a href="#faq" className={styles.link}>FAQ</a>
            <a href="#contact" className={styles.link}>Contact</a>
          </div>
        </div>

        <div className={styles.social}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:hello@sriram.dev" className={styles.socialLink} aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>© {new Date().getFullYear()} Sriram S. All rights reserved.</p>
        <button
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

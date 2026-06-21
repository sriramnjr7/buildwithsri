'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <span className={styles.logoIcon}>S</span>
          <span className={styles.logoText}>Sriram</span>
        </a>

        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <Button href="#contact" size="sm" variant="primary">
            Get in Touch
          </Button>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileNavInner}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className={styles.mobileCta}
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
}

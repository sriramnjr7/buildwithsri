'use client';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '../ui/SectionHeading';
import PricingCard from '../ui/PricingCard';
import Button from '../ui/Button';
import styles from './Pricing.module.css';

const tiers = [
  {
    name: 'Starter Website',
    price: '₹24,999+',
    description: 'For businesses that need a professional web presence to attract customers.',
    features: [
      'Modern 5-page website',
      'Mobile responsive design',
      'Contact form + Google Maps',
      'Basic SEO setup',
      '2-week delivery',
      '14 days post-launch support',
    ],
    cta: 'Book a Call',
    ctaHref: '#contact',
    popular: false,
  },
  {
    name: 'Business Growth',
    price: '₹49,999+',
    description: 'For businesses ready to attract more customers and automate operations.',
    features: [
      'Everything in Starter',
      'AI chatbot or booking integration',
      'Advanced SEO + Google Analytics',
      'Custom functionality & integrations',
      '3-week delivery',
      '30 days post-launch support',
    ],
    cta: 'Book a Call',
    ctaHref: '#contact',
    popular: true,
  },
  {
    name: 'AI & Automation',
    price: 'Custom Quote',
    description: 'For businesses wanting full digital transformation with AI and automation.',
    features: [
      'Everything in Growth',
      'Custom AI assistant / chatbot',
      'Automation workflows',
      'Data dashboard & analytics',
      'Ongoing monthly support',
      'Priority delivery & communication',
    ],
    cta: 'Book a Call',
    ctaHref: '#contact',
    popular: false,
  },
];

export default function Pricing() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section-alt" id="pricing" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="INVESTMENT"
          title="Enterprise Quality. Transparent Pricing."
          subtitle="Every project is scoped to your specific needs. Here's where most projects start."
        />

        <div className={styles.grid}>
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <PricingCard {...tier} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className={styles.note}>
            Enterprise quality at independent pricing. No agency overhead. No junior developers.
            <br />You work directly with me.
          </p>
          <Button href="#contact" variant="ghost" size="md" icon={<span>→</span>}>
            Not sure which tier? Book a free call and I&apos;ll recommend
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

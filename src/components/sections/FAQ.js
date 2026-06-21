'use client';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '../ui/SectionHeading';
import Accordion from '../ui/Accordion';
import styles from './FAQ.module.css';

const faqItems = [
  {
    question: "I'm not technical at all. Will I understand what's happening?",
    answer: "Absolutely. I explain everything in plain English — no jargon. You'll always know what I'm building, why I'm building it, and how it helps your business. I keep you involved at every step.",
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Websites: 2-3 weeks. AI chatbots: 2-3 weeks. Full automation setups: 3-4 weeks. You\'ll get exact timelines in your proposal before we start — no surprises.',
  },
  {
    question: "What if I don't like the design?",
    answer: "You review everything before launch. I iterate until you're completely satisfied — that's included in the price. I don't launch anything you're not 100% happy with.",
  },
  {
    question: 'Why should I work with an independent consultant instead of an agency?',
    answer: "With me, you get direct access to someone with enterprise experience from JPMorgan Chase — not a junior developer learning on your project. No middlemen. No communication gaps. And at a fraction of agency pricing.",
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Every project includes post-launch support (14-30 days depending on the plan). I also offer affordable monthly maintenance plans for ongoing updates, monitoring, and improvements.',
  },
  {
    question: 'Can you work with my specific type of business?',
    answer: "I've built solutions for restaurants, clinics, real estate agents, educational institutes, consultants, and many more. Book a free call and let's discuss your specific needs — I'll tell you exactly how I can help.",
  },
  {
    question: "What's included in the free website audit?",
    answer: "I personally review your website for speed, SEO, mobile responsiveness, security, and user experience. You get a detailed report with specific, actionable recommendations — no strings attached.",
  },
];

export default function FAQ() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section" id="faq" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          subtitle="Everything you need to know before we start working together."
        />
        <div className={`${styles.wrapper} ${isInView ? styles.visible : ''}`}>
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}

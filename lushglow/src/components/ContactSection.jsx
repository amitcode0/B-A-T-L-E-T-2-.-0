import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ContactSection.css';

export default function ContactSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <motion.div
        className="contact-parallax-bg"
        style={{ y }}
        aria-hidden="true"
      />
      <motion.div
        className="contact-container advanced"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-accent" />
        <h2>Contact Us</h2>
        <div className="contact-subtitle">We'd love to hear from you! Send us a message and our beauty experts will get back to you soon.</div>
        <div className="contact-info-block">
          <div className="contact-info-item">
            <span className="contact-info-icon" aria-label="Phone">
              <svg width="20" height="20" fill="none" stroke="var(--color-gold)" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
            </span>
            <span className="contact-info-text">+1 (555) 123-4567</span>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon" aria-label="Email">
              <svg width="20" height="20" fill="none" stroke="var(--color-gold)" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
            </span>
            <span className="contact-info-text">hello@lushglow.com</span>
          </div>
        </div>
        <form className="contact-form" autoComplete="off">
          <motion.div className="form-group" whileFocus={{ scale: 1.04 }}>
            <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
          </motion.div>
          <motion.div className="form-group" whileFocus={{ scale: 1.04 }}>
            <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
          </motion.div>
          <motion.div className="form-group" whileFocus={{ scale: 1.04 }}>
            <textarea name="message" placeholder="Your Message" required className="contact-input" rows={4} />
          </motion.div>
          <motion.button
            type="submit"
            className="contact-submit"
            whileHover={{ scale: 1.06, boxShadow: '0 0 16px 2px var(--color-gold)' }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
} 
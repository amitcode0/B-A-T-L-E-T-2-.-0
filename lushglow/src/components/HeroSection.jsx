import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const bgUrl = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1500&q=80';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: `url(${bgUrl})` }} />
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LushGlow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Luxury Beauty, Reimagined
        </motion.p>
        <motion.button
          className="hero-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.08, boxShadow: '0 0 24px 8px var(--color-button-glow)' }}
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
} 
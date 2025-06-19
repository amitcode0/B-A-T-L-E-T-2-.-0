import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const aboutImg = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-img-wrap"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img src={aboutImg} alt="Luxury Beauty Product" className="about-img" />
        </motion.div>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>About LushGlow</h2>
          <p>
            <strong>LushGlow</strong> is dedicated to redefining luxury skincare. Our products are crafted with the finest natural ingredients, blending science and nature for radiant, healthy skin.
          </p>
          <ul className="about-list">
            <li><strong>Clean Formulas:</strong> Free from parabens, sulfates, and harsh chemicals.</li>
            <li><strong>Premium Ingredients:</strong> Infused with real pearl extract, hyaluronic acid, and botanical oils.</li>
            <li><strong>Dermatologist Approved:</strong> Safe for all skin types, cruelty-free, and vegan.</li>
            <li><strong>Visible Results:</strong> Noticeably brighter, smoother, and more hydrated skin in just weeks.</li>
          </ul>
          <p>
            Experience the art of self-care with LushGlow—where beauty meets science, and every product is a touch of luxury.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 
import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="header-logo">LushGlow</div>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="header-linkedin" aria-label="LinkedIn">
          <img src="https://api.iconify.design/mdi:linkedin.svg?color=%23e6cfa7" alt="LinkedIn" style={{ width: 22, height: 22, verticalAlign: 'middle' }} />
        </a>
      </nav>
    </motion.header>
  );
} 
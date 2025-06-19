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
      </nav>
    </motion.header>
  );
} 
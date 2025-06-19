import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader-overlay">
      <motion.div
        className="loader-ring"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
      >
        <motion.span
          className="loader-dot"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
        />
      </motion.div>
      <div className="loader-text">LushGlow</div>
    </div>
  );
} 
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProductShowcase.css';

const products = [
  {
    name: 'Lipstick Set',
    price: '$29',
    img: '/uploads/Lipstick Set.jpeg',
  },
  {
    name: 'Eye Shadow Palette',
    price: '$32',
    img: '/uploads/Eye Shadow .jpeg',
  },
  {
    name: 'Foundation Bottles',
    price: '$40',
    img: '/uploads/Foundation Bottles.jpeg',
  },
  {
    name: 'Makeup Brush Kit',
    price: '$24',
    img: '/uploads/Makeup Brush Kit.jpeg',
  },
  {
    name: 'Shampoo & Conditioner Set',
    price: '$28',
    img: '/uploads/Shampoo & Conditioner Set.jpeg',
  },
  {
    name: 'Hair Oil Dropper',
    price: '$19',
    img: '/uploads/Hair Oil Dropper.jpeg',
  },
  {
    name: 'Natural Hair Products',
    price: '$33',
    img: '/uploads/Natural Hair Products.jpeg',
  },
  {
    name: 'Hair Serum & Comb',
    price: '$21',
    img: '/uploads/Hair Serum & Comb.jpeg',
  },
  {
    name: 'Eco-friendly Skincare',
    price: '$37',
    img: '/uploads/Eco-friendly Skincare.jpeg',
  },
  {
    name: 'Herbal Ingredients',
    price: '$18',
    img: '/uploads/Herbal Ingredients.jpeg',
  },
  {
    name: 'Aloe Vera Beauty Setup',
    price: '$23',
    img: '/uploads/Aloe Vera Beauty Setup.jpeg',
  },
  {
    name: 'Essential Oils and Rose Petals',
    price: '—',
    img: '/uploads/Essential Oils and Rose Petals.jpeg',
  },
];

export default function ProductShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="product-showcase" id="products" ref={ref}>
      <motion.div
        className="product-parallax-bg"
        style={{ y }}
        aria-hidden="true"
      />
      <h2 className="product-title">Featured Products</h2>
      <div className="product-grid">
        {products.map((product, idx) => (
          <motion.div
            className="product-card"
            key={product.name}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 var(--color-button-glow)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="product-img-wrap">
              <img src={product.img} alt={product.name} className="product-img" />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <span className="product-price">{product.price}</span>
              <div className="product-actions">
                <motion.button
                  className="product-btn add-to-cart"
                  whileHover={{ scale: 1.08, boxShadow: '0 0 16px 2px var(--color-accent)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  className="product-btn buy-now"
                  whileHover={{ scale: 1.08, boxShadow: '0 0 16px 2px var(--color-gold)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  Buy Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 
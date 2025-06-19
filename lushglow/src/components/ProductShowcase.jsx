import React from 'react';
import { motion } from 'framer-motion';
import './ProductShowcase.css';

const products = [
  {
    name: 'Lipstick Set',
    price: '$29',
    img: '/uploads/3e2e2e2e-3e2e-3e2e-3e2e-3e2e2e2e2e2e-3.jpg',
  },
  {
    name: 'Eye Shadow Palette',
    price: '$32',
    img: '/uploads/3e2e2e2e-3e2e-3e2e-3e2e-3e2e2e2e2e2e-4.jpg',
  },
  {
    name: 'Foundation Bottles',
    price: '$40',
    img: '/uploads/3e2e2e2e-3e2e-3e2e-3e2e-3e2e2e2e2e2e-2.jpg',
  },
  {
    name: 'Makeup Brush Kit',
    price: '$24',
    img: '/uploads/3e2e2e2e-3e2e-3e2e-3e2e-3e2e2e2e2e2e-1.jpg',
  },
  {
    name: 'Shampoo & Conditioner Set',
    price: '$28',
    img: 'https://images.unsplash.com/photo-1615996001375-0775fdbfae6c?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Hair Oil Dropper',
    price: '$19',
    img: 'https://images.unsplash.com/photo-1621560591999-2930fa152749?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Natural Hair Products',
    price: '$33',
    img: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Hair Serum & Comb',
    price: '$21',
    img: 'https://images.unsplash.com/photo-1621560591967-937a0ed2232f?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Eco-friendly Skincare',
    price: '$37',
    img: 'https://images.unsplash.com/photo-1600180758890-e3b8a19fbb5e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Herbal Ingredients',
    price: '$18',
    img: 'https://images.unsplash.com/photo-1620912189862-7b1f999f725d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Aloe Vera Beauty Setup',
    price: '$23',
    img: 'https://images.unsplash.com/photo-1611078489935-f5b9a9c3a3c3?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Essential Oils and Rose Petals',
    price: '—',
    img: 'https://images.unsplash.com/photo-1593611875971-5bbf93e8217b?auto=format&fit=crop&w=400&q=80',
  },
];

export default function ProductShowcase() {
  return (
    <section className="product-showcase" id="products">
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
import React from 'react';
import { motion } from 'framer-motion';
import './ProductShowcase.css';

const products = [
  {
    name: 'Radiant Glow Serum',
    price: '$48',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Silk Touch Moisturizer',
    price: '$36',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Luxe Night Cream',
    price: '$54',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Golden Eye Elixir',
    price: '$29',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Velvet Matte Lipstick',
    price: '$22',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Pearl Infused Cleanser',
    price: '$31',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 
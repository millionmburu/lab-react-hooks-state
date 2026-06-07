import React from 'react';
import ProductCard from './ProductCard';

// The test imports this exact array from this exact file!
export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 1.00, inStock: true },
  { id: 2, name: 'Milk', category: 'Dairy', price: 2.50, inStock: false }
];

function ProductList({ products, onAddToCart }) {
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
        />
      ))}
    </div>
  );
}

export default ProductList;
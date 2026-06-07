import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className={`card ${!product.inStock ? 'outOfStock' : ''}`}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button 
        data-testid={`product-${product.id}`} 
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
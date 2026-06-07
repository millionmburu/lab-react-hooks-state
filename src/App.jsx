import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList, { sampleProducts } from './components/ProductList'; // Imported here
import Cart from './components/Cart';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('all');

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredProducts = category === 'all'
    ? sampleProducts
    : sampleProducts.filter(p => p.category === category);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>🛒 Shopping App</h1>
      
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

      <label htmlFor="category-select">Filter by Category:</label>
      <select id="category-select" value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <div>
        <h2>Available Products</h2>
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      </div>

      <div>
        <h2>Shopping Cart</h2>
        <Cart cartItems={cart} />
      </div>
    </div>
  );
}

export default App;
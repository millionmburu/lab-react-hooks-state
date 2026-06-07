import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      {cartItems.map(item => (
        <p key={item.id}>
          {item.name} is in your cart (x{item.quantity})
        </p>
      ))}
    </div>
  );
}

export default Cart;
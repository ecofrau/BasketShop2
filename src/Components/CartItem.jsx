import React from 'react';

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: {item.price} ₽</p>
      <button onClick={() => removeItem(item.id)}>Delete</button>
    </div>
  );
};

export default CartItem;

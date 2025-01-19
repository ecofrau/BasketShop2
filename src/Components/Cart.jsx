import React, { useContext } from "react";
import { CartStore } from "./CartStore";
import CartItem from "./CartItem";
const Cart = () => {
  const { items, removeItem, totalPrice } = useContext(CartStore);

  return (
    <div className="cart">
      <h2>My Baskit</h2>
      <div>
        {items.length === 0 ? (
          <p>Basket is empty</p>
        ) : (
          items.map((item) => (
            <CartItem key={item.id} item={item} removeItem={removeItem} />
          ))
        )}
      </div>
      <div className="total-price">
        <h3>Total price: {totalPrice} $</h3>
      </div>
    </div>
  );
};

export default Cart;

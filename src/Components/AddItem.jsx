import React, { useState, useContext } from "react";
import { CartStore } from "./CartStore";

const AddItem = () => {
  const context = useContext(CartStore);
  console.log(context);
  const { addItem } = context || {};
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      const newItem = { id: Date.now(), name, price: parseFloat(price) };
      addItem(newItem);
      setName("");
      setPrice("");
    }
  };

  return (
    <div className="add-item">
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;

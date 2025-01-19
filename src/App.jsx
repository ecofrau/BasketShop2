// import React from "react";
import { CartStoreProvider } from "./Components/CartStore";
import Cart from "./Components/Cart";
import AddItem from "./Components/AddItem";
import Number from "./Components/Number";
import AddTodo from "./Components/AddTodo";

function App() {
  return (
    <CartStoreProvider>
      <Number />
      <AddTodo />

      <div className="app">
        <h1>Shop</h1>
        <AddItem />
        <Cart />
      </div>
    </CartStoreProvider>
  );
}

export default App;

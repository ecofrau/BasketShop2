import { makeAutoObservable } from "mobx";


class CartState {
  cartItems = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(card) {
    this.cartItems.push(card);
  }

  removeItem(itemId) {
    this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
  }
}

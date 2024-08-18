import React, { useEffect, useState } from "react";
import "./Cart.scss";

export default function Cart({ cartItems }) {
  const initialQuantities = cartItems.map(() => 1);
  const [quantity, setQuantity] = useState(initialQuantities);
  const [delievery, setdelievery]=useState("standard")
  const delieveryOptions ={
    standard:5.99,
    fast:8.99,
  
   }
  const deliverymeth= (e)=>{
    setdelievery(e.target.value)
  }
  const handleIncreaseQuantity = (index) => {
    const newQuantities = [...quantity];
    newQuantities[index] += 1;
    setQuantity(newQuantities);
  };
  const handleDecreaseQuantity = (index) => {
    const newQuantities = [...quantity];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantity(newQuantities);
    }
  };
  const total = cartItems.reduce(
    (acc, items, index) => acc + items.price * quantity[index],
    0
  );
  const finalTotal= delieveryOptions[delievery]+total

  return (
    <div className="checkout">
      <div className="cart">
        <div className="cart__headings">
          <h1>Shopping Cart</h1>
          <h2>{cartItems.length} Items</h2>
        </div>
        <div>
          {cartItems.length === 0 ? (
            <p>There are no more Items in the cart</p>
          ) : (
            cartItems.map((items, index) => (
              <div key={index}>
                <div>
                  <p>item: {items.name}</p>
                </div>
                <div></div>
                <div>
                  <p>price: ${items.price}</p>
                </div>
                <div className="cart-column quantity">
                  <button onClick={() => handleDecreaseQuantity(index)}>
                    -
                  </button>
                  <span>{quantity[index]}</span>
                  <button onClick={() => handleIncreaseQuantity(index)}>
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="summary">
        <h2 className="summary__heading">Order Summary </h2>
        <div>
          <p>Items: {cartItems.length}</p>
          <p>Total: {total}</p>
        </div>
        <div>
          <label>Delivery Method</label>
          <select htmlFor="delivery" value={delievery} onChange={deliverymeth}>
            <option value="standard">Standard: $5.99</option>
            <option value="fast"> Fast: $8.99</option>
          </select>
        </div>
        <div>
          <p>Final Total :${finalTotal}</p>
        </div>
      </div>
    </div>
  );
}

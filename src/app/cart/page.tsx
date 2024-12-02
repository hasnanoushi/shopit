"use client";
import React from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import "./cart.css";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty!</h2>
        <Link href="/products">
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="card">
        {cart.map((product) => (
          <div
            key={product.id}
            className="cart-item d-flex justify-content-between align-items-center"
          >
            <div className="cart-item-details d-flex align-items-center">
              <Image
                src={product.image as string}
                alt={product.title}
                height={200}
                width={150}
              />
              <div className="ms-3 " style={{ textAlign: "center" }}>
                <h6>{product.title}</h6>
                <p>₹{product.price}</p>
              </div>
            </div>
            <div className="cart-item-actions d-flex align-items-center">
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <span className="ms-2 me-2">{product.quantity}</span>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
              <button
                onClick={() => removeFromCart(product.id)}
                style={{ marginLeft: "3px" }}
              >
                Remove
              </button>
            </div>
            <div className="cart-item-total">
              <span>₹{(product.price * product.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h4>Total: ₹{totalPrice.toFixed(2)}</h4>

        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;

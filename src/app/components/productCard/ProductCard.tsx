"use client";
import Link from "next/link";
import React from "react";
import "./productCard.css";
import { ProductsDataType } from "@/app/services/classes";
import Rating from "@/SVG/rating";
import DownArrow from "@/SVG/downArrow";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
const ProductCard = (props: any) => {
  const product: ProductsDataType = props.products;
  const { addToCart } = useCart();

  const rating = (Math.random() * (5 - 1) + 1).toFixed(1);

  const reviews = Math.floor(Math.random() * 1000) + 1;
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div className="d-flex flex-wrap justify-content-center ms-4 mb-5">
      <div className="prod-container d-flex flex-column justify-content-evenly">
        <div className="text-center">
          <Link
            href={"/products/" + product.id}
            style={{ textDecoration: "none" }}
          >
            <Image
              alt="product image"
              src={product.image as string}
              height={160}
              width={200}
            />
          </Link>
        </div>
        <div className="text-center">
          <h6 className="text-black">{product.title}</h6>
        </div>
        <div className="text-center">
          <Rating />
          <span className="ps-2 text-success fw-semibold">
            {rating} ({reviews})
          </span>
          <DownArrow />
        </div>
        <div className="text-center">
          <span className="fw-bold fs-4">₹{product.price}</span>{" "}
          <del className="text-secondary fw-normal">
            <span>₹{(product.price + 40).toFixed(2)} </span>
          </del>
        </div>
        <div className="text-center">
          <span className="text-danger fw-semibold">Deal of the day</span>
        </div>

        <button onClick={handleAddToCart} className="cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

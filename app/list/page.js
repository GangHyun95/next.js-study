"use client";

import React, { useState } from "react";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  const [quantity, setQuantity] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product, i) => (
        <div className="food" key={i}>
          <img src={`food${i}.png`} className="food-img" />
          <h4>{product} $40</h4>
          <span>{quantity[i]}</span>
          <button
            onClick={() => {
              let copy = [...quantity];
              copy[i]++;
              setQuantity(copy);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              let copy = [...quantity];
              copy[i]--;
              setQuantity(copy);
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}

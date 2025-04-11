import React, { useState } from "react";

function Item({ name, category }) {
  const [InCart, setInCart] = useState(false);
  

  function handleAddCart(){
    setInCart(InCart=>!InCart)
  }
  return (
    <li className={InCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddCart}>{InCart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;

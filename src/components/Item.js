import React from "react";

function Item({ name, category, inCart, addToCart, id }) {

  const itemClass = inCart ? "in-cart" : ""

  const addToCartButton = inCart ? "Remove From Cart" : "Add to Cart"

  const buttonClass = inCart ? "remove" : "add"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={ () => addToCart ( id )} className={buttonClass}>{addToCartButton}</button>
    </li>
  );
}

export default Item;

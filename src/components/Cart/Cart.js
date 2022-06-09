import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";


function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: 'c1', name: "Sushi", amount: 2, price: 12.99 }].map((items) => (
        <li>
          <h3>{items.name}</h3>
          <div>{items.amount}</div>
          <div>{items.price}</div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      <div>{cartItems}</div>
      <div className={classes.total}>
        <span>TotalAmount</span>
        <span>34.56</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;


import React,{useContext} from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;
  
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: props.amount,
      price: props.price
    })
  }

  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
      </div>
    </li>
  );
}

export default MealItem;

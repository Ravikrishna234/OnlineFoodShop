import React, {useContext} from "react";
import classes from './FoodItem.module.css';
import FoodItemForm from "./FoodItemForm";
import CartContext from "../../../store/cart-context";
function FoodItem(props) {
    const cartCtx = useContext(CartContext)
    const addItemToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name:props.name,
            // amount: amount,
            quantity: amount,
            price: props.price
        })
    }
    console.log(props);
    const price = '₹' + `${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h4>{props.name}</h4>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <FoodItemForm onAddToCart={addItemToCartHandler} id={props.id}></FoodItemForm>
            </div>
        </li>
    )
}

export default FoodItem;    
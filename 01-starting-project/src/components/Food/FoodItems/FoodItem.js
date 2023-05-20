import React from "react";
import classes from './FoodItem.module.css';
import FoodItemForm from "./FoodItemForm";
function FoodItem(props) {
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
                <FoodItemForm id={props.id}></FoodItemForm>
            </div>
        </li>
    )
}

export default FoodItem;    
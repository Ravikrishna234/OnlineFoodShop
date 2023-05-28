import React, {useRef, useState} from 'react';
import classes from './FoodItemForm.module.css';
import Input from '../../UI/Input';
function FoodItemForm(props) {
    const [amountIsValid, setamountIsValid] = useState(true)
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setamountIsValid(false);
        }
        props.onAddToCart(enteredAmountNumber);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label='Quantity' 
            input={{
                // id: 'amount_' + props.id,
                id: 'quantity_' + props.id,
                type:'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '0'
            }}>
        </Input>
        <button className={classes.button}>+ Add</button>
        {/* {!amountIsValid && <[]} */}
        {/* {!arguments} */}
        {!amountIsValid && <p>Please enter valid bamount</p>}
    </form>
}

export default FoodItemForm;
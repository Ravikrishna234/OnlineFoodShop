import React from 'react';
import classes from './FoodItem.module.css';
import Input from '../../UI/Input';
function FoodItemForm(props) {
    return <form className={classes.form}>
        <Input label='amount' input={{
            id: 'amount_' + props.id,
            type:'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '0'
        }}></Input>
    </form>
}

export default FoodItemForm;
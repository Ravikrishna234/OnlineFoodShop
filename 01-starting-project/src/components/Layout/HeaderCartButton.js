import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
function HeaderCartButton(props) {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon></CartIcon></span>
            <span>Your Cart</span>
            <span className={classes.badge}></span>
        </button>
    )
}

export default HeaderCartButton;
import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {
    const cart_Ctx = useContext(CartContext);
    const numberOfItemsInCart = cart_Ctx.items?.reduce((curNumber, item)=>{
        return curNumber + item.quantity
    },0) || 0;
    // console.log(numberOfItemsInCart);
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon></CartIcon></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItemsInCart}</span>
        </button>
    )
}

export default HeaderCartButton;
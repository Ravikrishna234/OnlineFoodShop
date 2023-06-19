import React, {useContext} from 'react';
import Modal from "../UI/Modal";
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';
import CartItem from './CartItem'
function Cart(props) {
    const cartCtx = useContext(CartContext);
    const totalAmount = '₹' + `${cartCtx.totalAmount.toFixed(2)}`
    // console.log(cartCtx);
    const hasItems = cartCtx.items?.length > 0 || false;

    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      cartCtx.addItem({...item, quantity: 1});
    };   
  
    const cartItems = (
      <ul className={classes['cart-items']}>
        {cartCtx.items?.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            // amount={item.amount}
            quantity={item.quantity}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );
    return (
    <React.Fragment>
       <Modal onClose={props.onClose}>
            <h3>Items in Your Cart</h3>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
      </div>
        </Modal>
    </React.Fragment>
    )
}

export default Cart;
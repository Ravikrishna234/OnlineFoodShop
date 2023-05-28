import React, {useReducer} from 'react';
import CartContext from './cart-context';
// import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    // console.log(state);
    // console.log(action);
    switch(action.type) {
        // CASE 'ADD'
        case 'ADD':
            // const updatedItems = state.items.concat(action.item);
            // const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
            
            // console.log(state);
            const checkexistingCartItemindex = state.items.findIndex((item) => item.id === action.item.id);
            const itemIndex = state.items[checkexistingCartItemindex];
            // console.log(updatedItems);
            // const updatedItems = []
            // if(checkexistingCartItemindex) {
            let updatedItems;
            if(itemIndex) {
                const updatedItem = {
                    ...itemIndex,
                    quantity: itemIndex.quantity + action.item.quantity
                }
                updatedItems = [...state.items];
                updatedItems[checkexistingCartItemindex] = updatedItem
                console.log(itemIndex);
                // const itemQuantity = itemIndex.quantity + state.items.quantity
                // console.log('quantity' + itemQuantity);
                
            } else {
                 updatedItems = state.items.concat(action.item);
            }
            // console.log(checkexistingCartItemindex);
           
            // const 
            // console.log(updatedTotalAmount);
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        default:
            return defaultCartState;
    }
};

function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type:'ADD', item: item})
    }
    const removeItemFromCartHandler = (id) => {
        // dispatchCartAction({type:'REMOVE', item: item})
        dispatchCartAction({type:'REMOVE', id: id})
    }
    const cartContext = {
        // items: [],
        items: cartState.items,
        // totalAmount: 0,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;
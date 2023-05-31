import React, {useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case 'ADD':
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
            
            const checkexistingCartItemindex = state.items.findIndex((item) => item.id === action.item.id);
            const itemIndex = state.items[checkexistingCartItemindex];
            let updatedItems;
            if(itemIndex) {
                const updatedItem = {
                    ...itemIndex,
                    quantity: itemIndex.quantity + action.item.quantity
                }
                console.log(updatedItem);   
                updatedItems = [...state.items];
                console.log(updatedItems);
                updatedItems[checkexistingCartItemindex] = updatedItem
                console.log(itemIndex);
                
            } else {
                 updatedItems = state.items.concat(action.item);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        default:
            return defaultCartState;
    }
};

function CartProvider(props) {
    console.log(props);
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
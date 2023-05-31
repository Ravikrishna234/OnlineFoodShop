import React, {useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    console.log(state);
    console.log(action);

    if(!state.items) {
        state = {totalAmount: state.totalAmount, items: []};
    }
    switch(action.type) {
        case 'ADD':
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
            
            const checkexistingCartItemindex = state.items?.findIndex((item) => item.id === action.item.id);
            const itemIndex = state.items && state.items[checkexistingCartItemindex];
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
                 updatedItems = state.items?.concat(action.item);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        
        case 'REMOVE':
            console.log('id', action.id);
            const checkRemovalItemId = state.items?.findIndex((item) => item.id == action.id);
            const itemremovalIndex = state.items && state.items[checkRemovalItemId];

            const updatedTotalamount = state.totalAmount - itemremovalIndex.price;

            let updatedRemovalItems;

            let updatedItem;
            if(itemremovalIndex.quantity == 1) {
                updatedItem = state.items?.filter((item) => item.id !== action.id);
            } else {
                updatedItem = {...itemremovalIndex, quantity: itemremovalIndex.quantity - 1};
                updatedRemovalItems = [...state.items];
                updatedRemovalItems[checkRemovalItemId] = updatedItem;
            }
           
            return {
                items: updatedRemovalItems,
                totalAmount: updatedTotalamount
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
        dispatchCartAction({type:'REMOVE', id: id})
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;
import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Food from './components/Food/Food';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import CartContext from './store/cart-context';

function App() {
  const [displayCartModal, setdisplayCartModal] = useState(false);

  const showCartHandler = () => {
    setdisplayCartModal(true);
  }
  
  const hideCartHandler = () => {
    setdisplayCartModal(false);
  }
  
  return (
    <CartProvider>
      {displayCartModal && <Cart onClose = {hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Food></Food>
      </main>
      </CartProvider>
  );
}

export default App;

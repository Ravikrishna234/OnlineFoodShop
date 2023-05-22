import React, {Fragment, useState} from 'react';
import Header from './components/Layout/Header';
import Food from './components/Food/Food';
import Cart from './components/Cart/Cart';

function App() {
  const [displayCartModal, setdisplayCartModal] = useState(false);

  const showCartHandler = () => {
    setdisplayCartModal(true);
  }
  
  const hideCartHandler = () => {
    setdisplayCartModal(false);
  }
  
  return (
    <Fragment>
      {displayCartModal && <Cart onClose = {hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Food></Food>
      </main>
    </Fragment>
  );
}

export default App;

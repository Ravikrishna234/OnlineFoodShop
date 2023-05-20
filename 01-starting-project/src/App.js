import React, {Fragment} from 'react';
import Header from './components/Layout/Header';
import Food from './components/Food/Food'
function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Food></Food>
      </main>
    </Fragment>
  );
}

export default App;

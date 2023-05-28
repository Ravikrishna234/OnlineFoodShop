import React from 'react';
import classes from './Header.module.css';
import foodImage from '../../assets/food.jpg';
import HeaderCartButton from './HeaderCartButton';
function Header(props) {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Online Food Shop</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes.foodImage}>
            <img src={foodImage} alt="A Table Full of Delicious Food" />
        </div>
    </React.Fragment>
}

export default Header;
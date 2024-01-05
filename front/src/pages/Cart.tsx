import React from 'react';
import {useAppSelector} from "../hooks/redux";
import CartCard from "../components/CartCard";
import "../styles/cart-page.css"

const Cart = () => {
    const {cart} = useAppSelector(state => state.cartReducer)
    return (
        <div className="cart-page container">
                <h2>КОРЗИНА</h2>
            <div>
                {cart.map(product => (
                    <CartCard key={product.barcode} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default Cart;
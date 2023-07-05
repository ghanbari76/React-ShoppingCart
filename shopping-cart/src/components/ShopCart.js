import React,{ useContext } from 'react';
import { Link } from "react-router-dom";

//Components
import Cart from './shared/Cart';
//Context
import { CartContext } from "../context/CartContextProvider";
//Style
import styles from "./ShopCart.module.css"

const ShopCart = () => {
    const {state,dispatch} = useContext(CartContext);
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item} />)
                }
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items:</span>{state.itemsCounter}</p>
                    <p><span>Total Payments:</span>{state.totalPrice} $</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch({type:"CLEAR"})}>clear</button>
                        <button className={styles.checkout} onClick={() => dispatch({type:"CHECKOUT"})}>check out</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>check out successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;
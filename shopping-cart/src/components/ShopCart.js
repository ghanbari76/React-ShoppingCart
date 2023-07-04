import React,{ useContext } from 'react';
import { Link } from "react-router-dom";

//Components
import Cart from './shared/Cart';
//Context
import { CartContext } from "../context/CartContextProvider";

const ShopCart = () => {
    const {state,dispatch} = useContext(CartContext);
    return (
        <div>
            <div>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item} />)
                }
            </div>
            {
                state.itemsCounter > 0 && <div>
                    <p><span>Total Items:</span>{state.itemsCounter}</p>
                    <p><span>Total Payments:</span>{state.totalPrice}</p>
                    <div>
                        <button onClick={() => dispatch({type:"CHECKOUT"})}>check out</button>
                        <button onClick={() => dispatch({type:"CLEAR"})}>clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div>
                    <h3>check out successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0 && <div>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;
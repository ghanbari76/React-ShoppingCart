import React,{ useContext } from 'react';

//Context
import { CartContext } from '../../context/CartContextProvider';
//Icons
import trashIcon from "../../assets/icons/trash.svg";

const Cart = (props) => {
    const {dispatch} = useContext(CartContext);
    const {image,title,price,quantity} = props.data;
    return (
        <div>
            <img src={image} alt='productImage' />
            <div>
                <h3>{(title)}</h3>
                <p>{price}</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type:"DECREASE",payload:props.data})}>-</button> :
                    <button onClick={() => dispatch({type:"REMOVE_ITEM",payload:props.data})}><img src={trashIcon} alt='trashIcon' style={{width:'20px'}} /></button>
                }
                <button onClick={() => dispatch({type:"INCREASE",payload:props.data})}>+</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cart;
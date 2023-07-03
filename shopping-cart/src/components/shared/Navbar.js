import React,{ useContext } from 'react';
import { Link } from "react-router-dom"
//Context
import { CartContext } from '../../context/CartContextProvider';
//Icons
import shopIcon from "../../assets/icons/shop.svg"

const Navbar = () => {
    const {state} = useContext(CartContext);
    return (
        <div>
            <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
                <Link to="/products">products</Link>
                <div>
                    <img src={shopIcon} alt='shopIcon' />
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
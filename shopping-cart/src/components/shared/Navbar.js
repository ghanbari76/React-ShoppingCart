import React,{ useContext, useState } from 'react';
import { Link } from "react-router-dom"
//Context
import { CartContext } from '../../context/CartContextProvider';
//Icons
import shopIcon from "../../assets/icons/shop.svg"
//Style
import styles from "./Navbar.module.css"

const Navbar = () => {
    const {state} = useContext(CartContext);
    const [search,setSearch] = useState("");
    const searchHandler = () => {
        console.log(search)
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.searchContainer}>
                    <input type='text' placeholder="I'm shopping for..." value={search} onChange={event => setSearch(event.target.value.toLowerCase().trim())} />
                    <button onClick={searchHandler}>Search</button>
                </div>
                <div className={styles.navbarRight}>
                    <div className={styles.loginContainer}>
                        <Link className={styles.loginLink} to="/login">Login</Link>
                        <span className={styles.verticalLine}>|</span>
                        <Link className={styles.signupLink} to="/signup">SignUp</Link>
                    </div>
                    <div className={styles.iconContainer}>
                        <Link to="/cart"><img src={shopIcon} alt='shopIcon' /></Link>
                        <span>{state.itemsCounter}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
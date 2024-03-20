import React,{ useContext, useState } from 'react';

//Components
import Product from './shared/Product';

//Context
import { ProductsContext } from '../context/ProductContextProvider';

//Style
import styles from "./Store.module.css"

const Store = () => {
    const products = useContext(ProductsContext);
    const [search,setSearch] = useState("");
    const searchHandler = () => {
        console.log(search)
    }
    return (
        <>
        <div className={styles.searchContainer}>
            <input type='text' placeholder="I'm shopping for..." value={search} onChange={event => setSearch(event.target.value.toLowerCase().trim())} />
            <button onClick={searchHandler}>Search</button>
        </div>
        <div className={styles.container} >
            <div className={styles.products}>
                {products.map(product => <Product key={product.id} productData={product} /> )}
            </div>
        </div>
        </>
    );
};

export default Store;
import React,{ useContext, useEffect, useState } from 'react';

//Components
import Product from './shared/Product';

//Context
import { ProductsContext } from '../context/ProductContextProvider';

//Style
import styles from "./Store.module.css"
import { filterProducts, searchProducts } from '../helper/function';

const Store = () => {
    const products = useContext(ProductsContext);

    const [displayed,setDisplayed] = useState([]);
    const [search,setSearch] = useState("");
    const [query,setQuery] = useState({});

    useEffect(() => {
        setDisplayed(products);
    }, [products]);

    useEffect(() => {

        let finalProducts = searchProducts(products, query.search);
        finalProducts = filterProducts(finalProducts, query.category);
        setDisplayed(finalProducts);
    }, [query])

    const searchHandler = () => {
        setQuery(query => ({...query,search}))
    };
    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();

        if (tagName !== "LI") return;
        setQuery(query => ({...query,category}))
    }
    return (
        <>
        <div className={styles.searchContainer}>
            <input type='text' placeholder="I'm shopping for..." value={search} onChange={event => setSearch(event.target.value.toLowerCase().trim())} />
            <button onClick={searchHandler}>Search</button>
        </div>
        <div className={styles.container} >
            <div className={styles.products}>
                {displayed.map(product => <Product key={product.id} productData={product} /> )}
            </div>
            <div>
                <div className={styles.categoryList}>
                    <img width="64" height="64" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/external-menu-multimedia-kiranshastry-gradient-kiranshastry-1.png" alt="external-menu-multimedia-kiranshastry-gradient-kiranshastry-1"/>
                    <p>Categories</p>
                </div>
                <ul onClick={categoryHandler}>
                    <li>All</li>
                    <li>Electronics</li>
                    <li>Jewelery</li>
                    <li>Men's Clothing</li>
                    <li>Women's Clothing</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Store;
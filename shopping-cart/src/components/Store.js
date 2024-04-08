import React,{ useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

//Components
import Product from './shared/Product';
import SearchBox from './SearchBox';
import Sidebar from './Sidebar';

//Context
import { ProductsContext } from '../context/ProductContextProvider';

import { filterProducts, getInitialQuery, searchProducts } from '../helper/function';

//Style
import styles from "./Store.module.css"

const Store = () => {
    const products = useContext(ProductsContext);

    const [displayed,setDisplayed] = useState([]);
    const [search,setSearch] = useState("");
    const [query,setQuery] = useState({});
    const [searchParams,setSearchParams] = useSearchParams();

    useEffect(() => {
        setDisplayed(products);
        setQuery(getInitialQuery(searchParams))
    }, [products]);

    useEffect(() => {
        setSearchParams(query);
        setSearch(query.search || "");

        let finalProducts = searchProducts(products, query.search);
        finalProducts = filterProducts(finalProducts, query.category);
        setDisplayed(finalProducts);
    }, [query])

    return (
        <>
        <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
        <div className={styles.container} >
            <div className={styles.products}>
                {displayed.map(product => <Product key={product.id} productData={product} /> )}
            </div>
            <Sidebar query={query} setQuery={setQuery} />    
        </div>
        </>
    );
};

export default Store;
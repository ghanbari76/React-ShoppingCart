import React,{ useState,useEffect } from 'react';
//API
import { getProducts } from '../services/api';

const ProductContextProvider = () => {

    const [products,setProducts] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        }
        fetchAPI();
    },[])

    return (
        <div>
            <h1>products Title:</h1>
            {products.map(product => <p key={product.id}>{product.id}--{product.title}</p>)}
        </div>
    );
};

export default ProductContextProvider;
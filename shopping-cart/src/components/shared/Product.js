import React from 'react';
import { Link } from 'react-router-dom';

//Function
import { shorten } from '../../helper/function';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='product_image' style={{width:'200px'}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Detailes</Link>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
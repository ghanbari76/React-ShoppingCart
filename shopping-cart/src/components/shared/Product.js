import React from 'react';

//Function
import { shorten } from '../../helper/function';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='product_image' style={{width:'200px'}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a href='#'>Detailes</a>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
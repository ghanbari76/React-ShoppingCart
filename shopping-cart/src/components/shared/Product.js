import React from 'react';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='product_image' style={{width:'200px'}} />
            <h3>{productData.title}</h3>
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
import React from 'react';

const ProductDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <h1>{`productDetailes: product ${id}`}</h1>
        </div>
    );
};

export default ProductDetails;
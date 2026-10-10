import React from 'react';
import ProductCard from './ProductCard';

function ProductList({products,dispatch}){
    return(
        <div className="row g-4">
            {products.map(product => (
                <div key={product.id} className="col-12 col-md-6 col-lg-4">
                <ProductCard dispatch={dispatch} product={product}/>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
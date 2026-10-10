import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({product,dispatch}){
    const navigate=useNavigate();

    return(
        <div className="card h-100">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-primary fw-bold">{product.price} €</p>
                <div className="mt-auto d-flex justify-content-between">
                <button 
                    className="btn btn-info text-white" 
                    onClick={() => navigate(`/product/${product.id}`)}
                >
                    Détails
                </button>
                <button 
                    className="btn btn-primary" 
                    onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                >
                    Ajouter
                </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
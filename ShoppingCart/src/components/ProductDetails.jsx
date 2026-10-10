import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails({products,dispatch}){
    const {id}=useParams();
    const navigate=useNavigate();
    const product=products.find(p=>p.id===id);

    if (!product) return <div className="alert alert-warning">Produit introuvable</div>;

    return(
        <div className="card m-auto p-3" style={{ maxWidth: '600px' }}>
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
                <h2>{product.title}</h2>
                <h4 className="text-success">{product.price} €</h4>
                <p className="badge bg-secondary">{product.category}</p>
                <p>{product.description}</p>
                <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>
                        Retour aux produits
                    </button>
                    <button 
                        className="btn btn-primary" 
                        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
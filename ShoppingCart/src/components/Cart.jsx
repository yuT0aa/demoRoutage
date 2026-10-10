import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({cart,dispatch}){
    const navigate=useNavigate();
    const totalGeneral=cart.reduce((acc,item)=>acc+item.price*item.quantity,0);

    if (cart.length===0){
        return(
            <div className="text-center mt-5">
                <h4>Votre panier est vide</h4>
                <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
                Découvrir les produits
                </button>
            </div>
        );
    }

    return(
        <div>
            <h2>Votre Panier</h2>
            <ul className="list-group mb-3">
                {cart.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                    <h5>{item.title}</h5>
                    <p className="mb-0">{item.price} € x {item.quantity} = <strong>{item.price * item.quantity} €</strong></p>
                    </div>
                    <div>
                    <button 
                        className="btn btn-sm btn-secondary me-1" 
                        onClick={() => dispatch({ type: 'DECREASE_QTY', payload: item.id })}
                    >
                        -
                    </button>
                    <button 
                        className="btn btn-sm btn-secondary me-2" 
                        onClick={() => dispatch({ type: 'INCREASE_QTY', payload: item.id })}
                    >
                        +
                    </button>
                    <button 
                        className="btn btn-sm btn-danger" 
                        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                    >
                        Supprimer
                    </button>
                    </div>
                </li>
                ))}
            </ul>
            <h4>Total général : {totalGeneral} €</h4>
            <button className="btn btn-outline-secondary mt-2" onClick={() => navigate('/')}>
                Continuer vos achats
            </button>
        </div>
    );
}

export default Cart;
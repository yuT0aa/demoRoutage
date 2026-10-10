import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({totalItems}){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 px-3">
            <Link className="navbar-brand" to="/">ShoppingApp</Link>
            <div className="ms-auto">
                <Link className="btn btn-outline-light" to="/cart">
                    Panier <span className="badge bg-danger ms-1">{totalItems}</span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
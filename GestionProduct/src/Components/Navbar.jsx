import React from 'react';
import {link} from 'react-router-dom';
import { FaBoxes, FaPlusCircle } from 'react-icons/fa';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <FaBoxes size={30} />Gestion Produits
                </Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/add">
                        <FaPlusCircle /> Ajouter un produit
                    </Link>
                    <Link className="nav-link" to="/products">
                        Voir les produits
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
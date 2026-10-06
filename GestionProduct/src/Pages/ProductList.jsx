import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

function ProductList({products,dispatch}){
    const handleDelete=(id)=>{
        if(window.confirm('Voulez-vous vraiment supprimer ce produit ?')){
            dispatch({type:'delete ',payload:id});
        }
    };

    return(
        <div className="container">
      <h2 className="mb-4">Liste des Produits</h2>
      {products.length === 0 ? (
        <div className="alert alert-info">Aucun produit disponible.</div>
      ) : (
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prix</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} DH</td>
                <td className="text-center">
                  <Link
                    to={`/edit-product/${product.id}`}
                    className="btn btn-sm btn-warning me-2"
                  >
                    <FaEdit /> Modifier
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="btn btn-sm btn-danger"
                  >
                    <FaTrash /> Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    );
}

export default ProductList;
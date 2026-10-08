import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductForm({ products, dispatch }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (isEditMode) {
      const existingProduct = products.find((p) => p.id === parseInt(id));
      if (existingProduct) {
        setName(existingProduct.name);
        setPrice(existingProduct.price);
      }
    }
  }, [id, products, isEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    if (isEditMode) {
      dispatch({
        type: 'UPDATE_PRODUCT',
        payload: { id: parseInt(id), name, price: parseFloat(price) },
      });
    } else {
      dispatch({
        type: 'ADD_PRODUCT',
        payload: { id: Date.now(), name, price: parseFloat(price) },
      });
    }

    navigate('/');
  };

  return (
    <div className="container" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">
        {isEditMode ? 'Modifier le Produit' : 'Ajouter un Produit'}
      </h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nom du Produit</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Prix (DH)</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {isEditMode ? 'Enregistrer les modifications' : 'Ajouter'}
        </button>
      </form>
    </div>
  );
}
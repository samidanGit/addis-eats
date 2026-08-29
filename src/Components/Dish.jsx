import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function Dish({ id, name, price, currency = 'ETB', spicy = false, onAddToCart }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(prev => prev + 1);
    onAddToCart(price); // Notify parent (App) to update total order price
  };

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '12px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1rem' }}>{name}</h3>
        <span style={{ fontWeight: 'bold', color: '#333' }}>
          {price} {currency}
        </span>
        {Boolean(spicy) && (
          <span style={{
            marginLeft: '8px',
            padding: '2px 6px',
            backgroundColor: '#ff4d4f',
            color: '#fff',
            fontSize: '0.75rem',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}>
            🌶️ Spicy
          </span>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {count > 0 && (
          <span style={{
            backgroundColor: '#e6f7ff',
            color: '#1890ff',
            padding: '4px 8px',
            borderRadius: '12px',
            fontWeight: 'bold',
            fontSize: '0.85rem'
          }}>
            x{count}
          </span>
        )}
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          + Add
        </button>
      </div>
    </div>
  );
}

Dish.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  spicy: PropTypes.bool,
  onAddToCart: PropTypes.func.isRequired,
};

export default Dish;

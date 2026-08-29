import React from 'react';
import PropTypes from 'prop-types';
import Dish from './Dish';

export function DishList({ dishes, onAddToCart }) {
  if (dishes.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic', margin: '30px 0' }}>
        No dishes found in this category.
      </p>
    );
  }

  return (
    <div>
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          id={dish.id}
          name={dish.name}
          price={dish.price}
          spicy={dish.spicy}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

DishList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      spicy: PropTypes.bool,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default DishList;

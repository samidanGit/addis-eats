import React from 'react';
import PropTypes from 'prop-types';

export function CategoryBar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
      {categories.map((cat) => {
        const isActive = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid #007bff',
              backgroundColor: isActive ? '#007bff' : '#fff',
              color: isActive ? '#fff' : '#007bff',
              fontWeight: isActive ? 'bold' : 'normal',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

CategoryBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default CategoryBar;

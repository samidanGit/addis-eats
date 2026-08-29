import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function DeliveryForm({ totalOrderPrice }) {
  // Single state object for all form fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // TeleBirr phone validation: Ethiopian pattern starting with 09 or 07 (10 digits) or +251
  const teleBirrRegex = /^(?:\+2519|\+2517|09|07)\d{8}$/;
  const isPhoneValid = teleBirrRegex.test(formData.phone.trim());
  const isFormValid = isPhoneValid && formData.name.trim() !== '' && formData.area.trim() !== '' && totalOrderPrice > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert(`Order Confirmed!\n\nCustomer: ${formData.name}\nArea: ${formData.area}\nTeleBirr: ${formData.phone}\nTotal Amount: ${totalOrderPrice} ETB`);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        marginTop: '28px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h3 style={{ marginTop: 0 }}>🛵 TeleBirr Delivery Details</h3>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem' }}>Full Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Samuel Getu"
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          required
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem' }}>
          TeleBirr Phone Number:
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="0912345678 or 0712345678"
          style={{ 
            width: '100%', 
            padding: '8px', 
            borderRadius: '4px', 
            border: `1px solid ${formData.phone && !isPhoneValid ? '#ff4d4f' : '#ccc'}`,
            boxSizing: 'border-box' 
          }}
          required
        />
        {formData.phone && !isPhoneValid && (
          <small style={{ color: '#ff4d4f', fontSize: '0.78rem' }}>
            Enter a valid Ethiopian phone number (e.g. 09... or 07...)
          </small>
        )}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem' }}>Delivery Area:</label>
        <input
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
          placeholder="e.g. Bole, Kazanchis, Mexico"
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          required
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: isFormValid ? '#007bff' : '#cccccc',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: isFormValid ? 'pointer' : 'not-allowed',
          fontSize: '1rem'
        }}
      >
        Complete TeleBirr Order ({totalOrderPrice} ETB)
      </button>
    </form>
  );
}

DeliveryForm.propTypes = {
  totalOrderPrice: PropTypes.number.isRequired,
};

export default DeliveryForm;

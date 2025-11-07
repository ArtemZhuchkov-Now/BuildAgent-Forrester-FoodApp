import React, { useState } from 'react';

export default function OrderForm({ cartItems, total, service, onOrderComplete, onBackToCart }) {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    table_number: '',
    special_instructions: '',
    pickup_time: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.customer_name.trim()) {
      alert('Please enter your name');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare order data
      const orderData = {
        ...formData,
        total_amount: total.toFixed(2),
        status: 'pending',
        order_date: new Date().toISOString()
      };

      // Create the order
      const response = await service.createOrder(orderData);
      
      setOrderSuccess(true);
      setOrderNumber(response.result?.order_number?.display_value || 'N/A');
      
      // Auto-complete after 3 seconds
      setTimeout(() => {
        onOrderComplete();
      }, 3000);
      
    } catch (error) {
      console.error('Order submission failed:', error);
      alert('Failed to submit order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="order-form-container">
        <div className="success-message">
          <span className="success-emoji">🎉</span>
          <h2>Order Placed Successfully!</h2>
          <p>Order Number: <strong>{orderNumber}</strong></p>
          <p>We'll have your delicious food ready soon!</p>
          <p>Redirecting to menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="order-form-container">
      <div className="cart-header">
        <h2 className="cart-title">📋 Complete Your Order</h2>
        <p>Almost there! Just a few details needed.</p>
      </div>

      <div className="order-summary">
        <h3>📦 Order Summary</h3>
        {cartItems.map(item => (
          <div key={item.id} className="order-item">
            <span>{item.name} × {item.quantity}</span>
            <span>${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="order-item total-row">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
      </div>

      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>👤 Contact Information</h3>
          
          <div className="form-group">
            <label htmlFor="customer_name">Full Name *</label>
            <input
              type="text"
              id="customer_name"
              name="customer_name"
              className="form-input"
              value={formData.customer_name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="customer_email">Email Address</label>
            <input
              type="email"
              id="customer_email"
              name="customer_email"
              className="form-input"
              value={formData.customer_email}
              onChange={handleInputChange}
              placeholder="your.email@company.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="customer_phone">Phone Number</label>
            <input
              type="tel"
              id="customer_phone"
              name="customer_phone"
              className="form-input"
              value={formData.customer_phone}
              onChange={handleInputChange}
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div className="form-section">
          <h3>📍 Delivery Information</h3>
          
          <div className="form-group">
            <label htmlFor="table_number">Table/Booth Number</label>
            <input
              type="text"
              id="table_number"
              name="table_number"
              className="form-input"
              value={formData.table_number}
              onChange={handleInputChange}
              placeholder="e.g., Table 15, Booth A3"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="pickup_time">Preferred Pickup Time</label>
            <input
              type="datetime-local"
              id="pickup_time"
              name="pickup_time"
              className="form-input"
              value={formData.pickup_time}
              onChange={handleInputChange}
              min={new Date().toISOString().slice(0, 16)}
            />
          </div>
        </div>

        <div className="form-section">
          <h3>📝 Special Instructions</h3>
          
          <div className="form-group">
            <label htmlFor="special_instructions">Any special requests or dietary needs?</label>
            <textarea
              id="special_instructions"
              name="special_instructions"
              className="form-input form-textarea"
              value={formData.special_instructions}
              onChange={handleInputChange}
              placeholder="e.g., No onions, extra spicy, allergen information..."
              rows="3"
            />
          </div>
        </div>

        <div className="cart-actions">
          <button 
            type="submit" 
            className="btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? '🚀 Submitting...' : '🍽️ Place Order'}
          </button>
          
          <button 
            type="button" 
            className="btn-secondary"
            onClick={onBackToCart}
            disabled={isSubmitting}
          >
            ← Back to Cart
          </button>
        </div>
      </form>
    </div>
  );
}
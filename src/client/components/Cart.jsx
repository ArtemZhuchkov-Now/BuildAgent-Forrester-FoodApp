import React from 'react';

export default function Cart({ items, onUpdateQuantity, onRemove, onClear, total, onCheckout }) {
  if (items.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <h2 className="cart-title">🛒 Your Cart</h2>
        </div>
        
        <div className="cart-empty">
          <span className="cart-empty-emoji">🛒</span>
          <h3>Your cart is empty</h3>
          <p>Add some delicious items from our menu to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">🛒 Your Cart</h2>
        <p>Review your order before checkout</p>
      </div>

      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">${item.price} each</div>
            </div>
            
            <div className="cart-item-controls">
              <button 
                className="quantity-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                title="Decrease quantity"
              >
                -
              </button>
              
              <span className="quantity-display">{item.quantity}</span>
              
              <button 
                className="quantity-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                title="Increase quantity"
              >
                +
              </button>
              
              <button 
                className="remove-btn"
                onClick={() => onRemove(item.id)}
                title="Remove item"
              >
                🗑️ Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          Total: ${total.toFixed(2)}
        </div>
        
        <div className="cart-actions">
          <button className="btn-primary" onClick={onCheckout}>
            🚀 Proceed to Checkout
          </button>
          <button className="btn-secondary" onClick={onClear}>
            🗑️ Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect, useMemo } from 'react';
import { FoodService } from './services/FoodService.js';
import FoodMenu from './components/FoodMenu.jsx';
import Cart from './components/Cart.jsx';
import OrderForm from './components/OrderForm.jsx';
import './app.css';

export default function App() {
  const service = useMemo(() => new FoodService(), []);
  const [currentView, setCurrentView] = useState('menu');
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMenu();
  }, [service]);

  const loadMenu = async () => {
    try {
      setLoading(true);
      const items = await service.getMenuItems();
      setMenuItems(items);
    } catch (error) {
      console.error('Failed to load menu:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (item, quantity = 1) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateCartQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === itemId ? { ...item, quantity } : item
    ));
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const renderNavigation = () => (
    <nav className="app-nav">
      <div className="nav-brand">
        <h1>🍽️ Forrester Conference Dining</h1>
        <p>Delicious food, delivered fresh!</p>
      </div>
      <div className="nav-buttons">
        <button 
          className={currentView === 'menu' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentView('menu')}
        >
          🍕 Menu
        </button>
        <button 
          className={currentView === 'cart' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentView('cart')}
        >
          🛒 Cart ({cart.length})
        </button>
        <button 
          className={currentView === 'order' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentView('order')}
          disabled={cart.length === 0}
        >
          📋 Order
        </button>
      </div>
    </nav>
  );

  const renderCurrentView = () => {
    if (loading) {
      return (
        <div className="loading-container">
          <div className="loading-spinner">🍳</div>
          <p>Loading delicious menu items...</p>
        </div>
      );
    }

    switch (currentView) {
      case 'cart':
        return (
          <Cart 
            items={cart}
            onUpdateQuantity={updateCartQuantity}
            onRemove={removeFromCart}
            onClear={clearCart}
            total={getTotalAmount()}
            onCheckout={() => setCurrentView('order')}
          />
        );
      case 'order':
        return (
          <OrderForm 
            cartItems={cart}
            total={getTotalAmount()}
            service={service}
            onOrderComplete={() => {
              clearCart();
              setCurrentView('menu');
            }}
            onBackToCart={() => setCurrentView('cart')}
          />
        );
      default:
        return (
          <FoodMenu 
            items={menuItems}
            onAddToCart={addToCart}
          />
        );
    }
  };

  return (
    <div className="food-ordering-app">
      {renderNavigation()}
      <main className="app-main">
        {renderCurrentView()}
      </main>
    </div>
  );
}
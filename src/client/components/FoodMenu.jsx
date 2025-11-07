import React, { useState } from 'react';
import { display, value } from '../utils/fields.js';

export default function FoodMenu({ items, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { key: 'all', label: 'All Items', emoji: '🍽️' },
    { key: 'appetizer', label: 'Appetizers', emoji: '🥗' },
    { key: 'main_course', label: 'Main Course', emoji: '🍖' },
    { key: 'dessert', label: 'Desserts', emoji: '🍰' },
    { key: 'beverage', label: 'Beverages', emoji: '🥤' },
    { key: 'snack', label: 'Snacks', emoji: '🍿' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => display(item.category) === selectedCategory);

  const CategoryFilter = () => (
    <div className="category-filter">
      <h2 className="menu-title">🍽️ Delicious Menu</h2>
      <p className="menu-subtitle">Handcrafted dishes that will make your conference experience memorable!</p>
      
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category.key}
            className={selectedCategory === category.key ? 'category-btn active' : 'category-btn'}
            onClick={() => setSelectedCategory(category.key)}
          >
            <span className="category-emoji">{category.emoji}</span>
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );

  const MenuItem = ({ item }) => {
    const [isAdding, setIsAdding] = useState(false);
    
    const handleAddToCart = async () => {
      setIsAdding(true);
      await new Promise(resolve => setTimeout(resolve, 300)); // Visual feedback
      onAddToCart({
        id: value(item.sys_id),
        name: display(item.name),
        price: display(item.price),
        category: display(item.category)
      });
      setIsAdding(false);
    };

    return (
      <div className="menu-item">
        <div className="menu-item-header">
          <span className="item-emoji">{display(item.image_url) || '🍽️'}</span>
          <div className="item-name">{display(item.name)}</div>
          <div className="item-price">${display(item.price)}</div>
        </div>
        
        <div className="menu-item-body">
          <p className="item-description">{display(item.description)}</p>
          
          <div className="item-details">
            {display(item.dietary_info) && (
              <span className="item-tag">{display(item.dietary_info)}</span>
            )}
            {display(item.spice_level) && (
              <span className="item-tag spice-tag">
                🌶️ {display(item.spice_level).charAt(0).toUpperCase() + display(item.spice_level).slice(1)}
              </span>
            )}
          </div>
          
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? '✨ Adding...' : '🛒 Add to Cart'}
          </button>
        </div>
      </div>
    );
  };

  if (items.length === 0) {
    return (
      <div className="menu-empty">
        <span className="menu-empty-emoji">😋</span>
        <h2>Menu coming soon!</h2>
        <p>We're preparing something delicious for you...</p>
      </div>
    );
  }

  return (
    <div className="menu-section">
      <CategoryFilter />
      
      <div className="menu-container">
        {filteredItems.map(item => (
          <MenuItem key={value(item.sys_id)} item={item} />
        ))}
      </div>
      
      {filteredItems.length === 0 && selectedCategory !== 'all' && (
        <div className="no-items">
          <span className="no-items-emoji">🔍</span>
          <p>No items found in this category. Try a different category!</p>
        </div>
      )}
    </div>
  );
}
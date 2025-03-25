import React, { useState } from 'react';
import '../styles/App.css'; // Updated import path

// Menu items data
const menuItems = [
  {
    id: 1,
    name: 'Buttermilk Pancakes',
    category: 'Breakfast',
    price: 15.99,
    image: 'pancakes-image-url',
    description: 'Breakfast dish description'
  },
  {
    id: 2,
    name: 'Diner Double',
    category: 'Lunch',
    price: 13.99,
    image: 'burger-image-url',
    description: 'Lunch dish description'
  },
  {
    id: 3,
    name: 'Godzilla Milkshake',
    category: 'Shakes',
    price: 6.99,
    image: 'milkshake-image-url',
    description: 'Shake dish description'
  },
  {
    id: 4,
    name: 'Country Delight',
    category: 'Breakfast',
    price: 20.99,
    image: 'breakfast-image-url',
    description: 'Another breakfast dish description'
  },
  {
    id: 5,
    name: 'Egg Attack',
    category: 'Lunch',
    price: 22.99,
    image: 'egg-attack-image-url',
    description: 'Another lunch dish description'
  },
  {
    id: 6,
    name: 'Oreo Dream',
    category: 'Shakes',
    price: 18.99,
    image: 'oreo-shake-image-url',
    description: 'Another shake dish description'
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [menuList, setMenuList] = useState(menuItems);

  // Predefined categories with specific test IDs
  const categories = [
    { name: 'All', testId: 'filter-btn-0' },
    { name: 'Breakfast', testId: 'filter-btn-1' },
    { name: 'Lunch', testId: 'filter-btn-2' },
    { name: 'Shakes', testId: 'filter-btn-3' }
  ];

  // Category filtering function
  const filterItems = (category) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setMenuList(menuItems);
    } else {
      const filteredItems = menuItems.filter(
        (item) => item.category === category
      );
      setMenuList(filteredItems);
    }
  };

  return (
    <div className="menu-container" data-testid="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      
      {/* Category Filter Buttons */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.name}
            id={category.testId}
            data-testid={category.testId}
            className={`category-btn ${activeCategory === category.name ? 'active' : ''}`}
            onClick={() => filterItems(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="menu-items-grid" data-testid="menu-items-grid">
        {menuList.map((item) => (
          <div 
            key={item.id} 
            className="menu-item"
            data-testid={`menu-item-${item.category.toLowerCase()}`}
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="menu-item-image" 
            />
            <div className="menu-item-details">
              <div className="menu-item-header">
                <h3 className="menu-item-name">{item.name}</h3>
                <span className="menu-item-price">${item.price.toFixed(2)}</span>
              </div>
              <p className="menu-item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './styles.css';

// Menu items data (as defined above)
const menuItems = [
  {
    id: 1,
    name: 'Buttermilk Pancakes',
    category: 'Breakfast',
    price: 15.99,
    image: 'pancakes-image-url',
    description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
  },
  {
    id: 2,
    name: 'Diner Double',
    category: 'Lunch',
    price: 13.99,
    image: 'burger-image-url',
    description: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats'
  },
  {
    id: 3,
    name: 'Godzilla Milkshake',
    category: 'Shakes',
    price: 6.99,
    image: 'milkshake-image-url',
    description: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.'
  },
  {
    id: 4,
    name: 'Country Delight',
    category: 'Breakfast',
    price: 20.99,
    image: 'breakfast-image-url',
    description: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut'
  },
  {
    id: 5,
    name: 'Egg Attack',
    category: 'Lunch',
    price: 22.99,
    image: 'egg-attack-image-url',
    description: 'franzen vegan pabst bicycle rights kickstarter'
  },
  {
    id: 6,
    name: 'Oreo Dream',
    category: 'Shakes',
    price: 18.99,
    image: 'oreo-shake-image-url',
    description: 'Portland chicharrones ethical edison bulb'
  }
];

function App() {
  // State for managing active category and filtered items
  const [activeCategory, setActiveCategory] = useState('All');
  const [menuList, setMenuList] = useState(menuItems);

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

  // Categories for filtering
  const categories = ['All', 'Breakfast', 'Lunch', 'Shakes'];

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      
      {/* Category Filter Buttons */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="menu-items-grid">
        {menuList.map((item) => (
          <div key={item.id} className="menu-item">
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

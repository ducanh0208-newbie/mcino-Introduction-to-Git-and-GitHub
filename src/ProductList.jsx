import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improves air quality.", cost: "$15" },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from indoor air.", cost: "$12" },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes mold spores and purifies air naturally.", cost: "$18" },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity and removes air pollutants.", cost: "$14" },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/04/rubber-tree-4850600_1280.jpg", description: "Easy to grow with broad glossy leaves.", cost: "$20" },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/18/12/aloe-vera-3284687_1280.jpg", description: "Soothes skin burns and purifies indoor toxins.", cost: "$10" }
      ]
    },
    {
      category: "Aromatic & Medicinal Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=600&auto=format&fit=crop", description: "Calming scent that promotes relaxation and sleep.", cost: "$16" },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Fragrant herb ideal for cooking and focus.", cost: "$12" },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/19/17/47/mint-1149971_1280.jpg", description: "Refreshing aromatic herb for beverages and dishes.", cost: "$8" },
        { name: "Eucalyptus", image: "https://cdn.pixabay.com/photo/2016/11/21/16/06/eucalyptus-1846158_1280.jpg", description: "Crisp scent that helps clear airways.", cost: "$22" },
        { name: "Thyme", image: "https://cdn.pixabay.com/photo/2017/05/18/06/16/thyme-2322680_1280.jpg", description: "Versatile medicinal and culinary plant.", cost: "$10" },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2016/06/08/21/33/lemon-balm-1444743_1280.jpg", description: "Lemon scented herb for stress relief tea.", cost: "$11" }
      ]
    },
    {
      category: "Low Maintenance Succulents",
      plants: [
        { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2019/08/11/07/49/succulent-4398338_1280.jpg", description: "Symbol of good luck with fleshy leaves.", cost: "$15" },
        { name: "Echeveria", image: "https://cdn.pixabay.com/photo/2016/11/21/17/34/succulent-1846663_1280.jpg", description: "Beautiful rose-shaped succulent.", cost: "$9" },
        { name: "Zebra Haworthia", image: "https://cdn.pixabay.com/photo/2020/07/01/17/57/haworthia-5360505_1280.jpg", description: "Striking white striped compact succulent.", cost: "$13" },
        { name: "String of Pearls", image: "https://cdn.pixabay.com/photo/2021/01/29/14/41/string-of-pearls-5961223_1280.jpg", description: "Unique cascading pearl-like stems.", cost: "$17" },
        { name: "Burro's Tail", image: "https://cdn.pixabay.com/photo/2019/09/20/12/32/succulent-4491632_1280.jpg", description: "Trailing succulent with thick fleshy leaves.", cost: "$14" },
        { name: "Panda Plant", image: "https://cdn.pixabay.com/photo/2018/02/16/10/52/succulent-3157431_1280.jpg", description: "Fuzzy velvet leaves with dark brown edges.", cost: "$11" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div className="product-page-container">
      <nav className="navbar">
        <div className="nav-brand" onClick={onHomeClick}>
          <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/monstera-1295326_1280.png" alt="logo" className="logo-img" />
          <div>
            <h3>Paradise Nursery</h3>
            <p>Where Greenery Meets Serenity</p>
          </div>
        </div>

        <div className="nav-links">
          <button className="nav-btn" onClick={() => { setShowCart(false); }}>
            Plants
          </button>
          <button className="nav-btn cart-icon-btn" onClick={() => setShowCart(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cart-svg">
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.75 3.75 0 003.628 2.78h8.528a3.75 3.75 0 003.628-2.78l1.714-6.429A1.5 1.5 0 0022.617 5.25H6.11l-.47-1.764a2.25 2.25 0 00-2.176-1.686H2.25zM6.61 6.75h14.733l-1.42 5.326a2.25 2.25 0 01-2.177 1.674H9.932a2.25 2.25 0 01-2.177-1.674L6.61 6.75z" />
              <path d="M7.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="cart-quantity-badge">{totalCartCount}</span>
          </button>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid-container">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{categoryObj.category}</h2>
              <div className="plants-grid">
                {categoryObj.plants.map((plant, pIndex) => {
                  const isAdded = addedToCart[plant.name] || cartItems.some(item => item.name === plant.name);
                  return (
                    <div key={pIndex} className="plant-card">
                      <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                      <div className="plant-info">
                        <h3 className="plant-name">{plant.name}</h3>
                        <p className="plant-description">{plant.description}</p>
                        <p className="plant-price">{plant.cost}</p>
                        <button
                          className={`add-to-cart-btn ${isAdded ? 'disabled' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={isAdded}
                        >
                          {isAdded ? "Added to Cart" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;

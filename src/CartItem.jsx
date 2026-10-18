import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const parseCost = (costString) => {
    return parseFloat(costString.replace('$', '')) || 0;
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0).toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = (e) => {
    alert('Coming Soon: Checkout functionality will be available in the next release!');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      
      <div className="cart-total-header">
        <h3>Total Cart Amount: <span className="total-amount-highlight">${calculateTotalAmount()}</span></h3>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is currently empty.</p>
          <button className="continue-btn" onClick={(e) => onContinueShopping(e)}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="cart-items-list">
            {cart.map((item) => (
              <div className="cart-item-card" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-unit-price">Unit Price: {item.cost}</div>
                  <div className="cart-item-quantity-controls">
                    <button className="quantity-btn dec-btn" onClick={() => handleDecrement(item)}>-</button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button className="quantity-btn inc-btn" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <div className="cart-item-subtotal">Subtotal: ${calculateTotalCost(item)}</div>
                  <button className="delete-btn" onClick={() => handleRemove(item)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="continue-btn" onClick={(e) => onContinueShopping(e)}>
              Continue Shopping
            </button>
            <button className="checkout-btn" onClick={(e) => handleCheckoutShopping(e)}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;

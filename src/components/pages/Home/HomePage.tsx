import React, { useState,useEffect } from 'react';
import './HomePage.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../Navbar';
import { FoodItems } from '../../../config';

interface FoodItem {
  itemTitle: string;
  itemDescription: string;
  itemPrice: number; // Ensure itemPrice is a number
  itemImage: string;
}

const HomePage: React.FC = () => {
  // const navigate = useNavigate();

  // Initialize cartItems as an empty array
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [addedItem, setAddedItem] = useState<FoodItem | null>(null);
  // const addToCart = (foodItem: FoodItem) => {
  //   // Create a copy of the cartItems with the new food item
  //   alert("food item is added");
  //   const updatedCart = [...cartItems, foodItem];

  //   console.log(foodItem);

  //   setCartItems(updatedCart);

  //   // Update local storage with the updated cartItems
  //   localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  //   // navigate('/cart');
  // };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || 'null') || [];
    setCartItems(storedCartItems);
  }, []);
  
  
  const addToCart = (foodItem: FoodItem) => {
    const updatedCart = [...cartItems, foodItem];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    
    setAddedItem(foodItem);
    setShowPopup(true);

    // Hide the pop-up after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };


  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* <h2>Welcome to Food Ordering App</h2> */}
        
        <div className="menu-container">
          {FoodItems.map((foodItem) => (
            <div  className="menu-card">
              <img src={foodItem.itemImage} alt="" className='image' />
              <h3>{foodItem.itemTitle}</h3>
              <p>{foodItem.itemDescription}</p>
              <p>Price: ${foodItem.itemPrice}</p>
              <button
                className="buy-button"
                onClick={() => {
                  addToCart(foodItem);
                }}
              >
                AddCart
              </button>
            </div>
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <span className="close-button" onClick={() => setShowPopup(false)}>
            &times;
          </span>
          {addedItem && (
            <p>{addedItem.itemTitle} is added to the cart</p>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;

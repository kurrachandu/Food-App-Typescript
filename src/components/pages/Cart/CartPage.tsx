import React, { useState, useEffect } from 'react';
import './CartPage.css';
import Navbar from '../../../Navbar';
import ItemPopUPdialog from '../Cart/ItemPopUPdialog';

interface CartItem {
  itemImage: string;
  itemTitle: string;
  itemDescription: string;
  itemPrice: number;
  itemQuantity:number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderedItems, setOrderedItems] = useState<CartItem[]>([]);
  const [popupFlag, setPopupFlag] = useState<boolean>(false);
  const [selectedCartItem, setSelectedCartItem] = useState<CartItem | null>(null);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || 'null') || [];
    setCartItems(storedCartItems);
  }, []);

  function handlePlaceOrder(cartItem: CartItem) {
    setSelectedCartItem(cartItem);
    setPopupFlag(true);
  }

  const removeFromCart = (index: number) => {
    // Create a copy of cartItems and remove the item at the given index
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);

    // Update the state with the updated cart items
    setCartItems(updatedCartItems);

    // Update the local storage with the updated cart items
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>Cart</h2>
        <div className='cart-container'>
          {cartItems.map((cartItem, index) => (
            <div key={index} className='cart-item'>
              <img src={cartItem.itemImage} alt='' className='image' />
              <h3>{cartItem.itemTitle}</h3>
              <p>{cartItem.itemDescription}</p>
              <p>Price: ${cartItem.itemPrice}</p>
              <p>Quantity({cartItem.itemQuantity})</p>
              <div className='total'>
                <button onClick={() => handlePlaceOrder(cartItem)}>PlaceOrder</button>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          {popupFlag ? (
            <ItemPopUPdialog
              cartItem={selectedCartItem}
              setPopupFlag={setPopupFlag}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CartPage;

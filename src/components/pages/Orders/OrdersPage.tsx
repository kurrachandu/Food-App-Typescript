import React, { useState, useEffect } from 'react';
import Navbar from '../../../Navbar';
import './OrdersPage.css';

interface OrderedItem {
  itemImage: string;
  itemTitle: string;
  itemDescription: string;
  itemPrice: number;
}

const OrdersPage: React.FC = () => {
  const [orderedItems, setOrderedItems] = useState<OrderedItem[]>([]);

  useEffect(() => {
    // Load cart items from local storage when the component mounts
    const storedOrderedItems = JSON.parse(localStorage.getItem('ORDEREDITEMS')||'null') ||[];

    if (storedOrderedItems) {
      setOrderedItems(storedOrderedItems); // Update the state with ordered items
    }
  }, []);

  // useEffect(() => {
  //   const storedOrderedItems = JSON.parse(localStorage.getItem('ORDEREDITEMS'));

  //   if (storedOrderedItems) {
  //     setOrderedItems(storedOrderedItems); // Update the state with ordered items
  //   }
  // }, []);

  return (
    <>
      <Navbar />
      <div>
        <h2>Ordered Items</h2>
        <div className='Order-Items'>
          {orderedItems.map((orderedItem, index) => (
            orderedItem && (
              <div key={index} className='order-item'>
                <img src={orderedItem.itemImage} alt={orderedItem.itemTitle} className='image' />
                <h3>{orderedItem.itemTitle}</h3>
                <p>{orderedItem.itemDescription}</p>
                <p>Price: ${orderedItem.itemPrice}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default OrdersPage;

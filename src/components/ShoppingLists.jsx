// src/components/ShoppingList.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../redux/shoppingListSlice'; // Ensure you create this slice

const ShoppingList = () => {
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const shoppingList = useSelector((state) => state.shoppingList.items);
    const dispatch = useDispatch();

    const handleAddItem = () => {
        if (itemName) {
            dispatch(addItem({ name: itemName, quantity }));
            setItemName('');
            setQuantity(1);
        }
    };

    return (
        <div>
            <h2>Shopping List</h2>
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Item Name"
            />
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
            />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {shoppingList.map((item) => (
                    <li key={item.id}>
                        {item.name} (x{item.quantity})
                        <button onClick={() => dispatch(deleteItem(item.id))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;

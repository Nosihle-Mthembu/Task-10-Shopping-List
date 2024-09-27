import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLists } from './redux/shoppingListSlice';
import AddList from "./components/AddingList";
import Footer from "./components/footer";
import { addList, updateList, deleteList } from './redux/shoppingListSlice';

export default function App() {

  const dispatch = useDispatch();

  // Use separate selectors to avoid returning a new object reference
  const lists = useSelector((state) => state.shoppingList.lists);
  const status = useSelector((state) => state.shoppingList.status);
  const error = useSelector((state) => state.shoppingList.error);
  const [newItem, setNewItem] = useState({ name: '', quantity: '', notes: '' });
  const [selectedListId, setSelectedListId] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLists());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const handleAddList = () => {
    if (newItem.name) {  // Check if there's a valid name
      dispatch(addList({ name: newItem.name }));
      setNewItem({ name: '', quantity: '', notes: '' });
    }
  };
  

  const handleUpdateList = (listId, item) => {
    const updatedItem = { ...item, name: 'Updated Name' }; // Modify item as needed
    dispatch(updateList({ listId, updatedItem }));
  };

  const handleDeleteList = (listId, itemId) => {
    dispatch(deleteList({ listId, itemId }));
  };

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="SignIn" element={isLoggedIn ? <Navigate to="/shoppingList" /> : <SignIn onLogin={handleLogin} />} />
          <Route path="shoppingList" element={isLoggedIn ? <LandingPage /> : <Navigate to="/SignIn" />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <div>
      <h1>Shopping Lists</h1>

      {/* Render shopping lists */}
      
<ul>
  {lists && lists.length > 0 ? (
    lists.map((list) => (
      <li key={list.id}>
        {list.name}
        <ul>
          {list.items && list.items.length > 0 ? (
            list.items.map((item) => (
              <li key={item.id}>
                {item.name} (Quantity: {item.quantity}) - {item.notes}
                <button onClick={() => handleUpdateList(list.id, item)}>Update</button>
                <button onClick={() => handleDeleteList(list.id, item.id)}>Delete</button>
              </li>
            ))
          ) : (
            <li>No items in this list</li>
          )}
        </ul>
      </li>
    ))
  ) : (
    <li>No lists available</li>
  )}
</ul>

      {/* Add new item form */}
      <h2>Add Item</h2>
      <select onChange={(e) => setSelectedListId(e.target.value)}>
        <option value="">Select a list</option>
        {lists.map((list) => (
          <option key={list.id} value={list.id}>
            {list.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        placeholder="Item Name"
      />
      <input
        type="text"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        placeholder="Quantity"
      />
      <input
        type="text"
        value={newItem.notes}
        onChange={(e) => setNewItem({ ...newItem, notes: e.target.value })}
        placeholder="Notes"
      />
      <button onClick={handleAddList}>Add Item</button>
    </div>
        <AddList />
        <Footer />
    </>
  );
}

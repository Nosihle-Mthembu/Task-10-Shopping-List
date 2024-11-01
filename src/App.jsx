import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Layout from './components/Layout';
import ShoppingList from './components/ShoppingLists';
import NoPage from './components/NoPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { syncOfflineItems } from './redux/shoppingListSlice';
import { getOfflineItems } from './components/offlineDB';

const App = () => {

    const dispatch = useDispatch();

  useEffect(() => {
    const handleOnline = async () => {
      const offlineItems = await getOfflineItems();
      if (offlineItems.length > 0) {
        dispatch(syncOfflineItems(offlineItems));
      }
    };

    window.addEventListener('online', handleOnline);
    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, [dispatch]);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/shoppingList" element={<ShoppingList />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

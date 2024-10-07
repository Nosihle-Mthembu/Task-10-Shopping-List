import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ShoppingList from './components/ShoppingList';
import NoPage from './components/NoPage';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

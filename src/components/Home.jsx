import React from 'react';
import AddCategory from './CategoryList';
import ShoppingList from './ShoppingLists';

const Home = () => {
    return (
        <div>
            <h1>Shopping List App</h1>
            <AddCategory />
            <ShoppingList />
        </div>
    );
};

export default Home;

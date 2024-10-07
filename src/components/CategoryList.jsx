import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/shoppingListSlice';

const AddCategory = () => {
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (category) {
            dispatch(addCategory({ id: Date.now(), name: category }));
            setCategory('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Add Category"
            />
            <button type="submit">Add Category</button>
        </form>
    );
};

export default AddCategory;

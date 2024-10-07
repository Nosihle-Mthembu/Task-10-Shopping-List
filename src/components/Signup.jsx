import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/authSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    number: '',
    password: ''
  });
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(signup(formData));
    if (response.payload.success) {
      setNotification('Sign up successful! You can now login');
    } else {
      setNotification('Sign up failed. Please try again.');
    }
    setTimeout(() => {
      setNotification('');
    }, 3000); // Clear the notification after 3 seconds
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="number" placeholder="Phone Number" value={formData.number} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
      {notification && (
        <div style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb',
          borderRadius: '5px'
        }}>
          {notification}
        </div>
      )}
    </div>
  );
};

export default SignUp;

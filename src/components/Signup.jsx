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
    }, 3000);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #3a6073, #a8c0b4)',
    },
    formContainer: {
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '10px',
      padding: '20px',
      width: '300px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
    },
    header: {
      textAlign: 'center',
      color: '#2c3e50',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #bdc3c7', 
      outline: 'none',
      background: 'rgba(233, 236, 239, 0.8)', 
      color: '#34495e',
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      background: '#5c92a1', 
      color: '#fff',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background 0.3s',
    },
    error: {
      color: 'green',
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        {notification && (
          <div style={styles.error}>
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;

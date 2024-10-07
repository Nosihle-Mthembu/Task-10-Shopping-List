import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const action = await dispatch(login(formData));
    if (login.fulfilled.match(action)) {
      navigate('/ShoppingList'); // Redirect to Shopping List page on successful login
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          {error && <p style={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #3a6073, #a8c0b4)', // Muted gradient
  },
  formContainer: {
    background: 'rgba(255, 255, 255, 0.9)', // Lighter background for form
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
  },
  header: {
    textAlign: 'center',
    color: '#2c3e50', // Darker text color for better readability
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #bdc3c7', // Light border
    outline: 'none',
    background: 'rgba(233, 236, 239, 0.8)', // Slightly darker input background
    color: '#34495e', // Darker input text
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    background: '#5c92a1', // Soft blue for button
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.3s',
  },
  buttonHover: {
    background: '#4a7b89', // Darker blue on hover
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: '10px',
  },
};

export default SignIn;

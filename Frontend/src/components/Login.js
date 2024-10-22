import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../ContextApi/AuthContext'
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate();
  // const { user,setUser } = useAuth();
  const { setUser } = useAuth();
  
  const [localUsername, setLocalUsername] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [error, setError] = useState(null);

  // const handleLogin = async() => {
  //   if(!localUsername || !localPassword) return setError('all field required')
  //     // const {data,status} = await axios.post('http://localhost:3000/login',{username:localUsername,password:localPassword})
  //     // setUser(data)
  //   if (localUsername === user.username && localPassword === user.password) {
  //     navigate('/');
  //   } else {
  //     setError('Not registered');
  //   }
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   if (!localUsername || !localPassword) return setError('All fields required');
    
  //   try {
  //     const response = await axios.post('http://localhost:3000/login', { username: localUsername, password: localPassword });
  //     if (response.data.success) {
  //       setUser({ username: localUsername, password: localPassword });
  //       navigate('/');
  //     } else {
  //       setError('Invalid credentials');
  //     }
  //   } catch (error) {
  //     console.error('Login error', error);
  //     setError('Login failed. Please try again.');
  //   }
  // };

  const handleLogin = async () => {
    if (!localUsername || !localPassword) {
      return setError('All fields are required');
    }

    try {
      const { data } = await axios.post('http://localhost:3000/login', { username: localUsername, password: localPassword });
      setUser({ username: data.username });
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className='login-form'>
      <h3>Login</h3>
      <form className='login-content' onSubmit={(e) => e.preventDefault()}>
        <label>Email/username:</label>
        <input 
          type='text' 
          required
          placeholder='Enter username' 
          value={localUsername}
          onChange={(e) => setLocalUsername(e.target.value)}
        />

        <label>Password:</label>
        <input 
          type='password' 
          required
          placeholder='Enter Password'
          value={localPassword}
          onChange={(e) => setLocalPassword(e.target.value)}
        />
        
        {error && <p className='error'>{error}</p>}

        <button className='login-btn' onClick={handleLogin}>Login</button>
        <button className='login-btn' onClick={() => navigate('/signup')}>Sign Up</button>
      </form>
    </div>
  );
}

export default Login;

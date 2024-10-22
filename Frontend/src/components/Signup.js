import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import {useAuth} from '../ContextApi/AuthContext'
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  // const { setUser,user } = useAuth();
  const { setUser } = useAuth();
  const [localUsername, setLocalUsername] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [error, setError] = useState(null);

  // console.log('user from signup page : ',user)
  const handleSubmission = async (e) => {
    // const username = e.target.username.value;
    // const password = e.target.password.value;
    // console.log(username, password);
    console.log(localUsername,localPassword)

    e.preventDefault();
    try {
      if(!localUsername || !localPassword) return setError('all field required')
      const response = await axios.post('http://localhost:3000/signup', { username: localUsername, password: localPassword });
      console.log(response.data);
      setUser({username:localUsername,password:localPassword})
      navigate('/login')
      
    } catch (error) {
      console.error('There was an error!', error);
      setError('Signup failed. Please try again.');
    }
  };

  // const handleSubmission = async (event) => {
  //   event.preventDefault();
  //   const username = event.target.username.value;
  //   const password = event.target.password.value;
  
  //   const response = await fetch('http://localhost:3000/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   });
  
  //   const result = await response.text();
  //   console.log(result);
  // };

  return (
    <div className='login-form'>
      <h3>Sign up page</h3>
      <form className='login-content' onSubmit={handleSubmission}>
        <label>Enter Email/username:</label>
        <input 
          type='text' 
          placeholder='Enter username' 
          value={localUsername}
          onChange={(e) => setLocalUsername(e.target.value)}
        />

        <label>Password:</label>
        <input 
          type='password' 
          placeholder='Enter Password' 
          value={localPassword}
          onChange={(e) => setLocalPassword(e.target.value)}
        />
        
        {error && <p className='error'>{error}</p>}

        <button className='login-btn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Signup;

import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className='login-form'>
      <form className='login-content'>
        <label>Email/username: </label>
        <input type='text' placeholder='Enter username'/>

        <label> Password
        </label>
        <input type='password' placeholder='Enter Password'/>

      </form>
      <div>
     <p>Forget Password</p>   
      </div>
      <div>
        <button className='login-btn'>Login</button>
        <button className='login-btn' onClick={()=>navigate('/signup')}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login

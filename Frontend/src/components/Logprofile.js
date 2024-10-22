import React, { useState } from 'react'
import './Nav.css'
import { useAuth } from '../ContextApi/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logprofile = (cartCount) => {
    const navigate = useNavigate();
  const [localUsername, setLocalUsername] = useState('');
  const [localPassword, setLocalPassword] = useState('');
    const { user,setUser } = useAuth();

    const logoutfun=()=>{

        setUser("");
        setLocalUsername("");
        setLocalPassword("");
        // cartCount=cartCount("");

    localStorage.clear();

    };


  return (
    <div className='profilename'>
        <h4>Your Profile</h4>
        <div>
            
    {/* <h4>Hi, "{user.username}" you are logged in!!! </h4> */}
            
    {user.username ? (
          <h4>Hi, "{user.username}" you are logged in!!!</h4>
        ) : (
          <h4>You have logged out</h4>

        )}
    </div>
    {/* // <div><button className='logout-btn' onClick={logoutfun}>Logout</button></div> */}
<div>
    {user.username ? (
          <button className='logout-btn' onClick={logoutfun}>Logout</button>
        ) : (
          <button className='login-btn' onClick={()=>navigate('/login')}>Login</button>
        )}
</div>
    </div>
  )
}

export default Logprofile

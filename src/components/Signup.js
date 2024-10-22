import React, { useContext, useState } from 'react'
import './Login.css'

const Signup = () => {

    const[username, setUsername, password, setPassword]=useContext(AuthContext)

    const handleSubission = (e) =>{
        e.preventDefault();
        console.log('Username:', username)
        console.log('Password:', password)
    }

  return (
    <div className='login-form'>
      <form className='login-content' onSubmit={handleSubission}>
        <label>Enter Email/username: </label>
        <input type='text' placeholder='Enter username' value={username}
        onChange={(e)=> setUsername(e.target.value)}
        />

        <label> Password
        </label>
        <input type='password' placeholder='Enter Password' value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />

      </form>
      {/* <div>
     <p>Forget Password</p>   
      </div> */}
      <div>
        <button className='login-btn' type='submit'>Submit</button>
      </div>
    </div>
  )
}

export default Signup

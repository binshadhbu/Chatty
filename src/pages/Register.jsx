import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
        <span className="logo">ChattY</span>
        <span className="title">Register</span>
            <form >
                <input type="text" placeholder='user name' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" style={{display:'none'}} id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>addAvatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have an account? <span>Login</span></p>
    </div>
    </div>
  )
}

export default Register
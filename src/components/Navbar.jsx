import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">
        Chatty
      </span>
      <div className="user">
        <img src="https://www.pexels.com/photo/woman-wearing-white-shirt-with-white-flower-on-her-ear-3586798/" alt="" />
        <span>Username</span>
        <button>logout</button>
      
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import Add from "../img/IMG_6861 (1).jpg"


const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
      <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
      <img src={Add} alt="image" />
      <div className="userChatinfo">
        <span>Username</span>
      </div>
      </div>
    </div>
  )
}

export default Search
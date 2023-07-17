import React from 'react'
import Input from './Input'
import Messages from './Messages'



const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Username</span>
        <div className="chatIcons">
        {/* <img src={Cam} alt="" />
        <img src={Mic} alt="" />
        <img src={Add} alt="" /> */}
        </div>
        
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
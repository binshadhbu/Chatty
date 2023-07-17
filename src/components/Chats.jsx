import React from "react";
import Add from "../img/IMG_6861 (1).jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Add} alt="image" />
        <div className="userChatinfo">
          <span>Username</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img src={Add} alt="image" />
        <div className="userChatinfo">
          <span>Username</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img src={Add} alt="image" />
        <div className="userChatinfo">
          <span>Username</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img src={Add} alt="image" />
        <div className="userChatinfo">
          <span>Username</span>
          <p>Hello</p>
        </div>
      </div> 
    </div>
  );
};

export default Chats;

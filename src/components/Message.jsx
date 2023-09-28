import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/14653981/pexels-photo-14653981.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hallo</p>
        <img
          src="https://images.pexels.com/photos/14653981/pexels-photo-14653981.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;

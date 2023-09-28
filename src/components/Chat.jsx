import React from "react";
import Cam from "../imgs/cam.png";
import Add from "../imgs/add.png";
import More from "../imgs/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Ali</span>
        <div className="chatIcons">
          <img src={Cam} alt="camera" />
          <img src={Add} alt="Add a friend" />
          <img src={More} alt="More options" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;

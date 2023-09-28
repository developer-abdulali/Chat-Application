import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14653981/pexels-photo-14653981.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="man "
        />
        <span>Ali</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;

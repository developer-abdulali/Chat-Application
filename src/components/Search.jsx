import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/14653981/pexels-photo-14653981.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Ali</span>
        </div>
      </div>
    </div>
  );
};

export default Search;

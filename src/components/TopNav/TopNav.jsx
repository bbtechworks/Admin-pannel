import React from 'react';
import './TopNav.css';

function TopNav() {
  return (
    <div id="topnav-container" className="top-nav">
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." />
        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="nav-icons">
        <div><i className="fa-solid fa-moon"></i></div>
        <i className="fa-solid fa-flag"></i>
        <div className="notifications">
          <i className="fa-solid fa-bell"></i>
          <span className="badge"></span>
        </div>
        <div className="messages">
          <i className="fa-solid fa-message"></i>
          <span className="badge_msg"></span>
        </div>
        <div className="profile">
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  );
}

export default TopNav; // Ensure this is a default export
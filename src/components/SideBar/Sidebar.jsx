import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="sidebar">
      <div className="logo">
        <img src="/assets/images/logo.png" alt="ShopPoint Logo" />
        <span>Metro Scale</span>
      </div>

      <div className="menu">
        <div>
          {/* Dashboard Dropdown */}
          <div className={`menu_item ${activeDropdown === 0 ? 'active' : ''}`}>
            <button className="dropdown-btn" onClick={() => toggleDropdown(0)}>
              <img src="/assets/icons/dark/dashbpard.png" alt="Dashboard" />
              <span>Dashboard</span>
              <span className="arrow">▸</span>
            </button>
            <ul className="submenu">
              <li><a href="#">Sales Analytics</a></li>
              <li><a href="#">Sellers List</a></li>
              <li><a href="#">Sellers Table</a></li>
              <li><a href="#">Sellers Grid</a></li>
              <li><a href="#">Seller Profile</a></li>
              <li><a href="#">Revenue by Period</a></li>
            </ul>
          </div>

          {/* Products Dropdown */}
          <div className={`menu_item ${activeDropdown === 1 ? 'active' : ''}`}>
            <button className="dropdown-btn" onClick={() => toggleDropdown(1)}>
              <img src="/assets/icons/dark/products.png" alt="Products" />
              <span>Products</span>
              <span className="arrow">▸</span>
            </button>
            <ul className="submenu">
              <li><a href="#">Top Products</a></li>
              <li><a href="#">Products Grid</a></li>
              <li><a href="#">Products Management</a></li>
              <li><a href="#">Product Editor</a></li>
              <li><a href="#">Banners</a></li>
            </ul>
          </div>

          {/* Orders */}
          <div className="menu-item">
            <a href="#">
              <img src="/assets/icons/dark/orders.png" alt="Orders" />
              <span>Orders</span>
            </a>
          </div>

          {/* Statistics */}
          <div className="menu-item">
            <a href="#">
              <img src="/assets/icons/dark/statistics.png" alt="Statistics" />
              <span>Statistics</span>
            </a>
          </div>

          {/* Reviews */}
          <div className="menu-item">
            <a href="#">
              <img src="/assets/icons/dark/ratings.png" alt="Reviews" />
              <span>Reviews</span>
            </a>
          </div>

          {/* Customers */}
          <div className="menu-item">
            <a href="#">
              <img src="/assets/icons/dark/customers.png" alt="Customers" />
              <span>Customers</span>
            </a>
          </div>

          {/* Transactions */}
          <div className="menu-item">
            <a href="#">
              <img src="/assets/icons/dark/transactions.png" alt="Transactions" />
              <span>Transactions</span>
            </a>
          </div>

          {/* Settings */}
          <div className="menu-item">
            <a href="#">
              <img src="/assets/icons/dark/settings.png" alt="Settings" />
              <span>Settings</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
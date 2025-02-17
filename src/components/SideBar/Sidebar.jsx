import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
              <li><Link to="/sales-analytics">Sales Analytics</Link></li>
              <li><Link to="/sellers-list">Sellers List</Link></li>
              <li><Link to="/sellers-table">Sellers Table</Link></li>
              <li><Link to="/sellers-grid">Sellers Grid</Link></li>
              <li><Link to="/seller-profile">Seller Profile</Link></li>
              <li><Link to="/revenue-by-period">Revenue by Period</Link></li>
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
              <li><Link to="/top-products">Top Products</Link></li>
              <li><Link to="/products-grid">Products Grid</Link></li>
              <li><Link to="/products-management">Products Management</Link></li>
              <li><Link to="/product-editor">Product Editor</Link></li>
              <li><Link to="/banners">Banners</Link></li>
            </ul>
          </div>

          {/* Orders */}
          <div className="menu-item">
            <Link to="/orders">
              <img src="/assets/icons/dark/orders.png" alt="Orders" />
              <span>Orders</span>
            </Link>
          </div>

          {/* Statistics */}
          <div className="menu-item">
            <Link to="/statistics">
              <img src="/assets/icons/dark/statistics.png" alt="Statistics" />
              <span>Statistics</span>
            </Link>
          </div>

          {/* Reviews */}
          <div className="menu-item">
            <Link to="/reviews">
              <img src="/assets/icons/dark/ratings.png" alt="Reviews" />
              <span>Reviews</span>
            </Link>
          </div>

          {/* Customers */}
          <div className="menu-item">
            <Link to="/customers">
              <img src="/assets/icons/dark/customers.png" alt="Customers" />
              <span>Customers</span>
            </Link>
          </div>

          {/* Transactions */}
          <div className="menu-item">
            <Link to="/transactions">
              <img src="/assets/icons/dark/transactions.png" alt="Transactions" />
              <span>Transactions</span>
            </Link>
          </div>

          {/* Settings */}
          <div className="menu-item">
            <Link to="/settings">
              <img src="/assets/icons/dark/settings.png" alt="Settings" />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
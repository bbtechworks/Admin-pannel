import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  const updateDateTime = () => {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
      dateElement.textContent = new Date().toLocaleString();
    }
  };

  React.useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="header-section-container" className="header-section">
      <h2 id="page-title">Products Grid</h2>
      <div className="header-actions">
        <span className="refresh-text">Data Refresh</span>
        <button id="refresh-btn" className="refresh-btn">
          <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
        <div className="date-box">
          <span id="current-date">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Header; // Ensure this is a default export
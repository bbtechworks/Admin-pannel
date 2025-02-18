import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/SideBar/Sidebar";
import TopNav from "./components/TopNav/TopNav";
import SalesAnalytics from './pages/Dashboard/SalesAnalytics';
import ProductEditor from './pages/Products/ProductEditor';
import Dashboard from "./pages/Dashboard/Dashboard";
import './index.css';

function App() {
  return (
    <Router>
      <div className="main-container">
      <div>
      <Dashboard />
    </div>
        <Sidebar />
        <div className="main-inner">
          <TopNav />
          <div className="mainWrapper">
            <Routes>
              <Route path="/sales-analytics" element={<SalesAnalytics />} />
              <Route path="/product-editor" element={<ProductEditor />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import Card from './components/ui/card';  // Example
import Progress from './components/ui/progress';  // Example
import Button from './components/ui/button'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/SideBar/Sidebar";
import TopNav from "./components/TopNav/TopNav";
import SalesAnalytics from './pages/Dashboard/SalesAnalytics';
import ProductEditor from './pages/Products/ProductEditor';
import RevenueByPeriod from "./pages/Dashboard/RevenueByPeriod";  // Adjusted import path
;
import './index.css';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Sidebar />
        <div className="main-inner">
          <TopNav />
          <div className="mainWrapper">
            <Routes>
              <Route path="/sales-analytics" element={<SalesAnalytics />} />
              <Route path="/product-editor" element={<ProductEditor />} />
              <Route path="/revenue-by-period" element={<RevenueByPeriod />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
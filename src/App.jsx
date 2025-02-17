import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Statistics from './pages/Statistics';
import Products from './pages/Products';
import SalesAnalytics from './pages/SalesAnalytics'; // Add new pages
import TopProducts from './pages/TopProducts';
import Sidebar from "./components/SideBar/Sidebar";
import TopNav from "./components/TopNav/TopNav";
import Header from "./components/Header/Header";   
import './index.css';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Sidebar />
        <div className="main-inner">
          <TopNav />
          <Header />
          <div className="mainWrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sales-analytics" element={<SalesAnalytics />} />
              <Route path="/top-products" element={<TopProducts />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
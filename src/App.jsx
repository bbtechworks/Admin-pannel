import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/Sidebar';
import TopNav from './components/TopNav/TopNav';
import SalesBarChart from './components/charts/SalesBarChart';
import './index.css';

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="main-inner">
        <TopNav />
        <Header />
        <div className="mainWrapper"></div>
        <div className="shope_point"></div>
        <div className="chart">
          <div className="SalesBarChart">
            <h2 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '20px' }}>
              Sales Statistic 2022
            </h2>
            <SalesBarChart />
          </div>
          <div className="Total_report"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import './RevenueByPeriod.css'; // Import the CSS file for styling

const RevenueByPeriod = () => {
  return (
    <div className="revenue-container">
      <h1>Revenue By Period</h1>

      <section className="sales-period">
        <h2>Sales period:</h2>
        <p>01/02/2025 - 18/02/2025</p>
      </section>

      <section className="sales-volume">
        <h2>Sales Volume</h2>
        <ul>
          <li>$10k</li>
          <li>$12k</li>
          <li>$6k</li>
          <li>$4k</li>
          <li>$0</li>
          <li>Q1</li>
          <li>Q2</li>
          <li>Q3</li>
          <li>Q4</li>
        </ul>
      </section>

      <section className="conversion-rate">
        <h2>Conversion Rate</h2>
        <table>
          <thead>
            <tr>
              <th>Total</th>
              <th>Distribution</th>
              <th>Time</th>
              <th>180-945</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022</td>
              <td>3,238</td>
              <td>9.10%</td>
              <td>8.53%</td>
            </tr>
            <tr>
              <td>2023</td>
              <td>12,346</td>
              <td>9.95%</td>
              <td>9.52%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="average-referral-rate">
        <h2>Average Referral Rate</h2>
        <ul>
          <li>Referral Program Budget: 27%</li>
          <li>Referral Ratio by 100 Purchased: 67%</li>
          <li>Referral Ratio by Campaign: 52%</li>
        </ul>
      </section>

      <section className="profit-performance">
        <h2>Profit Performance</h2>
        <ul>
          <li>Top Rated</li>
          <li>New ID</li>
          <li>Best Solders</li>
          <li>Active Reviews</li>
        </ul>
      </section>

      <section className="total-balance">
        <h2>Total Balance</h2>
        <ul>
          <li>2022</li>
          <li>2023</li>
          <li>2178.2k</li>
        </ul>
      </section>

      <section className="total-expense">
        <h2>Total Expense</h2>
        <p>493.1k</p>
      </section>

      <section className="total-profit">
        <h2>Total Profit</h2>
        <p>5194.1k</p>
      </section>

      <section className="sales-value">
        <h2>Sales Value:</h2>
        <ul>
          <li>2022</li>
          <li>2023</li>
        </ul>
      </section>
    </div>
  );
};

export default RevenueByPeriod;
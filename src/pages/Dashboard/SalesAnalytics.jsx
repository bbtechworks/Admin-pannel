import SalesBarChart from '../../components/charts/SalesBarChart';
import '../../css/Dashboard/dashboardHero.css';
import '../../css/Dashboard/salesAnalytics.css';

const SalesAnalytics = () => {
  return (
    <div class="wrapper">
      <div>
        <div className="card">
          <div className="logo-section">
            <img className="logo" src="/assets/logo_dark-01612bb2.svg" alt="ShopPoint" />
            <span className="shop-title">ShopPoint</span>
          </div>
          <div className="content">
            <div className="description">
              <h3>ShopPoint - Retail</h3>
              <p>Aliquam erat volutpat. Duis molestie ultrices tempus. Mauris sem orci, euismod sit amet.</p>
            </div>

            <div className="stats-section">
              <div className="stat-header">
                <h5>Average Rate 2023</h5>
                <button className="info-btn" aria-label="More info">ℹ️</button>
              </div>

              <div className="stats-container">
                <div className="stat">
                  <div className="icon bg-green">💎</div>
                  <div>
                    <span className="amount">$15,412</span>
                    <span className="label">Income</span>
                    <div className="trend text-green">▲ +45.21%</div>
                  </div>
                </div>

                <div className="stat">
                  <div className="icon bg-red">💰</div>
                  <div>
                    <span className="amount">$53,487</span>
                    <span className="label">Expense</span>
                    <div className="trend text-red">▼ -12%</div>
                  </div>
                </div>

                <div className="stat">
                  <div className="icon bg-blue">📦</div>
                  <div>
                    <span className="amount">5,412</span>
                    <span className="label">New Orders</span>
                    <div className="trend text-green">▲ +14.36%</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div>
        <div className="balance-card">
          <img className="balance-img" src="balanceImage" alt="Balance" />
          <div className="balance-info">
            <span className="balance-amount">$476.3k</span>
            <span className="balance-label">Total Balance</span>
          </div>
        </div>
      </div>
      <div>
        <div className="chart">
          <div className="SalesBarChart">
            <h2 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '20px' }}>
              Sales Statistic 2022
            </h2>
            <SalesBarChart />
          </div>
        </div>
      </div>
      <div>
        <div className="Total_report">
          <div className="total-report-card">
            <div>
              <div className="total-report-header">
                <h4>Total Report</h4>
                <button className="info-btn" aria-label="More info">
                  <i className="icon-circle-info-solid"></i>
                </button>
              </div>
              <p className="date-range">All Periods per 01/01/2022 - 08/28/2023</p>
            </div>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-label">
                  <img src="/assets/coins-c4361fe1.webp" alt="Revenue" className="icon" />
                  <h6>Revenue</h6>
                </div>
                <span className="amount">$176,120</span>
                <div className="change positive">
                  <i className="icon-caret-up-solid"></i>
                  <span>+45%</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">
                  <img src="/assets/coins-c4361fe1.webp" alt="Expense" className="icon" />
                  <h6>Expense</h6>
                </div>
                <span className="amount">$310,452</span>
                <div className="change negative">
                  <i className="icon-caret-down-solid"></i>
                  <span>-12%</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">
                  <img src="/assets/coins-c4361fe1.webp" alt="Profit" className="icon" />
                  <h6>Profit</h6>
                </div>
                <span className="amount">$342,558</span>
                <div className="change positive">
                  <i className="icon-caret-up-solid"></i>
                  <span>+14.56%</span>
                </div>
              </div>
            </div>
            <a className="btn" href="/revenue-by-period">More Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;


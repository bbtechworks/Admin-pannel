import SalesBarChart from '../components/charts/SalesBarChart';

const Dashboard = () => {
  return (
    <div className="chart">
      <div className="SalesBarChart">
        <h2 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '20px' }}>
          Sales Statistic 2022
        </h2>
        <SalesBarChart />
      </div>
      <div className="Total_report"></div>
    </div>
  );
};

export default Dashboard;
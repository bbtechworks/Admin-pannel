import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from '../../components/ui/card';
import { Progress } from '../../components/ui/progress';
import { Button } from '../../components/ui/button';


const salesData = [
  { quarter: 'Q1', 2022: 12000, 2023: 8000 },
  { quarter: 'Q2', 2022: 10000, 2023: 9000 },
  { quarter: 'Q3', 2022: 16000, 2023: 10000 },
  { quarter: 'Q4', 2022: 14000, 2023: 13000 }
];

const profitData = [
  { name: '2022', value: 60 },
  { name: '2023', value: 40 }
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-[#0d1b2a] text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Sales Period</h2>
        <input type="date" className="p-2 bg-gray-800 text-white rounded-lg border border-gray-600" />
      </div>
      <div className="grid grid-cols-4 gap-6">
        <Card className="col-span-2 p-6 rounded-lg shadow-lg bg-gray-900">
          <h3 className="text-lg font-semibold mb-4">Sales Volume</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={salesData}>
              <Tooltip contentStyle={{ backgroundColor: '#1E293B', color: '#fff' }} />
              <Line type="monotone" dataKey="2022" stroke="#ddd" strokeWidth={3} />
              <Line type="monotone" dataKey="2023" stroke="#2DD4BF" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        {[ 
          { title: 'Income 2022', value: '$96.1k', change: '+10%', color: 'text-green-500' },
          { title: 'Profit 2022', value: '$2.1k', change: '+78%', color: 'text-green-500' },
          { title: 'Income 2023', value: '$396.1k', change: '-12%', color: 'text-red-500' },
          { title: 'Profit 2023', value: '$80.1k', change: '+65%', color: 'text-green-500' }
        ].map((item, index) => (
          <Card key={index} className="p-6 text-center rounded-lg shadow-md bg-gray-900">
            <h3 className="text-md font-semibold">{item.title}</h3>
            <p className="text-2xl font-bold">{item.value}</p>
            <p className={item.color}>{item.change}</p>
          </Card>
        ))}
        <Card className="col-span-2 p-6 rounded-lg shadow-lg bg-gray-900">
          <h3 className="text-lg font-semibold mb-4">Profit Performance</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={profitData} dataKey="value" outerRadius={80}>
                <Cell fill="#CBD5E1" />
                <Cell fill="#2DD4BF" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>
        <Card className="p-6 text-center col-span-2 rounded-lg shadow-md bg-gray-900">
          <h3 className="text-md font-semibold">Conversion Rate</h3>
          <p className="text-2xl font-bold">+14.08%</p>
          <p>Regular Customers: 32,547</p>
          <p>New Customers: +12,345</p>
        </Card>
        <Card className="p-6 col-span-2 rounded-lg shadow-md bg-gray-900">
          <h3 className="text-md font-semibold">Average Referral Rate</h3>
          <Progress value={27} />
          <p>Referral Program Budget: 27%</p>
          <Progress value={67} />
          <p>Referral Rate by 100 Purchased: 67%</p>
          <Progress value={52} />
          <p>Referral Rate by Campaign: 52%</p>
        </Card>
        {[ 
          { title: 'Total Balance', value: '$176.2k' },
          { title: 'Total Expense', value: '$32.1k' },
          { title: 'Total Profit', value: '$144.1k' }
        ].map((item, index) => (
          <Card key={index} className="p-6 text-center col-span-2 rounded-lg shadow-md bg-gray-900">
            <h3 className="text-md font-semibold">{item.title}</h3>
            <p className="text-2xl font-bold">{item.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

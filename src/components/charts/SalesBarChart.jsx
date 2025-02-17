import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 10000, expense: 8000 },
  { name: 'Feb', revenue: 12000, expense: 9000 },
  { name: 'Mar', revenue: 8000, expense: 6000 },
  { name: 'Apr', revenue: 15000, expense: 10000 },
  { name: 'May', revenue: 9000, expense: 7000 },
  { name: 'Jun', revenue: 11000, expense: 8500 },
  { name: 'Jul', revenue: 13000, expense: 9500 },
  { name: 'Aug', revenue: 10000, expense: 8000 },
  { name: 'Sep', revenue: 14000, expense: 11000 },
  { name: 'Oct', revenue: 12000, expense: 9000 },
  { name: 'Nov', revenue: 9000, expense: 7000 },
  { name: 'Dec', revenue: 15000, expense: 12000 },
];

export default class SalesBarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2a3a4a" /> {/* Custom grid color */}
          <XAxis
            dataKey="name"
            axisLine={{ stroke: '#6c7a89' }} // Custom axis line color
            tick={{ fill: '#ffffff' }} // Custom tick color
          />
          <YAxis
            axisLine={{ stroke: '#6c7a89' }} // Custom axis line color
            tick={{ fill: '#ffffff' }} // Custom tick color
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#031123', // Custom tooltip background
              border: '1px solid #2a3a4a', // Custom tooltip border
              borderRadius: '8px', // Rounded corners
              color: '#ffffff', // Custom tooltip text color
            }}
          />
          <Legend
            wrapperStyle={{
              paddingTop: '20px', // Add spacing
              color: '#ffffff', // Custom legend text color
            }}
          />
          <Bar dataKey="revenue" fill="#4f89fc" name="Revenue" /> {/* Custom bar color */}
          <Bar dataKey="expense" fill="#00ba9d" name="Expense" /> {/* Custom bar color */}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
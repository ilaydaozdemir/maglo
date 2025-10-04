import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import styles from './Chart.module.css';

const Chart = ({ 
  type = 'line', 
  data = [], 
  width = '100%', 
  height = 300,
  title,
  showLegend = true,
  showGrid = true,
  colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00ff00'],
  dataKeys = ['value'],
  dataLabels = ['Value']
}) => {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke="transparent" 
              tick={{ 
                fill: 'var(--color-chart-axis-text)', 
                fontSize: 12, 
                fontWeight: 400 
              }} 
            />
            <YAxis 
              stroke="transparent" 
              tick={{ 
                fill: 'var(--color-chart-axis-text)', 
                fontSize: 12, 
                fontWeight: 400 
              }} 
              domain={[0, 25000]}
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              tickFormatter={(value) => `${value/1000}K`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--color-chart-tooltip-bg)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '8px 12px'
              }}
            />
            {showLegend && <Legend />}
            {dataKeys.map((key, index) => (
              <Line 
                key={key}
                type="monotone" 
                dataKey={key} 
                stroke={colors[index % colors.length]} 
                strokeWidth={2}
                name={dataLabels[index] || key}
              />
            ))}
          </LineChart>
        );
      
      case 'bar':
        return (
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke="transparent" 
              tick={{ 
                fill: 'var(--color-chart-axis-text)', 
                fontSize: 12, 
                fontWeight: 400 
              }} 
            />
            <YAxis 
              stroke="transparent" 
              tick={{ 
                fill: 'var(--color-chart-axis-text)', 
                fontSize: 12, 
                fontWeight: 400 
              }} 
              domain={[0, 25000]}
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              tickFormatter={(value) => `${value/1000}K`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--color-chart-tooltip-bg)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '8px 12px'
              }}
               formatter={(value, name) => {
                 console.log('Tooltip formatter:', { value, name });
                 if (name === 'expense') {
                   return [`$${value.toLocaleString()}`, 'Expenses'];
                 }
                 if (name === 'income') {
                   return [`$${value.toLocaleString()}`, 'Income'];
                 }
                 return null;
               }}
              labelFormatter={() => ''}
            />
            {showLegend && <Legend />}
            {dataKeys.map((key, index) => (
              <Bar 
                key={key}
                dataKey={key} 
                fill={colors[index % colors.length]}
                name={dataLabels[index] || key}
              />
            ))}
          </BarChart>
        );
      
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--color-chart-tooltip-bg)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '8px 12px'
              }}
               formatter={(value, name) => {
                 console.log('Tooltip formatter:', { value, name });
                 if (name === 'expense') {
                   return [`$${value.toLocaleString()}`, 'Expenses'];
                 }
                 if (name === 'income') {
                   return [`$${value.toLocaleString()}`, 'Income'];
                 }
                 return null;
               }}
              labelFormatter={() => ''}
            />
            {showLegend && <Legend />}
          </PieChart>
        );
      
      default:
        return (
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke="transparent" 
              tick={{ 
                fill: 'var(--color-chart-axis-text)', 
                fontSize: 12, 
                fontWeight: 400 
              }} 
            />
            <YAxis 
              stroke="transparent" 
              tick={{ 
                fill: 'var(--color-chart-axis-text)', 
                fontSize: 12, 
                fontWeight: 400 
              }} 
              domain={[0, 25000]}
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              tickFormatter={(value) => `${value/1000}K`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--color-chart-tooltip-bg)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '8px 12px'
              }}
               formatter={(value, name) => {
                 console.log('Tooltip formatter:', { value, name });
                 if (name === 'expense') {
                   return [`$${value.toLocaleString()}`, 'Expenses'];
                 }
                 if (name === 'income') {
                   return [`$${value.toLocaleString()}`, 'Income'];
                 }
                 return null;
               }}
              labelFormatter={() => ''}
            />
            {showLegend && <Legend />}
            <Line type="monotone" dataKey="value" stroke={colors[0]} strokeWidth={2} />
          </LineChart>
        );
    }
  };

  return (
    <div className={styles.chartContainer}>
      {title && <h3 className={styles.chartTitle}>{title}</h3>}
      <ResponsiveContainer width={width} height={height}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
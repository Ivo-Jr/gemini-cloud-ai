import React, { useContext } from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ThemeContext } from '../contexts/ThemeContext';

const LIGHT_COLORS = ['#4299E1', '#F56565', '#48BB78'];
const DARK_COLORS = ['#3182CE', '#E53E3E', '#38A169'];

const ExpenseChart = ({ expenses, type }) => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  const COLORS = isDarkMode ? DARK_COLORS : LIGHT_COLORS;
  const textColor = isDarkMode ? '#E2E8F0' : '#4A5568';
  const strokeColor = isDarkMode ? '#4A5568' : '#D1D5DB';

  const categoryData = expenses.reduce((acc, expense) => {
    const existingCategory = acc.find(item => item.category === expense.category);
    if (existingCategory) {
      existingCategory.amount += expense.amount;
    } else {
      acc.push({ category: expense.category, amount: expense.amount });
    }
    return acc;
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-md">
          <p className="label text-gray-900 dark:text-white">{`${label || payload[0].name} : R$ ${payload[0].value.toFixed(2)}`}</p>
        </div>
      );
    }
    return null;
  };

  if (type === 'pie') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            labelLine={{ stroke: textColor }}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="amount"
            nameKey="category"
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: textColor }} />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={categoryData}>
        <CartesianGrid strokeDasharray="3 3" stroke={strokeColor} />
        <XAxis dataKey="category" tick={{ fill: textColor }} />
        <YAxis tick={{ fill: textColor }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ color: textColor }} />
        <Bar dataKey="amount" fill={COLORS[0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseChart;

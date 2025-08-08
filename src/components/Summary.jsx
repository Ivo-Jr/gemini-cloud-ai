import React from 'react';

const Summary = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const count = expenses.length;
  const average = count > 0 ? total / count : 0;

  const SummaryCard = ({ title, value, icon }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-600 dark:text-gray-300 text-sm">{title}</h3>
          <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">R$ {value.toFixed(2)}</p>
        </div>
        <div className={`text-2xl 'text-purple-500'}`}>
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SummaryCard title="Total de Gastos" value={total} icon="$" />
      <SummaryCard title="Número de Despesas" value={count} icon="📊" />
      <SummaryCard title="Gasto Médio" value={average} icon="⏱" />
    </>
  );
};

export default Summary;

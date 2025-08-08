import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-6 mb-8 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard de Gastos Mensais</h1>
        <p className="text-gray-600 dark:text-gray-300">Gerencie suas despesas de forma inteligente</p>
      </div>
      <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
};

export default Header;

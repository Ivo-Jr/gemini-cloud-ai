import { describe, expect, it, vi } from 'vitest';
import { ThemeContext } from '../contexts/ThemeContext';
import Header from './Header';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Header', () => {
  it('renders the header with title and description', () => {
    const mockToggleTheme = () => {};

    render(
      <ThemeContext.Provider value={{ theme: 'light', toggleTheme: mockToggleTheme }}>
        <Header />
      </ThemeContext.Provider>
    );

    expect(screen.getByText('Dashboard de Gastos Mensais')).toBeInTheDocument();
    expect(screen.getByText('Gerencie suas despesas de forma inteligente')).toBeInTheDocument();
  });

  it('calls toggleTheme when the button is clicked', () => {
    const mockToggleTheme = vi.fn();

    render(
      <ThemeContext.Provider value={{ theme: 'light', toggleTheme: mockToggleTheme }}>
        <Header />
      </ThemeContext.Provider>
    )

    const themeButton = screen.getByRole('button');
    fireEvent.click(themeButton);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  })

  it('displays the correct theme icon', () => {
    const mockToggleTheme = () => {};

    render(
      <ThemeContext.Provider value={{ theme: 'light', toggleTheme: mockToggleTheme }}>
        <Header />
      </ThemeContext.Provider>
    );

    expect(screen.getByText('🌙')).toBeInTheDocument();
  });
});
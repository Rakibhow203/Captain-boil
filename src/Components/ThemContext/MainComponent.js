// MainComponent.js
import React from 'react';
import { useTheme } from './ThemeContext';

function MainComponent() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      {/* Your other components and content */}
    </div>
  );
}

export default MainComponent;

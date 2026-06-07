import React from 'react';

function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <button className="toggle-btn" onClick={onToggle}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
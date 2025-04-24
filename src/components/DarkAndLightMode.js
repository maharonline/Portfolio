import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import "./DarkAndLightMode.css";

export default function DarkAndLightMode() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.add('dark-mode');
    } else {
      setMode('light');
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className="button_mode">

    <button onClick={toggleMode} className='mode_button'>
      {mode === 'light' ? <FaMoon /> : <FaSun />}
    </button>
    </div>
  );
}

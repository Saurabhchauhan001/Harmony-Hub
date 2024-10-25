// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CustomThemeProvider from './contexts/ThemeContext'; // Import the provider
import './index.css'; // Optional: Add some CSS styling

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider> {/* Wrap App with Theme Provider */}
      <App />
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

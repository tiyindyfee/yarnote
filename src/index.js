// Load React
import React from 'react';
import ReactDOM from 'react-dom';

// Global internet connection error
window.internetConnectionCheck = (response) => (response.status >= 200 && response.status < 400) ? response : alert('There has been a internet connection error. Please try reloading the page, or visit again later.')

// Load components
import Routes from './Routes';
import './index.css';

// Render root component
ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ContextContainer } from './context/ContextContainer';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextContainer>
        <App />
      </ContextContainer>
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
import { ContextContainer } from './context/ContextContainer';

import './index.css';
import './styles/variables.css';

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_API_URL}/graphql`,
  cache: new InMemoryCache(),
  credentials: 'include',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ContextContainer>
        <App />
      </ContextContainer>
    </ApolloProvider>
  </BrowserRouter>
);

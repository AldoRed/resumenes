import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{ApolloClient, InMemoryCache, ApolloProvider,gql} from'@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8090/graphql',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
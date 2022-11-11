import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{ApolloClient, InMemoryCache, ApolloProvider,gql} from'@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8090/graphql',
  cache: new InMemoryCache(),
})

client.query({
  query: gql`
  query getUsuarios{
    getUsuarios{
      id 
      email
      pass
    }
  }`
}).then((result)=>console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
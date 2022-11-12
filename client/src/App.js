import './App.css';
import React from 'react';
import MostrarUsuarios from './components/userList';
import AddUser from './components/registro';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// para q esto funcione: entrar al directorio server/ y correr 'nodemon app', luego volver 
// al directorio client y correr 'npm start'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
})


function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      <h1>Resumenes</h1>
      <MostrarUsuarios></MostrarUsuarios>
    </div>
    </ApolloProvider>
  );
}
export default App;
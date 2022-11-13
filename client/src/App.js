import './App.css';
import React from 'react';
import MostrarUsuarios from './components/userList';
import Navbar from './components/navbar';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Ingreso from './components/ingreso';

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
      <Navbar />
      <Ingreso />
      <MostrarUsuarios />
    </div>
    </ApolloProvider>
  );
}
export default App;
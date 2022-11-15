import './App.css';
import React from 'react';
import MostrarUsuarios from './components/userList';
import Navbar from './components/navbar';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Ingreso from './components/ingreso';
import Footer from './components/footer';
import Registro from './components/registro';
import Materias from './components/materias';

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
      <Router>
        <Routes>
            <Route exact path='/' element={
              <>
            <Navbar/>
            <Footer/>
              </>
            } />
            <Route path='/asignaturas' element={
              <>
              <Materias/>
              <Footer/>
              </>
            }/>
        </Routes>
      </Router>
    </div>
    </ApolloProvider>
  );
}
export default App;
import './App.css';
import React from 'react';
import Ingreso from './components/ingreso';
import Materias from './components/materias';
import Registro from './components/registro';
import {useQuery, gql} from '@apollo/client';

const GET_USUARIOS = gql`
query getUsuarios{
  getUsuarios{
    id 
    email
    pass
  }
}`;

function MostrarUsuarios() {
  const {loading, error, data} = useQuery(GET_USUARIOS);
  if(loading) return (<p>cargando...</p>);
  if(error) return (<p>{error.message}</p>);
  let final = [];
  data.getUsuarios.map(obj => {
    final.push(<li key={obj.id}>{obj.email}</li>)
  })
  return(
    <ul>
      {final}
    </ul>)
}

function App() {
  return (
    
    <div>
      <h1>Resumenes</h1>
      <MostrarUsuarios></MostrarUsuarios>
      <Materias/>
    </div>
    
  );
}

export default App;

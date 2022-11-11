import './App.css';
import React from 'react';
import Ingreso from './components/ingreso';
import Materias from './components/materias';
import Registro from './components/registro';
import {useQuery, gql} from '@apollo/client';


function App() {
  return (
    
    <div>
      <h1>Resumenes</h1>
      <Materias/>
    </div>
    
  );
}

export default App;

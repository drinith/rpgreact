import Ficha from './components/ficha'
import React,{useState} from 'react'
const apiUrl = 'http://localhost:4000';



function App() {
  const storedJwt = localStorage.getItem('token');


//Esse é o logar

  return (
    <div>
             
      <Ficha />


    </div>
  );

}

export default App;

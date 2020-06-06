import React, { useState } from 'react';
import './App.css';
import Header from './Header'

function App() {
  const [counter, setCounter] = useState(0) 

  function handleButtonClick(){
    setCounter(counter + 1)

  }
  return (  
    <div>   
      <Header title={`Contado: ${counter}`}/> 
      <Header title="Ecoleta"/> 
        <h1>{ counter }</h1>
        
        <button type="button" onClick={handleButtonClick}>Botão</button>
    </div>
  );
}

export default App;


import React from 'react';
import ControlledForm from './form';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <h2>  Form Example</h2>
      <ControlledForm />
      
      <h2> Greeting</h2>
      <Greeting/>
    </div>
  );
}

export default App;
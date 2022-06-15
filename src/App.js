import './App.css';
import axios from 'axios';
import React from 'react';
import SimpsonExpression from './components/Simpson';

const sampleSimpson ={
  
    quote: "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    characterDirection: "Left"
    
}

function App() {
  const [simpson, setSimpson] = React.useState(sampleSimpson);
  const newSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);  
      });
  };
 
  return (
    <div className='simpson'>
      <SimpsonExpression simpson={simpson} />
      <button type="button" onClick={newSimpson}>Change citation</button>
    </div>
  );
}
export default App;

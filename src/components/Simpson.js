import React from 'react';
import './simpson.css'


function SimpsonExpression({ simpson }) {
  return (
    
      <div>
        <ul>
            <li>{simpson.quote}</li>
            <li>{simpson.character}</li>  
        </ul>
        <img src={simpson.image} alt={simpson.character} />
      </div>
    
  );
}

export default SimpsonExpression;
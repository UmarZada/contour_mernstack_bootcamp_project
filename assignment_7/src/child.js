import React, { useState, useContext } from 'react';
import  ResultContext  from './ResultContext';

const Child = ({ operation, handleOperation }) => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const resultRef = useContext(ResultContext);

  const performOperation = () => {
    let result;
    if (operation === 'addition') {
      result = parseInt(number1) + parseInt(number2);
    } else if (operation === 'subtraction') {
      result = parseInt(number1) - parseInt(number2);
    } else if (operation === 'division') {
      result = parseInt(number1) / parseInt(number2);
    }
    handleOperation(operation, result);
    setNumber1('');
    setNumber2('');
  };
  

  return (
    <div>
      
      <div>
        <input
          type="input"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <input
          type="input"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
        <button onClick={performOperation}>{operation}</button>
</div>

</div>
);
};

export default Child;
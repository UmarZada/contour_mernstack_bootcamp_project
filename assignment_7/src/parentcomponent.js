import React, { useState, useRef } from 'react';
import Child from './child';
import ResultContext from './ResultContext';

const Parent = () => {
  const [additionResult, setAdditionResult] = useState('');
  const [subtractionResult, setSubtractionResult] = useState('');
  const [divisionResult, setDivisionResult] = useState('');
  
  const resultRef = useRef({ addition: null, subtraction: null, division: null });


  const handleOperation = (operation, result) => {
    if (operation === 'addition') {
      setAdditionResult(result);
    } else if (operation === 'subtraction') {
      setSubtractionResult(result);
    } else if (operation === 'division') {
      setDivisionResult(result);
    }
    resultRef.current[operation] = result;
  };

  return (
    <div>
      <h1>Parent Component</h1>
      
      <div>
        <p>The result of addition is: {additionResult}</p>
        <p>The result of subtraction is: {subtractionResult}</p>
        <p>The result of division is: {divisionResult}</p>
      </div>
      <ResultContext.Provider value={resultRef}>
        <Child operation="addition" handleOperation={handleOperation} />
        <Child operation="subtraction" handleOperation={handleOperation} />
        <Child operation="division" handleOperation={handleOperation} />
      </ResultContext.Provider>
    </div>
  );
};

export default Parent;

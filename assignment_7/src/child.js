import { useContext, useRef } from "react";
import { sign } from "./parentcomponent";
import React from "react";
 function Child(props){
  const getRef = useContext(sign)
  const num1= useRef(0);
  const num2= useRef(0);

  function calCulate(){
    if(props.sign==='+'){
      const result1 = parseInt(num1.current.value);
      const result2 = parseInt(num2.current.value);
      const sum = result1+result2;
      getRef.setSum(sum);
    }
    else if(props.sign==='-'){
      const result1 = parseInt(num1.current.value);
      const result2 = parseInt(num2.current.value);
      const sub = result1-result2;
      getRef.setSub(sub);
    }
    else{
      const result1 = parseInt(num1.current.value);
      const result2 = parseInt(num2.current.value);
      const div = result1/result2;
      getRef.setDiv(div);

    }
    
  }
  return(
    <>
    <div>
      
      <input type="input" ref={num1} />
      
      <input type="input" ref={num2} />
    <button onClick={calCulate} >calculate</button>
    </div>
  </>
  )
 }
 export default Child;
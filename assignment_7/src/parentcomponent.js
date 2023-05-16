import { createContext, useState } from "react";
import Child from "./child";
export const sign= createContext();
const Parent=()=>{
  const [sum ,setSum] = useState('');
  const [sub ,setSub] = useState('');
  const [div ,setDiv] = useState('');

  const value = {setSum,setSub,setDiv};

return(
  
  <div>
    <p>this is result of addition:{sum}</p>
    <p>this is result of subtraction:{sub}</p>
    <p>this is result of division:{div}</p>
    <sign.Provider value={value}>
    <Child sign='+'/>
    <Child sign='-'/>
    <Child sign='/'/>
  </sign.Provider>
    
  </div>

)
}
export default Parent;
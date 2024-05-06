import React, { useReducer } from 'react';

const initialState = {
    fristCounter : 0,
    secondCounter : 10
}

const reducer = (state,action) =>{
  switch(action.type) {
    case "increment" : 
      return {...state,fristCounter:state.fristCounter+1 +action.value}
    case "decrement" :
       return {...state,fristCounter:state.fristCounter-1 + action.value}
 
       case "increment2" :
        return {...state,secondCounter:state.secondCounter+1 +action.value}

      case "decrement2" :
         return {...state,secondCounter:state.secondCounter-1 + action.value}

    case 'reset':
      return initialState
     default :
      return state    
  }
}

function CounterTwo() {
  const [count,dispatch ] = useReducer(reducer,initialState)
  return (
    <div>
      <h1>couniter fristCounter {count.fristCounter}</h1>
      <h1>couniter SecondCounter {count.secondCounter}</h1>
      <button onClick={()=>dispatch({type:"increment",value:1})}>increment 1</button>
      <button onClick={()=>dispatch({type:"decrement",value:5})}>decrement 5</button>

      <button onClick={()=>dispatch({type:"increment2",value:1})}>incrementSecond 1</button>
      <button onClick={()=>dispatch({type:"decrement2",value:5})}>decrementsecond 5</button>
      
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  );
}

export default CounterTwo;

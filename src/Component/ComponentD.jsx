import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentD() {
    const countcontext = useContext(CountContext)
  return (
    <div>
      <h1>ComponentD</h1>
      <button onClick={()=>countcontext.countdispatch('increment')}>Increment</button>
      <button onClick={()=>countcontext.countdispatch('decrement')}>decrement</button>
      <button onClick={()=>countcontext.countdispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentD;

import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentF() {
    const countcontext = useContext(CountContext)
  return (
    <div>
      <h3>count Value - {countcontext.countState}</h3>
      <button onClick={()=>countcontext.countdispatch('increment')}>Increment</button>
      <button onClick={()=>countcontext.countdispatch('decrement')}>decrement</button>
      <button onClick={()=>countcontext.countdispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentF;

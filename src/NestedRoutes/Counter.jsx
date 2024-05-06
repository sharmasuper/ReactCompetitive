import React, { useMemo, useState } from 'react';

function Counter() {
    const [counterOne,setCounterOne] = useState(0)
    const [counterTwo,setCounterTwo] = useState(0)

    const incrementOwo = () =>{
        console.log("one")
        setCounterOne(counterOne+1)
    }
    const incrementTwo = () =>{
        console.log("two")
        setCounterTwo(counterTwo+1)
    }
//  const isEven = useMemo(() =>{    //incrementTwo delay remove when we use useMemo
//     let i=0 
//     while(i<2000000000) i++
//     return counterOne%2 === 0

// },[counterOne])

//jab parameter pass karai 

const isEven = useMemo((e)=>{
   let i = e
   while(i<2000000) i++
   return counterOne%2 === 0
}
,[counterOne]) 




//  const isEven = (e) =>{    //why incrementTwo is slow reason is rerender use useMemo Hook
//     let i = e
//     while(i<2000000000) i++
//     return counterOne%2 === 0
// }
// const chh = isEven(0)

  return (
   <>
    <div>
       <button onClick={incrementOwo}>count One - {counterOne}</button>
       <span>{isEven(0) ? "Even" :"Odd"}</span>
       <button onClick={incrementTwo}>count Two - {counterTwo}</button>
    </div>
   </>
  );
}

export default Counter;

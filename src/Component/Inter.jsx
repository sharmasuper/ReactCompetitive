import React, { useEffect, useState } from 'react';

function Inter() {


const [count,setCount] = useState(0)
const [value1,setvalue] = useState("")

// useEffect(()=>{
//     console.log("claa")
//     const interval = setInterval(()=>{
//          setCount(count+1)
//     },1000)

//     return () =>{
//         clearInterval(interval)
//     }             
// })




useEffect(()=>{

  
    console.log("claa")
    const interval = setInterval(()=>{
        //  setCount(count+1)  //use count dependence 
        setCount((pre)=>{
            return pre+1
        })
    
    },1000)

    return () =>{
        clearInterval(interval)
    }             
},[])   //issai mount hoga update kai liy dependence lagani pdaigi  [count]   


  return (
    <div>
       <h1>{count}</h1>  <h1>{value1}</h1>

       <input type="text" onChange={(e)=>setvalue(e.target.value)} />
    </div>
  );
}

export default Inter;

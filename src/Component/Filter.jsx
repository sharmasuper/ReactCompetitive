import React from 'react';
import Layout from '../Layout/Layout';
import { useSearchParams } from 'react-router-dom';

function Filter() {
 //hamia question ?age = 30 jab console hoga
  const [searchParams,setSearchParams] = useSearchParams()   //setSearchParams yai direct key set kar detha h
//   console.log(searchParams.get('age'))
//   console.log(searchParams.get('city'))
const age = searchParams.get('age')
const city = searchParams.get('city')

  return (
    <Layout>
    <div>
      <h1>Hello Filter</h1>
      <h1 style={{display:age?'block':'none'}}>My age is - {age?age:"please wait"}</h1>
      <h1 style={{display:city?'block':'none'}}>My city is -  {city?city:"please wait..."}</h1>
      <button onClick={()=>setSearchParams({age:40,city:"kota"})}>add Parameter</button>
    </div>
    </Layout>
  );
}

export default Filter;

import React, { useState,useCallback } from 'react';
import Button from './Button';
import Count from './Count';

const Parentcomponent = () => {
    const [age,setage] = useState(25)
    const [salary,setSalary] = useState(50000)
    const incrementage = useCallback(() =>{
        setage(age+1)
    },[age])  
    const IncrementSalary = useCallback(() =>{
        setSalary(salary+1000)
    },[salary])
  return (
    <>
    {/* age yaha title hota to hum usper bhi usememo hook ka use kartai */}
    <Count text="age" count={age} />
    <Button handleClick={incrementage}>Increment age</Button>
    <Count text="salary" count={salary}></Count>
    <Button handleClick={IncrementSalary}>Increment Salary</Button>
    </>
  );
}

export default Parentcomponent;

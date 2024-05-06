import React, { useState } from 'react';
import Button from './Button';
import Count from './Count';

const Parentcomponent = () => {
    const [age,setage] = useState(25)
    const [salary,setSalary] = useState(50000)
    const incrementage = () =>{
        setage(age+1)
    }
    const IncrementSalary = () =>{
        setSalary(salary+1000)
    }
  return (
    <>
    <Count text="age" count={age} />
    <Button handleClick={incrementage}>Increment age</Button>
    <Count text="salary" count={salary}></Count>
    <Button handleClick={IncrementSalary}>Increment Salary</Button>
    </>
  );
}

export default Parentcomponent;

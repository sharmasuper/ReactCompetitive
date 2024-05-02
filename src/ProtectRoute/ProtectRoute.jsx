import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';

function ProtectRoute(props) {
  const {Component} = props 
  const navigate = useNavigate()
  
 useEffect(()=>{
  let login = localStorage.getItem('login')
  if(!login){
   navigate("/Login")
  }
})

  return (
    <>
      <Component/>
      {/* <h1>Protext</h1> */}
      </>
  );
}

export default ProtectRoute;

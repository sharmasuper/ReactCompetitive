import React, { useEffect } from 'react';
import Layout from '../Layout/Layout'; 
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

  const logins = () =>{
    localStorage.setItem('login',true)
    navigate('/') 
  }
 
 
  useEffect(()=>{
    let login = localStorage.getItem('login')
    if(login){
        navigate('/') 
    } 
  },[]) 

  return (
    <Layout>
    <div>
      <h1>Login Page</h1>
      <input type='text'/> <br/>
      <input type='text' /> <br/>
      <button onClick={logins}>Login</button>
    </div> 
    </Layout> 
  );
}

export default Login;

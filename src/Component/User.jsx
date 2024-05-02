import React from 'react';
import Layout from '../Layout/Layout';
import { Link, useLocation, useParams } from 'react-router-dom';

function User() {
    const params = useParams()
    const {name} = params
   
    const location = useLocation()
    console.log(location)

  return (
    <Layout>
      <h1>Hello user -dear - {name}</h1> 
     
    </Layout>
  );
}

export default User;

import React from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';

function User() {
    const params = useParams()
    const {name} = params
   
  return (
    <Layout>
      <h1>Hello user -dear - {name}</h1> 
    </Layout>
  );
}

export default User;

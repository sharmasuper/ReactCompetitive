import React from 'react';
import Layout from '../Layout/Layout';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation()
    console.log(location)
  return (
    <Layout>
      <h1>Hello Home</h1>
    </Layout>
  );
}

export default Home;

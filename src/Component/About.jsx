import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Layout>
      <h1>Hello About</h1>
      <ul>
        <Link to="/user/anil" state={{name:'anil sidhu',age:'40'}}>anil</Link> <br/>
        <Link to="/user/peter" >peter</Link> <br/>
        <Link to="/user/bruce">bruce</Link> <br/>
      </ul>
    </Layout>
  );
}

export default About;

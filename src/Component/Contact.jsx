import React from 'react';
import Layout from '../Layout/Layout';
import { NavLink, Outlet } from 'react-router-dom';

function Contact() {
  return (
    <Layout>
    <div>
      <h1>Contact Page</h1>
      <h3>Here we have some other business</h3>
      <NavLink to="Company">Company</NavLink>
      <pre/>
      <NavLink to="Channel">Channel</NavLink>
      <pre/>
      <NavLink to="Other">Other</NavLink>
      <Outlet/>
    </div>
    </Layout>
  );
}

export default Contact;

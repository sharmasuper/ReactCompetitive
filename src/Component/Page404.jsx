import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css'; // Import CSS for styling
import Im4 from '../Images/error-4971_128.gif'
import Layout from '../Layout/Layout';

function Page404() {
  return (
    <Layout>
    <div className="not-found-container">
      <div className="not-found-content">
        <h2>404 Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="not-found-link">Go to Home</Link>
      </div>
      <div className="not-found-image">
        <img src={Im4} alt="404" />
      </div>
    </div>
    </Layout>
  );
}

export default Page404;

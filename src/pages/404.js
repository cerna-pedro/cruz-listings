import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn't exist... the sadness.Click{' '}
        <Link to='/'>here</Link> to go to the home page.
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;

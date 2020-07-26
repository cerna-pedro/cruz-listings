import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Link to='/listings'>Listings</Link>
      <h1>This is the index page</h1>
    </Layout>
  );
};

export default IndexPage;

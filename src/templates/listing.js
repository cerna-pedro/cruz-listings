import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const ListingTemplate = ({ description, title, helmet }) => {
  return (
    <section>
      {helmet || ''}
      <h1>{title}</h1>
      <p>{description}</p>
      <p>This is the template</p>
    </section>
  );
};

const Listing = ({ data }) => {
  const { markdownRemark: listing } = data;
  return (
    <Layout>
      <ListingTemplate
        description={listing.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Blog'>
            <title>{`${listing.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${listing.frontmatter.description}`}
            />
          </Helmet>
        }
        title={listing.frontmatter.title}
      />
    </Layout>
  );
};

export default Listing;

export const pageQuery = graphql`
  query ListingByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;

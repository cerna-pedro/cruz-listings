import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import cruz from '../img/cruz.jpg';
import dimas from '../img/dimas.jpg';

// TODO make PNGs out of dimas and cruz
// TODO use gatsby image instead of img tags
// TODO add background gradient with brand colors instead

export const ListingTemplate = ({
  description,
  title,
  helmet,
  img,
  status,
}) => {
  return (
    <section>
      {helmet || ''}
      <div className='top'>
        <img src={cruz} alt='Jason Cruz, Realtor' />
        <h2>Jason Cruz</h2>
        <h3>Realtor</h3>
        <span>
          <a href='tel:+1-832-768-0058'>832.768.0058</a>
        </span>
        <p>
          <a
            href='https://markdimas.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            MARKDIMAS.COM
          </a>
        </p>
      </div>
      <div className='middle'>
        <Img fluid={img} />
      </div>
      <div className='bottom'>
        <h1>{title}</h1>
        <p>{status}</p>
        <p>{description}</p>
        <img src={dimas} alt='Mark Dimas Properties Logo' />
      </div>
    </section>
  );
};

const Listing = ({ data }) => {
  const { markdownRemark: listing } = data;
  console.log(listing);
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
        img={listing.frontmatter.featuredimage.childImageSharp.fluid}
        status={listing.frontmatter.status}
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
        status
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

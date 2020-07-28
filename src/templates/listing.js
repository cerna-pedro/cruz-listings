import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import Cruz from '../components/Cruz';
import Logo from '../components/Logo';

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
        <Cruz />
        <div className='info'>
          <h1>Jason Cruz</h1>
          <p>Realtor</p>
          <span className='link'>
            <a href='tel:+1-832-768-0058'>832.768.0058</a>
          </span>
          <p className='link'>
            <a
              href='https://markdimas.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              MARKDIMAS.COM
            </a>
          </p>
        </div>
      </div>
      <div className='middle'>
        <Img fluid={img} />
        <span>{status.toUpperCase()}</span>
      </div>
      <div className='bottom'>
        <Logo />
        <div className="house-info">

        <h2>{title}</h2>
        <p>{description}</p>
        </div>

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
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`;

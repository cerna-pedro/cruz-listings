import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import Cruz from '../components/Cruz';
import Logo from '../components/Logo';

export const ListingTemplate = ({
  content,
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
          <p className='link'>
            <a href='tel:+1-832-768-0058'>832.768.0058</a>
          </p>
          <p className='link'>
            <a
              href='https://markdimas.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              MarkDimas.com
            </a>
          </p>
        </div>
      </div>
      <div className='middle'>
        <Img fluid={img} alt={content} />
        <span>{status.toUpperCase()}</span>
      </div>
      <div className='bottom'>
        <div className="house-info">

        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <Logo />
      </div>
    </section>
  );
};

const Listing = ({ data }) => {
  const { markdownRemark: listing } = data;
  return (
    <Layout>
      <ListingTemplate
        description={listing.html}
        helmet={
          <Helmet titleTemplate='%s | Listing'>
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
            fluid(maxWidth: 3000, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`;

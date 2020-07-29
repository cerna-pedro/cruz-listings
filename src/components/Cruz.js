import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Cruz = () => {
  const data = useStaticQuery(graphql`
    {
      desktopImage: file(relativePath: { eq: "cruz.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mobileImage: file(relativePath: { eq: "cruz.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const sources = [
    data.mobileImage.childImageSharp.fixed,
    {
      ...data.desktopImage.childImageSharp.fixed,
      media: `(min-width: 500px)`,
    },
  ];
  return <Img fixed={sources} alt='Jason Cruz, Realtor' />;
};

export default Cruz;

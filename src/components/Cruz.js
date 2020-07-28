import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Cruz = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "cruz.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return <Img fixed={data.file.childImageSharp.fixed} alt='Jason Cruz, Realtor'/>;
};

export default Cruz;

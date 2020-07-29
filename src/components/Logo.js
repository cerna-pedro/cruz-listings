import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 310) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return <Img fixed={data.file.childImageSharp.fixed} alt='Hidden Leaf Realty Group Logo'/>;
};

export default Logo;

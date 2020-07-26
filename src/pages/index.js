import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ListingQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 120, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              description
            }
          }
        }
      }
    }
  `);
  console.log(data.allMarkdownRemark.edges);
  return (
    <Layout>
      <ul>
        {data.allMarkdownRemark.edges.map((item,i) => {
          return (
            <li key={i}>
              <Link to={item.node.fields.slug}> {item.node.frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default IndexPage;
